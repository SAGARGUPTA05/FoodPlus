import { Loader2, Plus, X } from "lucide-react";
import React, { useState } from "react";
import EditMenu from "./EditMenu";
import menuSchema from "../schema/menuSchema";
import { z } from "zod";

const menu = [
  {
    title: "Burger",
    description: "Delicious and juicy burger with fresh ingredients.",
    price: 80,
    image: "https://wallpapercave.com/wp/wp3376127.jpg",
  },
  {
    title: "Pizza",
    description: "Cheesy and crispy pizza with a variety of toppings.",
    price: 150,
    image: "https://wallpapercave.com/wp/wp3376127.jpg",
  },
];

function AddMenu() {
  const [open, setOpen] = useState(false);
  const [editMenu, setEditMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [selectedMenu, setSelectedMenu] = useState({});
  const [input, setInput] = useState({
    name: "",
    description: "",
    price: "",
    menuImage: null,
  });

  const changeHandler = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setInput((prevState) => ({
        ...prevState,
        [name]: e.target.files[0] || undefined,
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
    setLoading(true);

    try {
      menuSchema.parse(input);
      console.log("Validated Data:", input);
      setTimeout(() => {
        console.log("Menu added successfully:", input);
        setLoading(false);
        setOpen(false); // Close the modal after adding menu
      }, 2000);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errorMessages = err.errors.reduce((acc, error) => {
          acc[error.path[0]] = error.message;
          return acc;
        }, {});
        setErrors(errorMessages);
      }
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="flex justify-around items-baseline md:justify-between">
        <h3 className="font-bold md:font-extrabold text-lg md:text-2xl">
          Available Menu
        </h3>
        <button
          onClick={() => setOpen(true)}
          className="btn-orange flex items-center justify-center"
        >
          <Plus className="mr-2" /> Add Menus
        </button>
      </div>

      {/* Add Menu Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/75">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Add New Menu</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-600 hover:text-black"
              >
                <X />
              </button>
            </div>
            <p>Create a menu that will make your restaurant stand out.</p>

            <form onSubmit={submitHandler}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter menu name"
                  name="name"
                  className="w-full border rounded-lg p-2"
                  value={input.name}
                  onChange={changeHandler}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  placeholder="Enter menu description"
                  name="description"
                  className="w-full border rounded-lg p-2"
                  value={input.description}
                  onChange={changeHandler}
                ></textarea>
                {errors.description && (
                  <p className="text-red-500 text-sm">{errors.description}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">
                  Price (Rupees)
                </label>
                <input
                  type="number"
                  placeholder="Enter price"
                  name="price"
                  className="w-full border rounded-lg p-2"
                  value={input.price}
                  onChange={changeHandler}
                />
                {errors.price && (
                  <p className="text-red-500 text-sm">{errors.price}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">
                  Upload Menu Image
                </label>
                <input
                  type="file"
                  name="menuImage"
                  className="w-full border rounded-lg p-2"
                  onChange={changeHandler}
                />
                {errors.menuImage && (
                  <p className="text-red-500 text-sm">{errors.menuImage}</p>
                )}
              </div>

              {loading ? (
                <button
                  className="btn-orange flex items-center justify-center w-full"
                  disabled
                >
                  <Loader2 className="animate-spin mr-2" /> Please wait
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full btn-orange py-2 rounded-lg"
                >
                  Save Menu
                </button>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Available Menu List */}
      <div className="mt-6 space-y-4">
        {menu.map((data, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center md:space-x-4 md:p-4 p-2 shadow-md rounded-lg"
          >
            <img
              className="md:h-24 md:w-24 h-16 w-full object-cover rounded-lg"
              src={data.image}
              alt="Menu Item"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {data.title}
              </h3>
              <p className="text-xl text-gray-600 mt-1">{data.description}</p>
              <h3 className="text-md font-semibold mt-2">
                Price: <span className="text-[#D19254]">₹{data.price}</span>
              </h3>
            </div>
            <button
              onClick={() => {
                setSelectedMenu(data);
                setEditMenu(true);
              }}
              className="btn-orange mt-2"
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* Edit Menu Modal */}
      {editMenu && (
        <EditMenu
          selectedMenu={selectedMenu}
          setEditMenu={setEditMenu}
         
        />
      )}
    </div>
  );
}

export default AddMenu;
