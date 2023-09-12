"use client";
import { useState } from "react";

export default function Panel({
  setCreateAgentModal,
  onSearchChange,
  filter,
  setFilter,
  onSortAZ,
  onSortZA,
}) {
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false); // State to control filter dropdown visibility
  // State to store the selected filters
  const showList = [
    "INTERDIVE",
    "FESPO",
    " UK GO DIVE",
    "DEMA",
    "IT BERLIN",
    "BBTF",
    "BOOT",
    "DUIKVAKER",
  ];
  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearchChange(query); // Pass the search query to the parent component
  };
  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
  };
  return (
    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
        <div className="w-full md:w-1/2">
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i className="fa-solid fa-search text-gray-400"></i>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search Travel Agent"
                required=""
                value={searchQuery} // Bind the input value to the searchQuery state
                onChange={handleSearchChange} // Handle changes in the search input
              />
            </div>
          </form>
        </div>
        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          <button
            type="button"
            onClick={() => setCreateAgentModal(true)}
            className="flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 gap-2"
          >
            <i className="fa-solid fa-plus"></i>
            Add Agents
          </button>
          <button
            type="button"
            id="filterButton"
            onClick={toggleFilterDropdown} // Toggle the filter dropdown
            className="flex items-center justify-center text-gray-500 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-4 py-2 gap-2"
          >
            <i className="fa-solid fa-filter"></i>
            Filter
          </button>
          {isFilterDropdownOpen && (
            <div
              id="filterDropdown"
              className="z-10 w-56 p-3 relative bg-white rounded-lg shadow dark:bg-gray-700"
            >
              <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Tag Region
              </h6>
              <ul
                className="space-y-2 text-sm"
                aria-labelledby="filterDropdownButton"
              >
                <li className="flex items-center">
                  <input
                    id="asia"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={() => {
                      if (filter.tagRegion.includes("ASIA")) {
                        setFilter({
                          ...filter,
                          tagRegion: filter.tagRegion.filter(
                            (region) => region !== "ASIA"
                          ),
                        });
                      } else {
                        setFilter({
                          ...filter,
                          tagRegion: [...filter.tagRegion, "ASIA"],
                        });
                      }
                    }}
                  />
                  <label
                    htmlFor="asia"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    ASIA
                  </label>
                </li>
                
                <li className="flex items-center">
                  <input
                    id="europe"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={() => {
                      if (filter.tagRegion.includes("EUROPE")) {
                        setFilter({
                          ...filter,
                          tagRegion: filter.tagRegion.filter(
                            (region) => region !== "EUROPE"
                          ),
                        });
                      } else {
                        setFilter({
                          ...filter,
                          tagRegion: [...filter.tagRegion, "EUROPE"],
                        });
                      }
                    }}
                  />
                  <label
                    htmlFor="europe"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    EUROPE
                  </label>
                </li>
                
                <li className="flex items-center">
                  <input
                    id="usa"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={() => {
                      if (filter.tagRegion.includes("USA")) {
                        setFilter({
                          ...filter,
                          tagRegion: filter.tagRegion.filter(
                            (region) => region !== "USA"
                          ),
                        });
                      } else {
                        setFilter({
                          ...filter,
                          tagRegion: [...filter.tagRegion, "USA"],
                        });
                      }
                    }}
                  />
                  <label
                    htmlFor="usa"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    USA
                  </label>
                </li>
                
              </ul>
              <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white mt-5">
                Show
              </h6>
              <ul
                className="space-y-2 text-sm"
                aria-labelledby="filterDropdownButton"
              >
                {showList.map((show) => (
                  <li className="flex items-center" key={show}>
                    <input
                      id={show}
                      type="checkbox"
                      value=""
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      onChange={() => {
                        if (filter.show.includes(show)) {
                          setFilter({
                            ...filter,
                            show: filter.show.filter(
                              (selectedShow) => selectedShow !== show
                            ),
                          });
                        } else {
                          setFilter({
                            ...filter,
                            show: [...filter.show, show],
                          });
                        }
                      }}
                    />
                    <label
                      htmlFor={show}
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      {show}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          )}{" "}
          <button
            type="button"
            onClick={onSortAZ}
            className="flex items-center justify-center text-gray-500 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-4 py-2 gap-2"
          >
            <i className="fa-solid fa-sort-alpha-down"></i>
          </button>
          <button
            type="button"
            onClick={onSortZA}
            className="flex items-center justify-center text-gray-500 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-4 py-2 gap-2"
          >
            <i className="fa-solid fa-sort-alpha-down-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
