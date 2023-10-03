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
            <TableHeaderCell>Last update at</TableHeaderCell>
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
              <TableCell
                data={row}
                setData={setData}
                setOpenUpdateModal={setOpenUpdateModal}
              >
                {/* {row.updatedAt} */}
                {timeAgo(row.updatedAt)}
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
      className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
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

function ActionsTableCell({ data, setData, setOpenDeleteModal }) {
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
      className="px-4 py-2 text-center text-md font-medium text-gray-500 uppercase tracking-wider"
    >
      Actions
    </th>
  );
}
function timeAgo(timestamp) {
  const currentTime = new Date().getTime();
  const timeDifference = currentTime - timestamp;

  // Define time intervals in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (timeDifference < minute) {
    const secondsAgo = Math.floor(timeDifference / 1000);
    return secondsAgo + (secondsAgo === 1 ? " second ago" : " seconds ago");
  } else if (timeDifference < hour) {
    const minutesAgo = Math.floor(timeDifference / minute);
    return minutesAgo + (minutesAgo === 1 ? " minute ago" : " minutes ago");
  } else if (timeDifference < day) {
    const hoursAgo = Math.floor(timeDifference / hour);
    return hoursAgo + (hoursAgo === 1 ? " hour ago" : " hours ago");
  } else {
    const daysAgo = Math.floor(timeDifference / day);
    return daysAgo + (daysAgo === 1 ? " day ago" : " days ago");
  }
}