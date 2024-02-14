import { useState } from "react";
import { PiDotsThreeCircleVertical } from "react-icons/pi";
import Tooltip from "./Tooltip";

const Hospitals = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg  border border-gray-100">
      {/* search */}

      <div className="pb-4 bg-white dark:bg-gray-900 mx-3 mt-3">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
            placeholder="Search for items"
          />
        </div>
      </div>

      {/* Table */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Hospital name
            </th>
            <th scope="col" className="px-6 py-3">
              Location
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Donors
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              King faisal Hospitla
            </th>
            <td className="px-6 py-4">Kacyiru-Kigali</td>
            <td className="px-6 py-4">Private</td>
            <td className="px-6 py-4 font-semibold">3</td>
            <td className="px-6 py-4 relative">
              <a
                href="#"
                onClick={() => setShowTooltip(!showTooltip)}
                className="font-medium text-red-600 dark:text-red-500 hover:underline text-2xl"
              >
                <PiDotsThreeCircleVertical />
              </a>
              {showTooltip && <Tooltip />}
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Kacyiru hospital
            </th>
            <td className="px-6 py-4">Kacyiru-Kigali</td>
            <td className="px-6 py-4">Public</td>
            <td className="px-6 py-4 font-semibold">20</td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-red-600 dark:text-red-500 hover:underline text-2xl"
              >
                <PiDotsThreeCircleVertical />
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              CHUK
            </th>
            <td className="px-6 py-4">Nyarugenge-kigali</td>
            <td className="px-6 py-4">Public</td>
            <td className="px-6 py-4 font-semibold">6</td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-red-600 dark:text-red-500 hover:underline text-2xl"
              >
                <PiDotsThreeCircleVertical />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Hospitals;
