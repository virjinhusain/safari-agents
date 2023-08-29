"use client";
import { useEffect, useState } from "react";
import axios from "axios";

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
              <div>
                <label
                  htmlFor="tag-region"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tag Region
                </label>
                <select
                  id="tag-region"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Travel Agent
                </label>
                <input
                  type="text"
                  name="travel-agent"
                  id="travel-agent"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Gross sale 2022
                </label>
                <input
                  type="text"
                  name="2022"
                  id="2022"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Gross sale 2023
                </label>
                <input
                  type="text"
                  name="2023"
                  id="2023"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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

            {/* Input fields for arrays */}
            {[
              "show",
              "contactPerson",
              "phoneNumber",
              "email",
              "website",
              "link",
            ].map((field) => (
              <div className="space-y-1" key={field}>
                <label
                  htmlFor={field}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {field === "link"
                    ? "Website"
                    : field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {updatedData[field].map((placeholder, index) => (
                  <input
                    key={index}
                    type="text"
                    name={`${field}-${index}`}
                    id={`${field}-${index}`}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={placeholder}
                    required=""
                    onChange={(e) => handleInputChange(e, field, index)}
                  />
                ))}
              </div>
            ))}

            {/* ... rest of the code ... */}

            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-5"
              >
                Update product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
