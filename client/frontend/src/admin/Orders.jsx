import { CaseLower } from "lucide-react";
import React from "react";

function Orders() {
  return (
    <div className="max-w-6xl my-10 mx-auto">
      <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10">
        Orders overview
      </h3>
      <div className="space-y-8 ">
        {/*restaurant orders displayed here */}
        <div className="flex flex-col md:flex-row justify-between items-start sm:items-center bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 sm:p-8 border-gray-200 dark:border-gray-700">
          <div className="flex-1 mb-6 sm:mb-0 ">
            <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-100 ">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              <span className="font-semibold">Address: </span> Lorem ipsum dolor
              sit amet consectetur.
            </p>
            <p className="text-gray-600` dark:text-gray-400 mt-2">
              {" "}
              <span className="font-semibold">Total Amount: </span> 160
            </p>
          </div>
          <div className="w-full sm:w-1/3 ">
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Order Status
            </label>
            <select className="w-full" name="" id="">
              {[
                "Pending",
                "Confirmed",
                "Preparing",
                "OutForDelivery",
                "Delivered",
              ].map((item, index) => (
                <option key={index} value={item.toLowerCase()}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start sm:items-center bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 sm:p-8 border-gray-200 dark:border-gray-700">
          <div className="flex-1 mb-6 sm:mb-0 ">
            <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-100 ">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              <span className="font-semibold">Address: </span> Lorem ipsum dolor
              sit amet consectetur.
            </p>
            <p className="text-gray-600` dark:text-gray-400 mt-2">
              {" "}
              <span className="font-semibold">Total Amount: </span> 160
            </p>
          </div>
          <div className="w-full sm:w-1/3 ">
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Order Status
            </label>
            <select className="w-full" name="" id="">
              {[
                "Pending",
                "Confirmed",
                "Preparing",
                "OutForDelivery",
                "Delivered",
              ].map((item, index) => (
                <option key={index} value={item.toLowerCase()}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
