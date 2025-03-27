import { Loader2, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import menuSchema from "../schema/menuSchema";

function EditMenu({ selectedMenu, setEditMenu}) {
  const [loading,setLoading] = useState(false);
  const [errors, setErrors] = useState({});
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
        setEditMenu(false); // Close the modal after adding menu
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

    // Initialize input state with selectedMenu values
    useEffect(() => {
        setInput({
          name: selectedMenu.title || "",
          description: selectedMenu.description || "",
          price: selectedMenu.price || "",
          menuImage: null, // Keep this null initially
        });
      }, [selectedMenu, setInput]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/75">
      <div className="bg-white p-6 rounded-lg shadow-lg w-6xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Edit Menu</h3>
          <button
            onClick={() => setEditMenu(false)}
            className="text-gray-600 hover:text-black"
          >
            <X />
          </button>
        </div>
        <p>Update your menu to keep your offerings fresh and exciting.</p>

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
  );
}

export default EditMenu;
