import React from "react";
import imG from "../../assets/hero_pizza.png";
import { Badge, Timer } from "lucide-react";
import AvailableMenu from "../AvailableMenu";

function RestaurantDetails() {
  return (
    <div className="max-w-6xl mx-auto my-10 ">
      <div className="w-full  ">
        <div className="relative w-full  h-32 md:h-64 lg:h-72">
          <img
            src={imG}
            alt=""
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="my-5">
            <h4 className="font-medium text-xl">Tandori Tadka</h4>
            <div className="flex gap-2 my-2">
              {["Briyani", "Momons", "Spring Roll"].map((cuisine, index) => (
                <div
                  key={index}
                  className="bg-gray-900 text-white rounded-2xl p-1 "
                >
                  {cuisine}
                </div>
              ))}
            </div>
            <div className="flex  md:flex-row flex-col gap-2 my-5 ">
              <div className="flex items-center gap-2 ">
                <Timer className="w-5 h-5"></Timer>
                <h5 className="flex items-center gap-2 font-medium">
                  Delivery Time:{" "}
                  <span className="text-[#d19254] ">35 mins</span>
                </h5>
              </div>
            </div>
          </div>
        </div>

{/*menu */}
     <AvailableMenu/>
      </div>
    </div>
  );
}

export default RestaurantDetails;
