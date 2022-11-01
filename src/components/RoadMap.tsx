import React from 'react';
import {GoChevronLeft, GoChevronUp} from 'react-icons/go';
import {BsDot, BsFillChatFill} from 'react-icons/bs';

function RoadMap({handleBack, live, progress, planned} : any) {

    return (
        <div className="w-full h-full">
            <div className="w-3/4 h-28 ml-auto mr-auto bg-slate-700 mt-8 rounded-xl flex flex-row">
                <div className="w-4/5 h-full flex flex-col justify-center ml-8">
                    <div className="flex items-center mb-4 text-white text-sm">
                        <GoChevronLeft className="text-lg" onClick={handleBack} />
                        <h1>Go Back</h1>
                    </div>
                    <h1 className="text-2xl font-bold text-white">
                        RoadMap
                    </h1>
                </div>
                <div className="w-1/5 h-full flex items-center">
                    <button className="w-3/5 p-3 rounded-lg bg-fuchsia-500 text-white font-semibold text-sm">
                        + Add Feedback
                    </button>
                </div>
            </div>
            <div className="w-3/4 h-full ml-auto mr-auto grid grid-cols-3">
                <div className="w-full mt-10">
                    <h1 className="text-lg font-bold text-slate-700">
                        Planned ({planned.in_planning.length})
                    </h1>
                    <p className="text-gray-400">
                        Ideas prioritized for research
                    </p>
                    <div className="w-full h-full mt-8">
                        {planned.in_planning.map((details : any, index : number) => {
                            return (
                                <div className="w-4/5 h-64 flex flex-col border-t-8 border-orange-400 rounded-lg mt-6" key={index}>
                                    <div className="w-4/5 h-full ml-auto mr-auto mt-6">
                                        <div className="w-full flex flex-row items-center">
                                            <BsDot className="text-4xl text-orange-400" />
                                            <h1 className="text-gray-400">
                                                {details.status}
                                            </h1>
                                        </div>
                                        <div className="w-full">
                                            <h1 className="text-slate-700 font-bold text-lg">
                                                {details.title}
                                            </h1>
                                            <h1 className="text-gray-400">
                                                {details.description}
                                            </h1>
                                            <h1 className="text-blue-800 ml-6 mt-6 font-bold text-xs">
                                                {details.category}
                                            </h1>
                                        </div>
                                        <div className="w-full flex mt-8">
                                            <div className="w-4/5 flex flex-row items-center space-x-2 text-blue-800 font-bold">
                                                <GoChevronUp />
                                                <h1>
                                                    {details.upvotes}
                                                </h1>
                                            </div>
                                            <div className="w-1/5 flex flex-row items-center space-x-2">
                                                <BsFillChatFill className="text-gray-300" />
                                                <h1 className="text-blue-800 font-bold">
                                                    {!details.comments ? 0 : details.comments.length}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="w-full h-full mt-10">
                    <h1 className="text-lg font-bold text-slate-700">
                        In-Progress ({progress.in_progress.length})
                    </h1>
                    <p className="text-gray-400">
                        Currently being developed
                    </p>
                    <div className="w-full h-full mt-8">
                        {progress.in_progress.map((details : any, index : number) => {
                            return (
                                <div className="w-4/5 h-64 flex flex-col border-t-8 border-fuchsia-500 rounded-md mt-6" key={index}>
                                    <div className="w-4/5 h-full ml-auto mr-auto mt-6">
                                        <div className="w-full flex flex-row items-center">
                                            <BsDot className="text-4xl text-fuchsia-500" />
                                            <h1 className="text-gray-400">
                                                {details.status}
                                            </h1>
                                        </div>
                                        <div className="w-full">
                                            <h1 className="text-slate-700 font-bold text-lg">
                                                {details.title}
                                            </h1>
                                            <h1 className="text-gray-400">
                                                {details.description}
                                            </h1>
                                            <h1 className="text-blue-800 ml-6 mt-6 font-bold text-xs">
                                                {details.category}
                                            </h1>
                                        </div>
                                        <div className="w-full flex mt-8">
                                            <div className="w-4/5 flex flex-row items-center space-x-2 text-blue-800 font-bold">
                                                <GoChevronUp />
                                                <h1>
                                                    {details.upvotes}
                                                </h1>
                                            </div>
                                            <div className="w-1/5 flex flex-row items-center space-x-2">
                                                <BsFillChatFill className="text-gray-300" />
                                                <h1 className="text-blue-800 font-bold">
                                                    {!details.comments ? 0 : details.comments.length}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="w-full h-full mt-10">
                    <h1 className="text-lg font-bold text-slate-700">
                        Live ({live.in_live.length})
                    </h1>
                    <p className="text-gray-400">
                        Released features
                    </p>
                    <div className="w-full h-full mt-8">
                        {live.in_live.map((details : any, index : number) => {
                           return (
                                <div className="w-4/5 h-64 flex flex-col border-t-8 border-sky-400 rounded-md" key={index}>
                                    <div className="w-4/5 h-full ml-auto mr-auto mt-6">
                                        <div className="w-full flex flex-row items-center">
                                            <BsDot className="text-4xl text-sky-400" />
                                            <h1 className="text-gray-400">
                                                {details.status}
                                            </h1>
                                        </div>
                                        <div className="w-full">
                                            <h1 className="text-slate-700 font-bold text-lg">
                                                {details.title}
                                            </h1>
                                            <h1 className="text-gray-400">
                                                {details.description}
                                            </h1>
                                            <h1 className="text-blue-800 ml-6 mt-6 font-bold text-xs">
                                                {details.category}
                                            </h1>
                                        </div>
                                        <div className="w-full flex mt-8">
                                            <div className="w-4/5 flex flex-row items-center space-x-2 text-blue-800 font-bold">
                                                <GoChevronUp />
                                                <h1>
                                                    {details.upvotes}
                                                </h1>
                                            </div>
                                            <div className="w-1/5 flex flex-row items-center space-x-2">
                                                <BsFillChatFill className="text-gray-300" />
                                                <h1 className="text-blue-800 font-bold">
                                                    {!details.comments ? 0 : details.comments.length}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadMap;