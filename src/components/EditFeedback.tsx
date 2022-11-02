import React from 'react';
import {GoChevronLeft} from "react-icons/go";
import {BsPlus} from "react-icons/bs";

function EditFeedback({selected, setSelected, setEdit, suggestions, setSuggestions} : any) {

    const handleBack = () => {
        setEdit(false);
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSelected({...selected, [e.target.name] : e.target.value});
    }

    const handleSelect = (e : React.ChangeEvent<HTMLSelectElement>) => {
        setSelected({...selected, [e.target.name] : e.target.value});
    }

    const handleSaveEdit = () => {
        setSuggestions(suggestions.filter((suggestions : any) =>
            suggestions.id !== selected.id).concat(selected));

        setEdit(false);
    }

    const handleDelete = () => {
        setSuggestions(suggestions.filter((suggestions : any) =>
            suggestions.id !== selected.id));
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
                        <h1>Editing `{selected.title}`</h1>
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
                            value={selected.title}
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
                            value={selected.category}
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
                            Update Status
                        </h1>
                        <p className="text-gray-400">
                            Change feedback State
                        </p>
                        <select
                            name="status"
                            className="w-full p-3 rounded-md mt-4 text-blue-900"
                            value={selected.status}
                            onChange={handleSelect}
                        >
                            <option value="suggestion">Suggestion</option>
                            <option value="planned">Planned</option>
                            <option value="in-progress">In-Progress</option>
                            <option value="live">Live</option>
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
                            value={selected.description}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full h-1/6 flex items-center space-x-6 text-white font-bold mt-36">
                <button onClick={handleDelete} className="p-3 w-1/6 bg-red-600 rounded-xl">
                    Delete
                </button>
                <div className="w-full flex justify-end space-x-6">
                    <button onClick={handleBack} className="p-3 w-1/6 bg-blue-900 rounded-xl">
                        Cancel
                    </button>
                    <button onClick={handleSaveEdit} className="p-3 w-1/4 bg-fuchsia-500 rounded-xl">
                        Add Feedback
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditFeedback;