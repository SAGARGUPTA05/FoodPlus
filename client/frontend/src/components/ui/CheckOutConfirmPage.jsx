import { X } from "lucide-react";
import React, { useState } from "react";

function CheckOutConfirmPage({ open, setOpen }) {
  if (!open) return null;

  const [input, setInput] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    country: "",
  });
  const checkOutHandler = (e) => {
    e.preventDefault();
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/75">
      <div className="bg-white p-6 rounded-lg shadow-lg w-6xl">
        <h2 className="text-xl font-semibold mb-4">
          Review Your Order Address Details
        </h2>

        <form
          onSubmit={checkOutHandler}
          className="md:grid grid-cols-2 gap-2 space-y-1 md:space-y-0 relative"
        >
          <div className="flex flex-col">
            <label htmlFor="fullname">Fullname</label>
            <input
              type="text"
              name="name"
              className="border border-gray-300 rounded-lg p-3 h-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
              id="fullname"
              value={input.name}
              onChange={changeHandler}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={input.email}
              onChange={changeHandler}
              className="border border-gray-300 rounded-lg p-3 h-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="contact">Contact</label>
            <input
              type="text"
              name="contact"
              id="contact"
              value={input.contact}
              onChange={changeHandler}
              className="border border-gray-300 rounded-lg p-3 h-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={input.address}
              onChange={changeHandler}
              className="border border-gray-300 rounded-lg p-3 h-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              value={input.city}
              onChange={changeHandler}
              className="border border-gray-300 rounded-lg p-3 h-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              value={input.country}
              onChange={changeHandler}
              className="border border-gray-300 rounded-lg p-3 h-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            className="px-4 py-2  absolute -top-6 right-0"
            onClick={() => setOpen(false)}
          >
            <X />
          </button>
          <div className="col-span-2 flex justify-center">
            <button
              className="px-4 py-2 btn-orange w-full md:w-auto  "
              onClick={() => alert("Order Confirmed!")}
            >
              Continue To Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckOutConfirmPage;
