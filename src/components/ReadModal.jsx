"use client";
import { useState, useEffect } from "react";

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
      <div className="p-4 sm:p-5">
        <div className="relative p-4 w-full max-w-full max-h-full">
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
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
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
            </div>
            <div className="flex flex-row">
              <table className="w-full">
                <tbody>
                  <tr>
                    <InfoItem
                      title="Contact person"
                      value={virjin.contactPerson}
                    />
                    <InfoItem
                      title="Resort published on agent website"
                      value={virjin.publishedResort}
                    />
                  </tr>
                  <tr>
                    <InfoItem title="Email" value={virjin.email} />
                    <InfoItem
                      title="Sales by Safari"
                      value={virjin.salesBySafari}
                    />
                  </tr>
                </tbody>
              </table>
              <table className="w-full">
                <tbody>
                  <tr>
                    <InfoItem title="Phone number" value={virjin.phoneNumber} />
                    <InfoItem
                      title="Safari's product on their website"
                      value={virjin.safariProduct}
                    />
                  </tr>
                  <tr>
                    <InfoItem title="Show" value={virjin.show} />
                    <InfoItem title="Website" value={virjin.website} />
                  </tr>
                </tbody>
              </table>
              <table className="w-full">
                <tbody>
                  <tr>
                    <InfoItem
                      title="Gross sale 2022"
                      value={virjin.sales2022}
                    />
                    <InfoItem
                      title="Gross sale 2023"
                      value={virjin.sales2023}
                    />
                  </tr>
                  <tr>
                    <InfoItem title="Link" value={virjin.link} />
                    <InfoItem title="Notes" value={virjin.notes} />
                  </tr>
                  <tr>
                    <InfoItem
                      title="Sales by Safari"
                      value={virjin.salesBySafari}
                    />
                    <InfoItem title="Follow up" value={virjin.followUp} />
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-between items-center mt-6">
              <div className="flex space-x-3 sm:space-x-4"></div>
              <ActionButton
                label="Delete"
                variant="danger"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ title, value }) {
  return (
    <>
      <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
        {title}
      </dt>
      <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
        {value}
      </dd>
    </>
  );
}

function ActionButton({ label, onClick, variant = "primary" }) {
  const buttonStyles = {
    primary: "text-white bg-primary-700 hover:bg-primary-800",
    danger: "text-white bg-red-600 hover:bg-red-700",
  };

  return (
    <button
      type="button"
      className={`py-2.5 px-5 text-sm font-medium focus:outline-none rounded-lg text-center ${buttonStyles[variant]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
