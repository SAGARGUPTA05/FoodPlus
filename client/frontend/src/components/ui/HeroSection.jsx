import { Search } from "lucide-react";
import React, { useState } from "react";
import heroImg from "../../assets/hero_pizza.png";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-center m-4 gap-20">
      <div className="flex flex-col gap-10 md:w-[40%] ">
        <div className="flex flex-col gap-5">
          <p className="font-bold md:font-extrabold md:text-5xl text-4xl ">
            Order Food anytime & anywhere
          </p>
          <p className="text-gray-500">
            Hey! Our Delicios food is waiting for you, we are always near to
            you.
          </p>
        </div>
        <div className="relative flex items-center justify-between gap-2  z-0">
          <input
            type="text"
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 shadow-lg h-12 w-72"
          />
          <Search className="  text-gray-500 absolute inset-y-2.5 left-2 "></Search>

          <button
            className="btn-orange"
            onClick={() => {
              if (search.trim()) {
                navigate(`/search/${search}`);
              }
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <img
          src={heroImg}
          alt=""
          className="object-cover w-full max-h-[500px] max-w-[90%]"
        />
      </div>
    </div>
  );
}

export default HeroSection;
