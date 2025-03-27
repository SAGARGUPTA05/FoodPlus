import React, { useState } from "react";
import { z } from "zod";
import restaurantSchema from "../schema/restaurantSchema";

function Restaurant() {
  const [input, setInput] = useState({
    restaurantName: "",
    city: "",
    country: "",
    deliveryTime:"",
    cuisines: [],
    image: null,
  });

  const [errors, setErrors] = useState({}); // State to store validation errors

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setInput((prevState) => ({
        ...prevState,
        [name]: e.target.files[0], // Store file object
      }));
    } else {
      setInput((prevState) => ({
        ...prevState,
        [name]: type === "number" ? Number(value) : value, 
      }));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      restaurantSchema.parse(input);
      console.log("Validated Data", input);
      setErrors({}); // Clear errors if validation is successful
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errorMessages = err.errors.reduce((acc, error) => {
          acc[error.path[0]] = error.message;
          return acc;
        }, {});
        setErrors(errorMessages);
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div>
        <h3 className="font-extrabold text-2xl mb-5">Add Restaurant</h3>
        <form
          onSubmit={submitHandler}
          className="md:grid grid-cols-2 gap-4 space-y-2 md:space-y-0"
        >
          {/* Restaurant Name */}
          <div className="flex flex-col">
            <label
              htmlFor="restaurantName"
              className="font-medium text-gray-700"
            >
              Restaurant Name
            </label>
            <input
              type="text"
              name="restaurantName"
              id="restaurantName"
              placeholder="Enter your restaurant name"
              className="border border-gray-300 rounded-lg p-2 h-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={input.restaurantName}
              onChange={handleChange}
            />
            {errors.restaurantName && (
              <p className="text-red-500">{errors.restaurantName}</p>
            )}
          </div>

          {/* City */}
          <div className="flex flex-col">
            <label htmlFor="city" className="font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Enter city"
              className="border border-gray-300 rounded-lg p-2 h-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={input.city}
              onChange={handleChange}
            />
            {errors.city && <p className="text-red-500">{errors.city}</p>}
          </div>

          {/* Country */}
          <div className="flex flex-col">
            <label htmlFor="country" className="font-medium text-gray-700">
              Country
            </label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Enter country"
              className="border border-gray-300 rounded-lg p-2 h-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={input.country}
              onChange={handleChange}
            />
            {errors.country && <p className="text-red-500">{errors.country}</p>}
          </div>

          {/* Estimated Delivery Time */}
          <div className="flex flex-col">
            <label htmlFor="deliveryTime" className="font-medium text-gray-700">
              Estimated Delivery Time (minutes)
            </label>
            <input
              type="number"
              name="deliveryTime"
              id="deliveryTime"
              placeholder="Enter estimated delivery time"
              className="border border-gray-300 rounded-lg p-2 h-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={input.deliveryTime}
              onChange={handleChange}
            />
            {errors.deliveryTime && (
              <p className="text-red-500">{errors.deliveryTime}</p>
            )}
          </div>

          {/* Cuisines */}
          <div className="flex flex-col">
            <label htmlFor="cuisines" className="font-medium text-gray-700">
              Cuisines
            </label>
            <input
              type="text"
              name="cuisines"
              id="cuisines"
              placeholder="Enter cuisines"
              className="border border-gray-300 rounded-lg p-2 h-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={input.cuisines}
              onChange={(e)=>setInput({...input,cuisines:e.target.value.split(",")})}
            />
            {errors.cuisines && (
              <p className="text-red-500">{errors.cuisines}</p>
            )}
          </div>

          {/* Upload Image */}
          <div className="flex flex-col">
            <label htmlFor="image" className="font-medium text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              id="image"
              className="border border-gray-300 rounded-lg p-2 h-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
              onChange={handleChange}
            />
            {errors.image && <p className="text-red-500">{errors.image}</p>}
          </div>

          {/* Add Restaurant Button */}
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 btn-orange  font-semibold rounded-lg w-full md:w-auto hover:bg-orange-600"
            >
              Add Restaurant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Restaurant;
