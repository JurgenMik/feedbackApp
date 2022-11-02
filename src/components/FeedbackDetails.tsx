import React, {useState} from 'react';
import {GoChevronLeft, GoChevronUp} from 'react-icons/go';
import {BsFillChatFill} from 'react-icons/bs';

function FeedbackDetails({selected, setSelected, setDetails, data} : any) {

    const [fieldCounter, setCounter] = useState<number>(250);
    const [error, setError] = useState<boolean>(false);
    const [comment, setComment] = useState<object>({
        content: '',
        user: {
            image: data.currentUser.image,
            name: data.currentUser.name,
            username: data.currentUser.username
        }
    })

    const handleBack = () => {
        setDetails(false);
    }

    const handleCommentPost = () => {
        const commentArr = [...selected.comments];
        const newComment = commentArr.concat(comment);

        setSelected({...selected, comments : newComment});
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        if (fieldCounter !== 0) {
            const count = 250 - e.target.value.length;

            setCounter(count);
        } else {
            setError(true);
        }
        setComment({...comment, content : e.target.value});
    }

    return (
        <div className="w-2/5 h-full ml-auto mr-auto mt-8">
            <div className="w-full h-16 flex items-center">
                <div className="w-4/5 flex items-center ml-6 text-blue-700 font-bold space-x-4">
                    <GoChevronLeft />
                    <h1 onClick={handleBack}>
                        Go Back
                    </h1>
                </div>
                <div className="w-1/5">
                    <button className="p-3 w-full bg-blue-900 rounded-xl text-white text-sm font-bold">
                        Edit Feedback
                    </button>
                </div>
            </div>
            <div className="w-full h-28 flex items-center mt-8">
                <div className="w-1/6 flex flex-col items-center text-blue-800 font-bold">
                    <GoChevronUp />
                    <h1>{selected.upvotes}</h1>
                </div>
                <div className="w-4/6 flex flex-col space-y-2">
                    <h1 className="text-xl text-slate-700 font-bold">
                        {selected.title}
                    </h1>
                    <h1 className="text-gray-500 text-lg">
                        {selected.description}
                    </h1>
                    <div className="ml-6 text-blue-700 text-sm font-bold">
                        <h1>
                            {selected.category}
                        </h1>
                    </div>
                </div>
                <div className="w-1/6 flex items-center justify-center pb-5">
                    <BsFillChatFill className="text-gray-300 text-xl" />
                    <p className={`${!selected.comments ? "text-gray-400" : 'text-blue-800'} ml-2 font-bold`}>
                        {!selected.comments ? 0 :
                            selected.comments.length
                        }
                    </p>
                </div>
            </div>
            <div className="w-full h-16 mt-16">
                <div className="w-1/5 h-full flex items-center justify-center text-xl text-blue-900 font-bold">
                    <h1>{!selected.comments ? 0 : selected.comments.length} Comments</h1>
                </div>
            </div>
            <div className="w-full h-4/5 max-h-auto">
                {!selected.comments ? <h1 className="text-xl font-bold flex justify-center mt-16">No comments under this feedback</h1> :
                    selected.comments.map((comments : any, index : number) => {
                        return (
                            <div className="w-full h-36 flex flex-row mt-6" key={index}>
                                <div className="w-36 h-full flex justify-center">
                                    <img
                                        className="w-12 h-12 rounded-full"
                                        src={comments.user.image}
                                        alt="profile"
                                    />
                                </div>
                                <div className="w-full h-full">
                                    <div className="w-full flex flex-row">
                                        <div className="w-4/5 flex flex-col">
                                            <h1 className="text-blue-900 font-bold">
                                                {comments.user.name}
                                            </h1>
                                            <h1 className="text-gray-400 text-sm">
                                                @{comments.user.username}
                                            </h1>
                                        </div>
                                        <div className="w-1/5 text-blue-900 font-bold flex justify-end">
                                            <h1>Reply</h1>
                                        </div>
                                    </div>
                                    <div className="w-full h-3/5 text-gray-400">
                                        <p>
                                            {comments.content}
                                        </p>
                                    </div>
                                    {!comments.replies ? null :
                                        comments.replies.map((replies : any, index: number) => {
                                        return (
                                            <div className="w-full h-36 flex flex-row mb-16 mt-8" key={index}>
                                                <div className="w-24 h-full flex justify-center">
                                                    <img
                                                        className="w-12 h-12 rounded-full"
                                                        src={replies.user.image}
                                                        alt="profile"
                                                    />
                                                </div>
                                                <div className="w-full h-full ml-4">
                                                    <div className="w-full h-2/5 flex flex-row">
                                                        <div className="w-4/5 flex flex-col">
                                                            <h1 className="text-blue-900 font-bold">
                                                                {replies.user.name}
                                                            </h1>
                                                            <h1 className="text-gray-400 text-sm">
                                                                @{replies.user.username}
                                                            </h1>
                                                        </div>
                                                        <div className="w-1/5 text-blue-900 font-bold flex justify-end">
                                                            <h1>Reply</h1>
                                                        </div>
                                                    </div>
                                                    <div className="w-full h-3/5 text-gray-400">
                                                        <p>
                                                            <span className="text-lg font-bold text-fuchsia-500">@{replies.replyingTo}
                                                            </span> {replies.content}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {selected.comments ?
                <div className="w-full h-24 flex flex-col">
                    <h1 className="text-xl text-slate-700 font-bold">
                        Add Comment
                    </h1>
                    <input
                        name="comment"
                        type="text"
                        className="p-6 w-full rounded-md mt-4"
                        placeholder="Type your comment here..."
                        onChange={handleChange}
                    />
                    <div className="w-full h-12 flex flex-row items-center mt-6 mb-4">
                        <div className={`w-4/5 ${error ? "text-red-800" : "text-gray-400"}`}>
                            <p>
                                {fieldCounter}
                            </p>
                        </div>
                        <div className="w-1/5 h-16">
                            <button onClick={handleCommentPost} className="w-full p-3 rounded-lg bg-fuchsia-500 text-white font-semibold">
                                Post Comment
                            </button>
                        </div>
                    </div>
                </div>
                : null}
        </div>
    )
}

export default FeedbackDetails;