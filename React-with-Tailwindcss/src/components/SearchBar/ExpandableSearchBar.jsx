import React, { useState } from 'react';

function ExpandableSearchBar() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div className="relative">
      <div
        className="relative flex items-center justify-center w-64 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-75"
        onClick={toggleExpanded}
      >
        <input
          type="text"
          placeholder="Search jobs..."
          className="w-full bg-transparent text-gray-700 focus:ring-0"
        />
        <button className="absolute right-0 top-0 m-2">
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>
        </button>
      </div>
      {expanded && (
        <div className="absolute z-10 bg-white shadow-lg rounded-md mt-2">
          {/* Additional search options and features here */}
          <div className="px-4 py-3">
            <input
              type="text"
              placeholder="Location"
              className="w-full bg-gray-100 text-gray-700 focus:ring-0"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 px-4 py-3">
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
              Experience
            </label>
            <select id="experience" className="w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50">
              <option>Any</option>
              <option>0-1 Years</option>
              <option>2-5 Years</option>
              <option>5-10 Years</option>
            </select>
            <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
              Salary
            </label>
            <select id="salary" className="w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50">
              <option>Any</option>
              <option>0-50k</option>
              <option>50k-100k</option>
              <option>100k+</option>
            </select>
          </div>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
            Search Jobs
          </button>
        </div>
      )}
    </div>
  );
}

export default ExpandableSearchBar;
