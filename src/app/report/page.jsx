"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://saf-api-rcesi3nzea-as.a.run.app";

export default function Report() {
  const [data, setData] = useState([]);
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
      setData(items);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
              No
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
              Travel Agent
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
              Gross Sales 2022
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
              Gross Sale 2023
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.number}
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
              <td className="px-6 py-4 whitespace-nowrap">{item.number}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.travelAgent}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.sales2022}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.sales2023}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
