"use client";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

export default function TableContainer({
  data,
  setData,
  setOpenReadModal,
  setOpenDeleteModal,
}) {
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
              <TableCell
                data={row}
                setData={setData}
                setOpenReadModal={setOpenReadModal}
              >
                {row.idAgent}
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
              <TableCell
                data={row}
                setData={setData}
                setOpenReadModal={setOpenReadModal}
              >
                {row.contactPerson}
              </TableCell>
              <TableCell
                data={row}
                setData={setData}
                setOpenReadModal={setOpenReadModal}
              >
                {row.phoneNumber}
              </TableCell>
              <ActionsTableCell
                data={row}
                setData={setData}
                setOpenDeleteModal={setOpenDeleteModal}
              />
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

function TableCell({ children, data, setData, setOpenReadModal }) {
  return (
    <td
      className="px-2 py-3"
      onClick={() => {
        setData(data);
        setOpenReadModal(true);
      }}
    >
      {children}
    </td>
  );
}

function ActionsTableHeaderCell() {
  return (
    <TableHeaderCell>
      <span className="sr-only">Actions</span>
    </TableHeaderCell>
  );
}

function ActionsTableCell({ data, setData, setOpenDeleteModal }) {
  return (
    <td className="px-4 py-3 relative text-right">
      <button
        type="button"
        className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200"
      >
        <i className="fas fa-edit mr-2"></i>
        Edit
      </button>
      <button
        type="button"
        className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 text-red-500 dark:hover:text-red-400"
        onClick={() => {
          setData(data);
          setOpenDeleteModal(true);
        }}
      >
        <i className="fas fa-trash-alt mr-2"></i>
        Delete
      </button>
    </td>
  );
}
