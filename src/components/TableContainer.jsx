"use client";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

export default function TableContainer({
  data,
  setData,
  setOpenReadModal,
  setOpenUpdateModal,
  setOpenDeleteModal,
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <TableHeaderCell>ID Agents</TableHeaderCell>
            <TableHeaderCell>Tag Region</TableHeaderCell>
            <TableHeaderCell>Travel Agents</TableHeaderCell>
            <ActionsTableHeaderCell />
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <TableRow key={row.idAgent}>
              <TableCell
                data={row}
                setData={setData}
                setOpenReadModal={setOpenReadModal}
              >
                {row.number}
              </TableCell>
              <TableCell
                data={row}
                setData={setData}
                setOpenReadModal={setOpenReadModal}
              >
                {row.tagRegion}
              </TableCell>
              <TableCell
                data={row}
                setData={setData}
                setOpenReadModal={setOpenReadModal}
              >
                {row.travelAgent}
              </TableCell>
              <ActionsTableCell
                data={row}
                setData={setData}
                setOpenUpdateModal={setOpenUpdateModal}
                setOpenDeleteModal={setOpenDeleteModal}
              />
            </TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableHeaderCell({ children }) {
  return (
    <th
      scope="col"
      className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      {children}
    </th>
  );
}

function TableRow({ children }) {
  return <tr className="bg-white divide-y divide-gray-200">{children}</tr>;
}

function TableCell({ children, data, setData, setOpenReadModal }) {
  return (
    <td className="px-3 py-4 whitespace-nowrap">
      <div
        className="text-sm text-gray-900"
        onClick={() => {
          setData(data);
          setOpenReadModal(true);
        }}
      >
        {children}
      </div>
    </td>
  );
}

function ActionsTableHeaderCell() {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      Actions
    </th>
  );
}

function ActionsTableCell({
  data,
  setData,
  setOpenUpdateModal,
  setOpenDeleteModal,
}) {
  return (
    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
      <button
        type="button"
        className="text-indigo-600 hover:text-indigo-900"
        onClick={() => {
          setData(data);
          setOpenUpdateModal(true);
        }}
      >
        Edit
      </button>
      <button
        type="button"
        className="text-red-600 hover:text-red-900 ml-2"
        onClick={() => {
          setData(data);
          setOpenDeleteModal(true);
        }}
      >
        Delete
      </button>
    </td>
  );
}
