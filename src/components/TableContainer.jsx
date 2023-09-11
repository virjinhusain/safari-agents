"use client";

export default function TableContainer({
  data,
  setData,
  setOpenUpdateModal,
  setOpenDeleteModal,
}) {
  return (
    <div className="overflow-x-auto h-screen">
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
                setOpenUpdateModal={setOpenUpdateModal}
              >
                {row.number}
              </TableCell>
              <TableCell
                data={row}
                setData={setData}
                setOpenUpdateModal={setOpenUpdateModal}
              >
                {row.tagRegion}
              </TableCell>
              <TableCell
                data={row}
                setData={setData}
                setOpenUpdateModal={setOpenUpdateModal}
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
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      {children}
    </th>
  );
}

function TableRow({ children }) {
  return <tr className="bg-white divide-y divide-gray-200">{children}</tr>;
}

function TableCell({ children, data, setData, setOpenUpdateModal }) {
  return (
    <td className="px-6 py-2 whitespace-nowrap">
      <div
        className="text-lg text-gray-900"
        onClick={() => {
          setData(data);
          setOpenUpdateModal(true);
        }}
      >
        {children}
      </div>
    </td>
  );
}

function ActionsTableCell({
  data,
  setData,
  setOpenDeleteModal,
}) {
  return (
    <td className="px-4 py-2 whitespace-nowrap text-center text-md font-medium">
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