import React from "react";

function FilterPage() {
  const filterOptions = [
    {
      id: "burgur",
      lable: "Burgur",
    },
    {
        id: "thali",
        lable: "Thali",
      },{
        id: "momos",
        lable: "Momos",
      },{
        id: "briyani",
        lable: "Briyani",
      },{
        id: "springroll",
        lable: "Spring Roll",
      },
  ];
  const appliedFilterHandler=(value)=>{
    
  }
  return (
    <div className="md:w-72">
      <div className="flex items-center justify-center">
        <h1 className="font-medium text-lg"> Filter by cuisines</h1>
        <button>Reset</button>
      </div>
      {
        filterOptions.map((option)=>(
            <div key={option.id}
            className="flex items-center space-x-2 my-5">
              <input id={option.id} type="checkbox" onClick={()=>appliedFilterHandler(option.lable)} />
              <lable className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmfor={option.id}>{option.lable} </lable>

            </div>
        ))
      }
    </div>
  );
}

export default FilterPage;
