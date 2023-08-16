"use client";
import { useState } from "react";

export default function TableContainer() {
  const [data, setData] = useState(dummyData);
  return (
    <>
      <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <TableHeaderCell>ID Agents</TableHeaderCell>
            <TableHeaderCell>Tag Region</TableHeaderCell>
            <TableHeaderCell>Travel Agents</TableHeaderCell>
            <TableHeaderCell>Contact Person</TableHeaderCell>
            <TableHeaderCell>Phone Number</TableHeaderCell>
            <ActionsTableHeaderCell />
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            // eslint-disable-next-line react/jsx-key
            <TableRow>
              <TableCell>{row["ID Agents"]}</TableCell>
              <TableCell>{row["Tag Region"]}</TableCell>
              <TableCell>{row["Travel Agents"]}</TableCell>
              <TableCell>{row["Contact Person"]}</TableCell>
              <TableCell>{row["Phone Number"]}</TableCell>
              <ActionsTableCell />
            </TableRow>
          ))}
        </tbody>
      </table>
    </>
  );
}

function TableHeaderCell({ children }) {
  return <th className="px-3 py-2">{children}</th>;
}

function TableRow({ children }) {
  return <tr className="border-b dark:border-gray-700">{children}</tr>;
}

function TableCell({ children }) {
  return <td className="px-2 py-3">{children}</td>;
}

function ActionsTableHeaderCell() {
  return (
    <TableHeaderCell>
      <span className="sr-only">Actions</span>
    </TableHeaderCell>
  );
}

function ActionsTableCell() {
  const [showActions, setShowActions] = useState(false);

  return (
    <td className="px-4 py-3 relative text-right">
      <button
        className="text-gray-500 hover:text-gray-800 focus:outline-none"
        type="button"
        onClick={() => setShowActions(!showActions)}
      >
        <i className="fas fa-ellipsis-v"></i>
      </button>
      {showActions && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
          <ul className="py-1 text-sm">
            <li>
              <button
                type="button"
                className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200"
              >
                <i className="fas fa-edit mr-2"></i>
                Edit
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200"
              >
                <i className="fas fa-eye mr-2"></i>
                Preview
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 text-red-500 dark:hover:text-red-400"
              >
                <i className="fas fa-trash-alt mr-2"></i>
                Delete
              </button>
            </li>
          </ul>
        </div>
      )}
    </td>
  );
}

const dummyData = [
  {
    "ID Agents": 1,
    "Tag Region": "Region A",
    "Travel Agents": "Travel Co.",
    "Contact Person": "John Doe",
    Email: "john.doe@example.com",
    "Phone Number": "123-456-7890",
    Show: "Show Details",
    Website: "www.travelco.com",
    Link: "www.link.com",
    "Resort published on agents website": "Yes",
    "Sales by Safari": "$100,000",
    "Safari product on their website": "Yes",
    "Gross Sales 2022": "$150,000",
    "Gross Sales 2023": "$200,000",
    Notes: "Lorem ipsum",
    "Follow up": "2023-08-15",
  },
  {
    "ID Agents": 2,
    "Tag Region": "Region B",
    "Travel Agents": "Adventures R Us",
    "Contact Person": "Jane Smith",
    Email: "jane.smith@example.com",
    "Phone Number": "987-654-3210",
    Show: "Show Details",
    Website: "www.adventuresrus.com",
    Link: "www.agentlink.com",
    "Resort published on agents website": "No",
    "Sales by Safari": "$75,000",
    "Safari product on their website": "Yes",
    "Gross Sales 2022": "$120,000",
    "Gross Sales 2023": "$180,000",
    Notes: "Lorem ipsum dolor sit amet",
    "Follow up": "2023-08-20",
  },
  {
    "ID Agents": 3,
    "Tag Region": "Region C",
    "Travel Agents": "Global Voyages",
    "Contact Person": "Michael Johnson",
    Email: "michael.johnson@example.com",
    "Phone Number": "555-123-4567",
    Show: "Show Details",
    Website: "www.globalvoyages.com",
    Link: "www.global-link.com",
    "Resort published on agents website": "Yes",
    "Sales by Safari": "$85,000",
    "Safari product on their website": "No",
    "Gross Sales 2022": "$110,000",
    "Gross Sales 2023": "$160,000",
    Notes: "Lorem ipsum dolor",
    "Follow up": "2023-08-18",
  },
];
