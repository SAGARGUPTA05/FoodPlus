import {
    Loader2,
  LocateIcon,
  Mail,
  MapIcon,
  MapPin,
  MapPinnedIcon,
  Plus,
} from "lucide-react";
import React, { useRef, useState } from "react";

function Profile() {
  const imageRef = useRef(null);
  const loading=false;   
  const [selectedprofle, setSelectedProfile] = useState(null);
  const [profileData, setProfileData] = useState({
    fullname: "",
    email: "",
    address: "",
    city: "",
    country: "",
    profileImg: "",
  });
  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        setSelectedProfile(result);
        setProfileData((prevData) => ({
          ...prevData,
          profileImg: result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const updateProfileHandler = (e) => {
    e.preventDefault();
    {/**api     */}
  };
  return (
    <form  onSubmit={updateProfileHandler} className="max-w-7xl mx-auto my-9">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative md:w-28 md:h-28  w-20 h-20">
            <div className="w-full h-full rounded-full flex items-center justify-center  bg-gray-200">
              <img src={selectedprofle} className="md:w-24 md:h-24 w-16 h-16 bg-white rounded-full flex items-center justify-center ">
                
              </img>
            </div>
            <input
              ref={imageRef}
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => fileChangeHandler(e)}
            />
            <div
              onClick={() => imageRef.current?.click()}
              className="absolute inset-0 flex items-center  justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/40 duration-300 bg-opacity-50 rounded-full cursor-pointer"
            >
              <Plus className="text-white w-8 h-8"></Plus>
            </div>
          </div>
          <input
            onChange={changeHandler}
            type="text "
            name="fullname"
            value={profileData.fullname}
            className="font-bold text-2xl outline-none border-none focus-visible: ring-transparent "
          />
        </div>
      </div>
      <div className="grid md:grid-cols-4 md:gap-2 gap-3 my-10 ">
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <Mail className="text-gray-500"></Mail>
          <div className="w-full">
            <label htmlFor="">
              Email
              <input
                onChange={changeHandler}
                name="email"
                value={profileData.email}
                type="text"
                className="w-full text-gray-600 bg-transparent focus-visible:ring-0  focus-visible:border-transparent outline-none  border-none  "
              />
            </label>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <LocateIcon className="text-gray-500"></LocateIcon>
          <div className="w-full">
            <label htmlFor="">
              Address
              <input
                onChange={changeHandler}
                name="address"
                value={profileData.address}
                type="text"
                className="w-full text-gray-600 bg-transparent focus-visible:ring-0  focus-visible:border-transparent outline-none  border-none  "
              />
            </label>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <MapPin className="text-gray-500"></MapPin>
          <div className="w-full">
            <label htmlFor="">
              City
              <input
                onChange={changeHandler}
                name="city"
                value={profileData.city}
                type="text"
                className="w-full text-gray-600 bg-transparent focus-visible:ring-0  focus-visible:border-transparent outline-none  border-none  "
              />
            </label>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <MapPinnedIcon className="text-gray-500"></MapPinnedIcon>
          <div className="w-full">
            <label htmlFor="">
              Country
              <input
                onChange={changeHandler}
                name="country"
                value={profileData.country}
                type="text"
                className="w-full text-gray-600 bg-transparent focus-visible:ring-0  focus-visible:border-transparent outline-none  border-none  "
              />
            </label>
          </div>
        </div>
      </div>

      <div className="text-center">
        {
            loading ? <button disabled className="flex   items-center justify-center btn-orange"> <Loader2 className="mr-2 w-4 h-4 animate-spin "></Loader2>Please wait</button> : <button className="btn-orange ">Update</button>
        }
      </div>
    </form>
  );
}

export default Profile;
