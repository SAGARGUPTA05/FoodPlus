import React, { useState, useEffect } from "react";

function AvailableMenu() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate loading delay
  }, []);

  return (
    <div className="md:p-4">
      <h5 className="text-xl md:text-2xl font-extrabold mb-6">
        Available Menu
      </h5>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        {loading ? (
          <div className="max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden bg-gray-200 animate-pulse">
            <div className="w-full h-40 bg-gray-300"></div>
            <div className="p-4">
              <div className="h-6 bg-gray-300 rounded w-32 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-48 mb-2"></div>
              <div className="h-6 bg-gray-300 rounded w-24 mt-4"></div>
            </div>
            <div className="p-4">
              <div className="h-10 bg-gray-300 rounded w-full"></div>
            </div>
          </div>
        ) : (
          <div className="max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.jJI3bTJ-diLfKDHb9-vwmwHaE8&pid=Api&P=0&h=180"
              alt="Biryani"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl font-semibold text-gray-800 dark:text-white">Biryani</h5>
              <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet.</p>
              <h5 className="text-lg font-semibold mt-4">
                Price: <span className="text-[#d19254]">₹145</span>
              </h5>
            </div>
            <div className="p-4">
              <button className="btn-orange w-full">Add to Cart</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AvailableMenu;
