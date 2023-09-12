"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function UpdateModal({ data, isOpen, setIsOpen }) {
  const [updatedData, setUpdatedData] = useState({
    tagRegion: "",
    travelAgent: "",
    sales2022: "",
    sales2023: "",
    show: [],
    contactPerson: [],
    phoneNumber: [],
    email: [],
    website: [],
    link: [],
    publishedResort: "",
    salesBySafari: "",
    safariProduct: "",
    notes: "",
    followUp: "",
  });
  const [id, setId] = useState("");

  useEffect(() => {
    if (data) {
      setUpdatedData(data);
      setId(data._id);
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .patch(`https://saf-api-rcesi3nzea-as.a.run.app/agent/${id}`, updatedData)
      .then((res) => {
        setIsOpen(false);
      });
  };

  const handleInputChange = (e, field, index) => {
    const newValue = e.target.value;
    setUpdatedData((prevData) => {
      const updatedField = [...prevData[field]];
      updatedField[index] = newValue;
      return {
        ...prevData,
        [field]: updatedField,
      };
    });
  };

  const addNewItem = (field) => {
    setUpdatedData((prevData) => {
      const updatedField = [...prevData[field], ""];
      return {
        ...prevData,
        [field]: updatedField,
      };
    });
  };

  return (
    <div
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-opacity-75 bg-black ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Update Agent
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-xmark"></i>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              {/* ... Other fields ... */}
              <div>
                <label
                  htmlFor="tag-region"
                  className="block mb-1 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Tag Region
                </label>
                <select
                  id="tag-region"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={updatedData.tagRegion}
                  onChange={(e) =>
                    setUpdatedData({
                      ...updatedData,
                      tagRegion: e.target.value,
                    })
                  }
                >
                  <option value="ASIA">ASIA</option>
                  <option value="EUROPE">EUROPE</option>
                  <option value="USA">USA</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="travel-agent"
                  className="block mb-1 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Travel Agent
                </label>
                <input
                  type="text"
                  name="travel-agent"
                  id="travel-agent"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type travel agent"
                  required=""
                  value={updatedData.travelAgent}
                  onChange={(e) =>
                    setUpdatedData({
                      ...updatedData,
                      travelAgent: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="2022"
                  className="block mb-1 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Gross sale 2022
                </label>
                <input
                  type="text"
                  name="2022"
                  id="2022"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""
                  required=""
                  value={updatedData.sales2022}
                  onChange={(e) =>
                    setUpdatedData({
                      ...updatedData,
                      sales2022: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="2023"
                  className="block mb-1 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Gross sale 2023
                </label>
                <input
                  type="text"
                  name="2023"
                  id="2023"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""
                  required=""
                  value={updatedData.sales2023}
                  onChange={(e) =>
                    setUpdatedData({
                      ...updatedData,
                      sales2023: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div>
              {/* Input fields for arrays */}
              {[
                "show",
                "contactPerson",
                "phoneNumber",
                "email",
                "website",
                "link",
              ].map((field) => (
                <div key={field} className="space-y-1">
                  <label
                    htmlFor={field}
                    className="block mb-1 mt-4 text-lg font-medium text-gray-900 dark:text-white"
                  >
                    {field === "link"
                      ? "Safari Product Link"
                      : field === "phoneNumber"
                      ? "Phone Number"
                      : field === "contactPerson"
                      ? "Contact Person"
                      : field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {updatedData[field].length > 0 ? (
                    updatedData[field].map((placeholder, index) => (
                      <div className="flex items-center space-x-2" key={index}>
                        <input
                          type="text"
                          name={`${field}-${index}`}
                          id={`${field}-${index}`}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={placeholder}
                          required=""
                          onChange={(e) => handleInputChange(e, field, index)}
                        />
                        {field === "email" ||
                        field === "website" ||
                        field === "link" ? (
                          <Link
                            target="_blank"
                            href={
                              field === "email"
                                ? `mailto:${placeholder}`
                                : placeholder
                            }
                          >
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                          </Link>
                        ) : null}
                        {index === updatedData[field].length - 1 && (
                          <button
                            type="button"
                            onClick={() => addNewItem(field)}
                            className="text-blue-600 hover:text-blue-700 focus:outline-none"
                          >
                            +
                          </button>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        name={`${field}-0`}
                        id={`${field}-0`}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder={`Enter ${
                          field === "link" ? "Website" : field
                        }`}
                        required=""
                        onChange={(e) => handleInputChange(e, field, 0)}
                      />
                      <button
                        type="button"
                        onClick={() => addNewItem(field)}
                        className="text-blue-600 hover:text-blue-700 focus:outline-none"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              ))}
              <div className="sm:col-span-2">
                <label
                  htmlFor="safariProduct"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                ></label>
                <textarea
                  id="safariProduct"
                  rows="4"
                  className="block p-2.5 h-64 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""
                  value={updatedData.safariProduct}
                  onChange={(e) =>
                    setUpdatedData({
                      ...updatedData,
                      safariProduct: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="publishedResort"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Resort published on their website
                </label>
                <textarea
                  id="publishedResort"
                  rows="4"
                  className="block p-2.5 h-64 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""
                  value={updatedData.publishedResort}
                  onChange={(e) =>
                    setUpdatedData({
                      ...updatedData,
                      publishedResort: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="salesBySafari"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Sales by Safari
                </label>
                <textarea
                  id="salesBySafari"
                  rows="4"
                  className="block p-2.5 h-64 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""
                  value={updatedData.salesBySafari}
                  onChange={(e) =>
                    setUpdatedData({
                      ...updatedData,
                      salesBySafari: e.target.value,
                    })
                  }
                ></textarea>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="notes"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Notes
                </label>
                <textarea
                  id="notes"
                  rows="4"
                  className="block p-2.5 h-64 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Add notes"
                  value={updatedData.notes}
                  onChange={(e) =>
                    setUpdatedData({
                      ...updatedData,
                      notes: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="follow-up"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Follow up
                </label>
                <textarea
                  id="follow-up"
                  rows="4"
                  className="block p-2.5 h-64 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""
                  value={updatedData.followUp}
                  onChange={(e) =>
                    setUpdatedData({
                      ...updatedData,
                      followUp: e.target.value,
                    })
                  }
                ></textarea>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-5"
              >
                Update Agent
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
