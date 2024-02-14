import { PieChart } from "@mui/x-charts";

const DashBoard = () => {
  return (
    <div className="w-full">
      {/* donors */}

      {/* Donors cards */}

      <div className="bg-red-600 grid grid-cols-4 gap-4 p-3 rounded-xl ">
        {/* Number  */}
        <div className=" h-fit gap-3 py-2 text-center flex flex-col-reverse bg-red-800 text-white  rounded-lg shadow ">
          <h5 className=" text-2xl font-bold tracking-tight   m-0">
            Hospitals
          </h5>
          <p className="font-bold text-2xl text-center m-0">12</p>
        </div>
        {/* Number of hospitals  */}
        <div className=" h-fit gap-3 py-2 text-center flex flex-col-reverse bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white m-0">
            Requests
          </h5>
          <p className="font-bold text-2xl text-center text-gray-700 dark:text-gray-400 m-0">
            20
          </p>
        </div>
        <div className=" h-fit gap-3 py-2 text-center flex flex-col-reverse bg-red-800 text-white  rounded-lg shadow ">
          <h5 className=" text-2xl font-bold tracking-tight   m-0">Donated</h5>
          <p className="font-bold text-2xl text-center m-0">90</p>
        </div>
        {/* Number of hospitals  */}

        <div className=" h-fit gap-3 py-2 text-center flex flex-col-reverse bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white m-0">
            New Donors
          </h5>
          <p className="font-bold text-2xl text-center text-gray-700 dark:text-gray-400 m-0">
            34
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 my-5 gap-5">
        {/* Blood types */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-gray-300 ">
          <h6 className="font-bold px-3 pt-3 py-2 text-center">Donors</h6>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 text-center">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Blood type
                </th>
                <th scope="col" className="px-6 py-4">
                  Number of donors
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                <th
                  scope="row"
                  className="px-6 py-3 text-xs font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  A+
                </th>
                <td className="px-6 py-3 text-xs">4</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-3 text-xs font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  A-
                </th>
                <td className="px-6 py-3 text-xs">14</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-3 text-xs font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  AB+
                </th>
                <td className="px-6 py-3 text-xs">6</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-3 text-xs font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  AB-
                </th>
                <td className="px-6 py-3 text-xs">9</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-3 text-xs font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  B-
                </th>
                <td className="px-6 py-3 text-xs">11</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-3 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Total
                </th>
                <td className="px-6 py-3 text-sm">40</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* pie */}

        <div className="col-span-2 border border-gray-400 shadow-md rounded-xl py-3 flex flex-col items-center justify-center w-[90%] justify-self-end">
          <h6 className="font-bold text-center">Donation report overview</h6>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "Hospitals", color: "red" },
                  { id: 1, value: 18, label: "Requests", color: "gray" },
                  { id: 2, value: 30, label: "Donated", color: "black" },
                  { id: 3, value: 20, label: "New Donors", color: "brown" }
                ]
              }
            ]}
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
