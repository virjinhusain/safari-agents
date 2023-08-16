"use client";
import { useState } from "react";

export default function TableContainer() {
  return (
    <>
      <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <TableHeaderCell>ID Agents</TableHeaderCell>
            <TableHeaderCell>Tag Region</TableHeaderCell>
            <TableHeaderCell>Travel Agents</TableHeaderCell>
            <TableHeaderCell>Contact Person</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Phone Number</TableHeaderCell>
            <TableHeaderCell>Show</TableHeaderCell>
            <TableHeaderCell>Website</TableHeaderCell>
            <TableHeaderCell>Link</TableHeaderCell>
            <TableHeaderCell>
              Resort published on agents website
            </TableHeaderCell>
            <TableHeaderCell>Sales by Safari</TableHeaderCell>
            <TableHeaderCell>Safari product on their website</TableHeaderCell>
            <TableHeaderCell>Gross Sales 2022</TableHeaderCell>
            <TableHeaderCell>Gross Sales 2023</TableHeaderCell>
            <TableHeaderCell>Notes</TableHeaderCell>
            <TableHeaderCell>Follow up</TableHeaderCell>
            <TableHeaderCell>
              <span class="sr-only">Actions</span>
            </TableHeaderCell>

            <ActionsTableHeaderCell />
          </tr>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Region A</TableCell>
            <TableCell>Travel Co.</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>john.doe@example.com</TableCell>
            <TableCell>123-456-7890</TableCell>
            <TableCell>Show Details</TableCell>
            <TableCell>www.travelco.com</TableCell>
            <TableCell>www.link.com</TableCell>
            <TableCell>Yes</TableCell>
            <TableCell>$100,000</TableCell>
            <TableCell>Yes</TableCell>
            <TableCell>$150,000</TableCell>
            <TableCell>$200,000</TableCell>
            <TableCell>Lorem ipsum</TableCell>
            <TableCell>2023-08-15</TableCell>
            <ActionsTableCell />
          </TableRow>
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
