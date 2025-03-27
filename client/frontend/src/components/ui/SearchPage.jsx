import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import FilterPage from "./FilterPage";
import { Globe, MapPin, X } from "lucide-react";

function SearchPage() {
  const {query} = useParams();
  const navigate=useNavigate()
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000); // Simulating API load time
  }, []);

  return (
    <div className="max-w-6xl  mx-auto  my-10  overflow-x-hidden ">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <FilterPage />
        <div className="flex-1">
          <div className="flex items-center gap-2 ">
            <input
              type="text"
              value={searchQuery}
              placeholder="Search by restaurant & cuisines"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-3"
            />
            <button className="btn-orange">Search</button>
          </div>
          <div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2 my-3">
              <h3 className="font-medium text-lg">{`(2) Search result found in ${query}`}</h3>
              <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                {[1, 2, 3].map((selectedfilter, index) => (
                  <div className="relative inline-flex items-center max-w-full " key={index}>
                    <div className="text-[#D19254]  p-1  rounded-2xl hover:cursor-pointer pr-6 whitespace-nowrap shadow shadow-black ">
                      hello
                    </div>
                    <X size={16} className="absolute text-[#D19254] right-1 hover:cursor-pointer" />
                  </div>
                ))}
              </div>
            </div>
            {/** Restaurant Cards or Skeleton Loader */}
            <div className="grid md:grid-cols-3 gap-4">
              {isLoading
                ? [1, 2, 3, 4].map((_, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden animate-pulse">
                      <div className="relative">
                        <div className="h-40 bg-gray-300 dark:bg-gray-700 w-full" />
                        <div className="absolute top-2 left-2 bg-gray-300 dark:bg-gray-700 rounded-lg py-1 px-3 w-16 h-5" />
                      </div>
                      <div className="p-4">
                        <div className="h-6 bg-gray-300 dark:bg-gray-700 w-3/4 mb-2" />
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 w-1/2 mb-2" />
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 w-1/3" />
                        <div className="flex gap-2 mt-2 flex-wrap">
                          {[1, 2, 3].map((_, index) => (
                            <div key={index} className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded-full" />
                          ))}
                        </div>
                      </div>
                      <div className="p-4 border-t dark:border-t-gray-700 border-t-gray-100 flex justify-end">
                        <div className="h-10 w-24 bg-gray-300 dark:bg-gray-700 rounded-full" />
                      </div>
                    </div>
                  ))
                : [1, 2, 3, 4].map((item, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                      <div className="relative">
                        <div className="h-6/12">
                          <img
                            className="w-full h-full object-cover"
                            src="https://tse2.mm.bing.net/th?id=OIP.maQpFJiRuDMauaTZ3N7KiQHaEo&pid=Api&P=0&h=180"
                            alt="Restaurant"
                          />
                        </div>
                        <div className="absolute top-2 left-2 bg-white/45 dark:bg-gray-700 rounded-lg py-1 px-3">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Feature</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Tandor</h3>
                        <div className="mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400">
                          <MapPin size={16} />
                          <p className="text-sm">City: <span className="font-medium">Delhi</span></p>
                        </div>
                        <div className="mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400">
                          <Globe size={16} />
                          <p className="text-sm">Country: <span className="font-medium">India</span></p>
                        </div>
                        <div className="flex gap-2 mt-2 flex-wrap">
                          {["Indian", "Tandoori", "Spicy"].map((cuisine, index) => (
                            <div key={index} className="font-medium px-2 py-1 rounded-full shadow-sm bg-gray-200">
                              {cuisine}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="p-4 border-t dark:border-t-gray-700 border-t-gray-100 text-white flex justify-end">
                        <Link to={`/restaurant/${123}`}></Link>
                        <button onClick={()=> navigate(`/restaurant-details/${idx}`)} className="btn-orange py-2 px-4 rounded-full shadow-md transition-colors duration-200">
                          View Menus
                        </button>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;