import React, {useEffect, useState, useMemo} from 'react';
import {BsDot, BsFillChatFill} from 'react-icons/bs';
import {GiLightBulb} from 'react-icons/gi';
import {GoChevronUp} from 'react-icons/go';
import data from './data.json';
import {feedbackInterface, category} from "./Interfaces/Feedback";
import RoadMap from "./components/RoadMap";

function App() {

    const [suggestions, setSuggestions] = useState<feedbackInterface[]>([]);
    const [sort, setSort] = useState<string>();
    const [view, setView] = useState<boolean>(false);
    const [planned, setPlanned] = useState<feedbackInterface[]>([]);
    const [live, setLive] = useState<feedbackInterface[]>([]);
    const [progress, setProgress] = useState<feedbackInterface[]>([]);
    const [category, setCategory] = useState<category>({
        isActive : ''
    });

    useEffect(() => {
        setSuggestions(data.productRequests);
        handleRoadMapCount();
    }, [suggestions.length])

    useEffect(() => {
        setCategory({...category, isActive : 'all'});
    }, [])

    useEffect(() => {
        handleSort();
    }, [sort])

    const handleSelect = (e : React.ChangeEvent<HTMLSelectElement>) => {
        setSort(e.target.value);
    }

    const handleRoadMapCount = () => {
        setPlanned(planned.concat(suggestions.filter((feedback) =>
            feedback.status === 'planned')));
        setProgress(progress.concat(suggestions.filter((feedback) => feedback.status === 'in-progress')));
        setLive(live.concat(suggestions.filter((feedback) => feedback.status === 'live')));
    }

    const handleSort = () => {
      if (sort === 'mostVotes') {
          suggestions.sort((a : any, b : any) =>
              a.upvotes > b.upvotes ? 1 : -1
          );
      }
      if (sort === 'leastVotes') {
          suggestions.sort((a : any, b : any) =>
              a.upvotes < b.upvotes ? 1 : -1
          );
      }
      if (sort === 'mostComments') {
          suggestions.sort((a : any, b : any ) => {
              const k1 = a.comments === undefined  ? 0 : a.comments.length
              const k2 = b.comments === undefined ? 0 : b.comments.length

              return k1 > k2 ? 1 : -1;
          });
      }
      if (sort === 'leastComments') {
          suggestions.sort((a : any, b : any ) => {
              const k1 = a.comments === undefined  ? 0 : a.comments.length
              const k2 = b.comments === undefined ? 0 : b.comments.length

              return k1 < k2 ? 1 : -1;
          });
      }
    }

    const handleVoteIncrement = (e : React.MouseEvent<HTMLOrSVGElement>, index : any) => {
        const voteCount : any = suggestions[index].upvotes;

        let increment = voteCount + 1;

        setSuggestions((prev : any) => {
            const updatedCount = prev.map((obj : any, objIndex : number) => {
                if (index === objIndex) {
                    return {...obj, upvotes : increment};
                }
                return obj;
            });
            return updatedCount;
        });
    }

    const handleFilters = () => {
        if (category.isActive === 'ui') {
            return suggestions.filter((feedback) =>
                feedback.category === 'UI');
        }
        if (category.isActive === 'ux') {
            return suggestions.filter((feedback) =>
                feedback.category === 'UX');
        }
        if (category.isActive === 'feature') {
            return suggestions.filter((feedback) =>
                feedback.category === 'Feature');
        }
        if (category.isActive === 'bug') {
            return suggestions.filter((feedback) =>
                feedback.category === 'Bug');
        }
        if (category.isActive === 'enhancement') {
            return suggestions.filter((feedback) =>
                feedback.category === 'Enhancement');
        }
        if (category.isActive === 'all') {
            return suggestions;
        }
        return suggestions;
    }

    const filteredList = useMemo(handleFilters, [category, suggestions]);

    const handleRoadMapView = () => {
        setView(true);
    }

    const handleBack = () => {
        setView(false);
    }

    return (
      <div className="w-full h-screen">
          {view ? <RoadMap handleBack={handleBack} live={live} planned={planned} progress={progress} /> :
          <div className="w-3/4 h-full ml-auto mr-auto grid grid-cols-6">
              <div className="col-span-2 w-full h-full flex flex-col items-center space-y-6">
                  <div className="w-3/4 h-40 mt-8 rounded-xl bg-background bg-cover mb-6">
                      <div className="w-3/4 h-full flex flex-col text-white justify-end ml-8 pb-8">
                          <h1 className="text-2xl font-bold">
                              Frontend Mentor
                          </h1>
                          <p>Feedback Board</p>
                      </div>
                  </div>
                  <div className="w-1/2 h-40 ml-auto mr-auto space-y-4 text-blue-600 font-bold">
                      <div className="w-full space-x-10">
                          <button
                              className={`${category.isActive === 'all' ? "p-1 pl-4 pr-4 bg-blue-800 text-white rounded-xl" : null}`}
                              onClick={e => setCategory({...category, isActive : 'all'})}>
                              All
                          </button>
                          <button
                              className={`${category.isActive === 'ui' ? "p-1 pl-4 pr-4 bg-blue-800 text-white rounded-xl" : null}`}
                              onClick={e => setCategory({...category, isActive : 'ui'})}>
                              UI
                          </button>
                          <button
                              className={`${category.isActive === 'ux' ? "p-1 pl-4 pr-4 bg-blue-800 text-white rounded-xl" : null}`}
                              onClick={e => setCategory({...category, isActive : 'ux'})}>
                              UX
                          </button>
                      </div>
                      <div className="w-full space-x-10">
                          <button
                              className={`${category.isActive === 'enhancement' ? "p-1 pl-4 pr-4 bg-blue-800 text-white rounded-xl" : null}`}
                              onClick={e => setCategory({...category, isActive : 'enhancement'})}>
                              Enhancement
                          </button>
                          <button
                              className={`${category.isActive === 'bug' ? "p-1 pl-4 pr-4 bg-blue-800 text-white rounded-xl" : null}`}
                              onClick={e => setCategory({...category, isActive : 'bug'})}>
                              Bug
                          </button>
                      </div>
                      <button
                          className={`${category.isActive === 'feature' ? "p-1 pl-4 pr-4 bg-blue-800 text-white rounded-xl" : null}`}
                          onClick={e => setCategory({...category, isActive : 'feature'})}>
                          Feature
                      </button>
                  </div>
                  <div className="w-2/3 h-40">
                      <div className="w-full flex flex-row">
                          <h1 className="text-lg text-slate-700 font-bold">
                              Roadmap
                          </h1>
                          <p onClick={handleRoadMapView} className="ml-auto float-right text-blue-600 underline">
                              View
                          </p>
                      </div>
                      <div className="w-full flex flex-col mt-8 space-y-2">
                          <div className="w-full h-6 flex flex-row">
                            <span className="flex items-center"><BsDot className="text-4xl text-orange-400" />
                                <h1>Planned</h1>
                            </span>
                              <p className="ml-auto float-right font-bold text-blue-800">
                                  {planned.length}
                              </p>
                          </div>
                          <div className="w-full h-6 flex flex-row">
                             <span className="flex items-center"><BsDot className="text-4xl text-fuchsia-500" />
                                 <h1>In-Progress</h1>
                             </span>
                              <p className="ml-auto float-right font-bold text-blue-800">
                                  {progress.length}
                              </p>
                          </div>
                          <div className="flex flex-row">
                            <span className="flex items-center"><BsDot className="text-4xl text-sky-400" />
                                <h1>Live</h1>
                            </span>
                              <p className="ml-auto float-right font-bold text-blue-800">
                                  {live.length}
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-span-4 w-full h-full">
                  <div className="w-full h-20 bg-slate-700 ml-auto mr-auto mt-8 rounded-xl flex flex-row">
                      <div className="w-4/5 h-full flex items-center ml-6 space-x-6">
                          <GiLightBulb className="text-white text-2xl" />
                          <h1 className="text-white text-xl font-semibold">
                              {suggestions.length} Suggestions
                          </h1>
                          <select
                              name="sort"
                              className="bg-slate-700 text-gray-400 pl-4"
                              onChange={handleSelect}
                          >
                              <option value="mostVotes">Sort by: Most Upvotes</option>
                              <option value="leastVotes">Sort by: Least Upvotes</option>
                              <option value="mostComments">Sort by: Most Comments</option>
                              <option value="leastComments">Sort by: Least Comments</option>
                          </select>
                      </div>
                      <div className="w-1/5 h-full flex items-center">
                          <button className="w-4/5 p-3 rounded-lg bg-fuchsia-500 text-white font-semibold text-sm">
                              + Add Feedback
                          </button>
                      </div>
                  </div>
                  <div className="w-full h-full mt-16 space-y-16">
                      {filteredList.map((details : any, index : number) => {
                          return (
                              <div className="w-full h-24 flex items-center" key={details.id}>
                                  <div className="w-1/6 flex flex-col items-center text-blue-800 font-bold">
                                      <GoChevronUp onClick={e => handleVoteIncrement(e, index)} />
                                      <h1>{details.upvotes}</h1>
                                  </div>
                                  <div className="w-4/6 flex flex-col space-y-2">
                                      <h1 className="text-lg text-slate-700 font-bold">
                                          {details.title}
                                      </h1>
                                      <h1 className="text-gray-500">
                                          {details.description}
                                      </h1>
                                      <div className="ml-6 text-blue-700 text-sm font-bold">
                                          <h1>
                                              {details.category}
                                          </h1>
                                      </div>
                                  </div>
                                  <div className="w-1/6 flex">
                                      <BsFillChatFill className="text-gray-300 text-xl" />
                                      <p className={`${!details.comments ? "text-gray-400" : 'text-blue-800'} ml-2 font-bold`}>
                                          {!details.comments ? 0 :
                                              details.comments.length
                                          }
                                      </p>
                                  </div>
                              </div>
                          )
                      })}
                  </div>
              </div>
          </div>
          }
      </div>
  );
}

export default App;
