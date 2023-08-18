"use client";
import { useState } from "react";

export default function CreateModal({ isOpen, setIsOpen }) {
  const [numContactPersons, setNumContactPersons] = useState(1);
  const [numLinks, setNumLinks] = useState(1);
  const [numPhoneNumber, setNumPhoneNumber] = useState(1);
  const [numWebsite, setNumWebsite] = useState(1);
  const [numEmail, setNumEmail] = useState(1);
  const [numShow, setNumShow] = useState(1);

  const contactPersonPlaceholders = Array.from(
    { length: numContactPersons },
    (_, index) => `Contact person ${index + 1}`
  );

  const addContactPerson = () => {
    setNumContactPersons(numContactPersons + 1);
  };

  const linksPlaceholders = Array.from(
    { length: numLinks },
    (_, index) => `Link ${index + 1}`
  );

  const addLink = () => {
    setNumLinks(numLinks + 1);
  };

  const phoneNumberPlaceholders = Array.from(
    { length: numPhoneNumber },
    (_, index) => `Phone number ${index + 1}`
  );

  const addPhoneNumber = () => {
    setNumPhoneNumber(numPhoneNumber + 1);
  };

  const websitePlaceholders = Array.from(
    { length: numWebsite },
    (_, index) => `Website ${index + 1}`
  );

  const addWebsite = () => {
    setNumWebsite(numWebsite + 1);
  };

  const emailPlaceholders = Array.from(
    { length: numEmail },
    (_, index) => `Email ${index + 1}`
  );

  const addEmail = () => {
    setNumEmail(numEmail + 1);
  };

  const showPlaceholders = Array.from(
    { length: numShow },
    (_, index) => `Show ${index + 1}`
  );

  const addShow = () => {
    setNumShow(numShow + 1);
  };

  return (
    <div
      tabIndex="-1"
      aria-hidden="true"
      className={`${
        isOpen ? "fixed" : "hidden"
      } inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-opacity-75 bg-black`}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Add Agents
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <htmlForm action="#">
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
                >
                  <option selected="">A</option>
                  <option value="A">B</option>
                  <option value="B">C</option>
                  <option value="C">D</option>
                  <option value="D">D</option>
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
                />
              </div>
            </div>
            <div className="space-y-2 mt-5">
              <div>
                <label
                  htmlFor="show"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Show
                </label>
                {showPlaceholders.map((placeholder, index) => (
                  <input
                    key={index}
                    type="text"
                    name={`show-${index}`}
                    id={`show-${index}`}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder={placeholder}
                    required=""
                  />
                ))}
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600 text-sm mt-1"
                  onClick={addShow}
                >
                  + Add Show
                </button>
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="contact-person"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Contact Person
                </label>
                {contactPersonPlaceholders.map((placeholder, index) => (
                  <input
                    key={index}
                    type="text"
                    name={`contact-person-${index}`}
                    id={`contact-person-${index}`}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder={placeholder}
                    required=""
                  />
                ))}
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600 text-sm mt-1"
                  onClick={addContactPerson}
                >
                  + Add Contact Person
                </button>
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="phone-number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                {phoneNumberPlaceholders.map((placeholder, index) => (
                  <input
                    key={index}
                    type="text"
                    name={`phone-number-${index}`}
                    id={`phone-number-${index}`}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder={placeholder}
                    required=""
                  />
                ))}
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600 text-sm mt-1"
                  onClick={addPhoneNumber}
                >
                  + Add Phone Number
                </button>
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                {emailPlaceholders.map((placeholder, index) => (
                  <input
                    key={index}
                    type="text"
                    name={`email-${index}`}
                    id={`email-${index}`}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder={placeholder}
                    required=""
                  />
                ))}
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600 text-sm mt-1"
                  onClick={addEmail}
                >
                  + Add Email
                </button>
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="website"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Website
                </label>
                {websitePlaceholders.map((placeholder, index) => (
                  <input
                    key={index}
                    type="text"
                    name={`website-${index}`}
                    id={`website-${index}`}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder={placeholder}
                    required=""
                  />
                ))}
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600 text-sm mt-1"
                  onClick={addWebsite}
                >
                  + Add Website
                </button>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="links"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Link
                </label>
                {linksPlaceholders.map((placeholder, index) => (
                  <input
                    key={index}
                    type="text"
                    name={`link-${index}`}
                    id={`link-${index}`}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder={placeholder}
                    required=""
                  />
                ))}
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600 text-sm mt-1"
                  onClick={addLink}
                >
                  + Add Link
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="resortPublished"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Resort published on their website
                </label>
                <textarea
                  id="resortPublished"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="salesBySafari"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sales by Safari
                </label>
                <textarea
                  id="salesBySafari"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="safariProduct"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Safari product on their website
                </label>
                <textarea
                  id="safariProduct"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="notes"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Notes
                </label>
                <textarea
                  id="notes"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Add notes"
                ></textarea>
              </div>{" "}
              <div>
                <label
                  htmlFor="follow-up"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Follow up
                </label>
                <textarea
                  id="follow-up"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-5"
            >
              Add new agent
            </button>
          </htmlForm>
        </div>
      </div>
    </div>
  );
}
