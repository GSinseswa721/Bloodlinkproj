import { MdClose } from "react-icons/md";
import { nanoid } from "nanoid";

const EditPopup = ({ setShowEditPopup }) => {
  return (
    <div
      id="popup"
      className="fixed z-[10000] bg-black bg-opacity-50 h-screen w-screen left-0 top-0 flex flex-col items-center justify-center "
    >
      <form className="max-w-md mx-auto p-5 w-[50vw] bg-white rounded-lg ml-auto flex flex-col">
        <div className="text-black flex justify-between mb-6">
          <h4>Hospital details</h4>
          <MdClose
            fontWeight={900}
            fontSize={30}
            className="cursor-pointer "
            onClick={() => {
              setShowEditPopup(false), console.log("Show");
            }}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Hospital name
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-within:!ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
            placeholder="name@gmail.com"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="location"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
          />
        </div>
        <div className="flex gap-3">
          <div className="mb-5">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <input
              type="text"
              id="repeat-password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Donors
            </label>
            <input
              type="text"
              id="repeat-password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
              disabled
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-800"
        >
          Save changes
        </button>
      </form>
    </div>
  );
};

export default EditPopup;
