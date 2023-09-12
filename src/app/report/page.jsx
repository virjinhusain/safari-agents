"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://saf-api-rcesi3nzea-as.a.run.app";

export default function Report() {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortColumn, setSortColumn] = useState("travelAgent");

  const fetchData = async () => {
    try {
      const response = await axios.post(`${API_URL}/graphql`, {
        query: `query {
                    Agents(show: [""]) {
                        travelAgent
                        sales2022
                        sales2023
                    }
                }`,
      });
      const items = response.data.data.Agents.map((item, index) => ({
        ...item,
        number: index + 1,
      }));

      if (sortOrder === "asc") {
        items.sort((a, b) => a[sortColumn].localeCompare(b[sortColumn]));
      } else {
        items.sort((a, b) => b[sortColumn].localeCompare(a[sortColumn]));
      }

      setData(items);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, [sortOrder, sortColumn]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleSortClick = (column) => {
    setSortColumn(column);
  };

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
       <div className="my-4 text-center">
        <button
          onClick={toggleSortOrder}
          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          Click Here to Sort Agents
        </button>
      </div>
      <table className="w-full text-lg text-left text-gray-500 dark:text-gray-400">
        <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th 
                className="px-3 py-3 text-left text-lg font-medium text-gray-500 uppercase dark:text-gray-400"
                onClick={() => handleSortClick("number")}
                >
              No
              {sortColumn === "number" && (
                <span className="ml-2">
                  {sortOrder === "asc" ? "▲" : "▼"}
                </span>
              )}
            </th>
            <th 
            className="px-3 py-3 text-left text-lg font-medium text-gray-500 uppercase dark:text-gray-400"
            onClick={() => handleSortClick("travelAgent")}
            >
              Travel Agent
              {sortColumn === "travelAgent" && (
                <span className="ml-2">
                  {sortOrder === "asc" ? "" : ""}
                </span>
              )}
            </th>
            <th 
              className="px-1 py-3 text-left text-lg font-medium text-gray-500 uppercase dark:text-gray-400"
              onClick={() => handleSortClick("sales2022")}
              >
              Gross Sales 2022
              {sortColumn === "sales2022" && (
                <span className="ml-2">
                  {sortOrder === "asc" ? "▲" : "▼"}
                </span>
              )}
            </th>
            <th 
              className="px-1 py-3 text-left text-lg font-medium text-gray-500 uppercase dark:text-gray-400"
              onClick={() => handleSortClick("sales2023")}
              >
              Gross Sale 2023
              {sortColumn === "sales2023" && (
                <span className="ml-2">
                  {sortOrder === "asc" ? "▲" : "▼"}
                </span>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.number}
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
              <td className="px-3 py-4 whitespace-nowrap">{item.number}</td>
              <td className="px-3 py-4 whitespace-nowrap">{item.travelAgent}</td>
              <td className="px-1 py-4 whitespace-nowrap">{item.sales2022}</td>
              <td className="px-1 py-4 whitespace-nowrap">{item.sales2023}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
