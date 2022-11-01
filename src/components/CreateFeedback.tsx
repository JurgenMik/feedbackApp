import React, {useState} from 'react';
import {GoChevronLeft} from 'react-icons/go';
import {BsPlus} from 'react-icons/bs';
import {feedbackInterface} from "../Interfaces/Feedback";

function CreateFeedback({handleBack, setSuggestions, suggestions, setCreate} : any) {

    const [feedback, setFeedback] = useState<feedbackInterface>({
        title: '',
        category: '',
        description: '',
        status: 'planned',
        upvotes: 0,
        comments: [],
    });

    const handleSelect = (e : React.ChangeEvent<HTMLSelectElement>) => {
        setFeedback({...feedback, [e.target.name] : e.target.value})
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setFeedback({...feedback, [e.target.name] : e.target.value});
    }

    const handleFeedbackSave = () => {
        setSuggestions(suggestions.concat(feedback));

        setCreate(false);
    }

    return (
        <div className="w-2/5 h-full ml-auto mr-auto">
            <div className="w-full h-24 flex flex-row items-center pl-6 text-blue-700 font-bold space-x-4">
                <GoChevronLeft />
                <h1 onClick={handleBack}>
                    Go Back
                </h1>
            </div>
            <div className="w-full h-4/6 flex flex-col">
                <div className="w-4/5 h-full ml-auto mr-auto">
                    <div className="w-full h-20 flex items-center">
                        <span className="p-6 bg-background rounded-full bg-cover text-white">
                            <BsPlus className="text-3xl" />
                        </span>
                    </div>
                    <div className="w-full mt-8 text-2xl font-bold text-slate-700">
                        <h1>Create New Feedback</h1>
                    </div>
                    <div className="w-full mt-8">
                        <h1 className="font-bold text-slate-700 text-lg">
                            Feedback Title
                        </h1>
                        <p className="text-gray-400">
                            Add a short, descriptive title
                        </p>
                        <input
                            name="title"
                            className="p-6 w-full rounded-md mt-4"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full mt-8">
                        <h1 className="font-bold text-slate-700 text-lg">
                            Category
                        </h1>
                        <p className="text-gray-400">
                            Choose a category for your feedback
                        </p>
                        <select
                            name="category"
                            className="w-full p-3 rounded-md mt-4 text-blue-900"
                            onChange={handleSelect}
                        >
                            <option value="Feature">Feature</option>
                            <option value="Bug">Bug</option>
                            <option value="UI">UI</option>
                            <option value="Enhancement">Enhancement</option>
                            <option value="UX">UX</option>
                        </select>
                    </div>
                    <div className="w-full mt-8">
                        <h1 className="font-bold text-slate-700 text-lg">
                            Feedback Detail
                        </h1>
                        <p className="text-gray-400">
                            Include any specific comments on what should be improved, added, etc.
                        </p>
                        <input
                            name="description"
                            className="p-10 w-full rounded-md mt-4"
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full h-1/6 flex items-center justify-end space-x-6 text-white font-bold">
                <button onClick={handleBack} className="p-3 w-1/6 bg-blue-900 rounded-xl">
                    Cancel
                </button>
                <button onClick={handleFeedbackSave} className="p-3 w-1/5 bg-fuchsia-500 rounded-xl">
                    Add Feedback
                </button>
            </div>
        </div>
    );
}
export default CreateFeedback;