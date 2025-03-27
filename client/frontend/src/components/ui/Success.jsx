import { IndianRupee } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Success() {
  const orders = [1];
  if (orders.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 ">
          Order not found
        </h3>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg  w-full ">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200  cursor-pointer">
              Order Status:{""}{" "}
              <span className="text-[#ff5A5A]">{"confirm".toUpperCase()}</span>{" "}
            </h3>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Order Summary
            </h3>
            {/* ordered items displayed here */}
            <div className="mb-4  ">
              <div className="flex justify-between items-center ">
                <div className="flex items-center">
                  <img
                    className="w-14 h-14 rounded-md object-cover"
                    src="https://tse1.mm.bing.net/th?id=OIP.pHmbbZEdq3849Ek_el48lwHaE8&pid=Api&P=0&h=180"
                    alt=""
                  />
                  <h3 className="ml-4 text-gray-800 dark:text-gray-200 font-medium">
                    Burgur
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-gray-800 dark:text-gray-200 flex items-center">
                    <IndianRupee />
                    <span className="font-medium text-lg">80</span>
                  </div>
                </div>
              </div>
              <hr className="my-4 " />
            </div>
            <div className="mb-4 ">
              <div className="flex justify-between items-center ">
                <div className="flex items-center">
                  <img
                    className="w-14 h-14 rounded-md object-cover"
                    src="https://tse1.mm.bing.net/th?id=OIP.pHmbbZEdq3849Ek_el48lwHaE8&pid=Api&P=0&h=180"
                    alt=""
                  />
                  <h3 className="ml-4 text-gray-800 dark:text-gray-200 font-medium">
                    Burgur
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-gray-800 dark:text-gray-200 flex items-center">
                    <IndianRupee />
                    <span className="font-medium text-lg">80</span>
                  </div>
                </div>
              </div>
              <hr className="my-4 " />
            </div>
          </div>
          <Link to="/cart">
            {" "}
            <button className="w-full btn-orange shadow-lg">Continue Shopping</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Success;
