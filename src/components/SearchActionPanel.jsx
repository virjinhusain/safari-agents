"use client"
import { useState } from "react";

export default function Panel({ setCreateAgentModal, onSearchChange }) {
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearchChange(query); // Pass the search query to the parent component
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
            className="flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 gap-2"
          >
            <i className="fa-solid fa-plus"></i>
            Add Agents
          </button>
          <button
            type="button"
            id="filterButton"
            className="flex items-center justify-center text-gray-500 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-4 py-2 gap-2"
          >
            <i className="fa-solid fa-filter"></i>
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}
