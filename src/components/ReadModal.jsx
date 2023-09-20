import React, { useState, useEffect } from "react";

// Define your component.
export default function ReadModal({ data, isOpen, setIsOpen }) {
  const [virjin, setVirjin] = useState({});

  useEffect(() => {
    if (data) {
      setVirjin(data);
    }
  }, [data]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-opacity-75 bg-black ${
        isOpen ? "" : "hidden"
      }`}
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="p-4 sm:p-5 w-screen h-screen">
        <div className="relative p-4 w-full max-w-full">
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* Header */}
            <div className="flex justify-between mb-4 rounded-t sm:mb-5">
              <div className="text-lg text-gray-900 md:text-xl dark:text-white">
                <h3 className="font-semibold ">{virjin.travelAgent}</h3>
                <p className="font-bold">{virjin.tagRegion}</p>
              </div>
              <div>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={closeModal}
                >
                  <i className="fa-solid fa-times"></i>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="table-container overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {/* Info Items */}
                  {Object.entries(virjin).map(([title, value], index) => (
                    <InfoItem key={index} title={title} value={value} />
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6">
              <div className="flex space-x-3 sm:space-x-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// InfoItem component
function InfoItem({ title, value }) {
  return (
    <tr>
      <td className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
        {title}
      </td>
      <td className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
        {value}
      </td>
    </tr>
  );
}