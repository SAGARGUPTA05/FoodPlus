import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import CheckOutConfirmPage from "./CheckOutConfirmPage";

function Cart() {
  const [quantity, setQuantity] = useState(2);
  const [open,setOpen]=useState(false)

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-6xl flex flex-col mx-auto my-10 ">
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-red-500  rounded-md">
          Clear All
        </button>
      </div>
      <table className="w-full  border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className=" p-2">Items</th>
            <th className=" p-2">Title</th>
            <th className=" p-2">Price</th>
            <th className=" p-2">Quantity</th>
            <th className=" p-2">Total</th>
            <th className=" p-2 text-right">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">🍔</td>
            <td className=" p-2">Burger</td>
            <td className=" p-2">$5.00</td>
            <td className=" p-2  flex items-center justify-center">
              <div className="w-fit px-2 flex items-center  justify-center  border rounded-full  py-1 bg-gray-100 shadow-sm">
                <button
                  onClick={handleDecrement}
                  className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition flex items-center justify-center border-none outline-none"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                  onClick={handleIncrement}
                  className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition flex items-center justify-center"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </td>
            <td className=" p-2">${(quantity * 5).toFixed(2)}</td>
            <td className="  text-right">
              <button className="px-3 py-1 btn-orange text-sm   rounded-md">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot >
          <tr >
            <th >Total</th>
            <th colSpan={5} className="text-right ">80</th>
          </tr>
        </tfoot>
      </table>
      <div className="flex justify-end my-5 ">
        <button className="btn-orange" onClick={()=>{setOpen(true)}}>CheckOut</button>
      </div>
      <CheckOutConfirmPage open={open}  setOpen={setOpen}/>
    </div>
  );
}

export default Cart;
