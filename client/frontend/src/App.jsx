import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";

import ResetPassword from "./auth/ResetPassword";
import ForgetPassword from "./auth/ForgetPassword";
import VerifyEmail from "./auth/VerifyEmail";

//import './App.css';
import MainLayOut from "./layout/MainLayOut";
import HeroSection from "./components/ui/HeroSection";
import FilterPage from "./components/ui/FilterPage";
import RestaurantDetails from "./components/ui/RestaurantDetails";
import Profile from "./components/ui/Profile";
import SearchPage from "./components/ui/SearchPage";
import Cart from "./components/ui/Cart";
import Restaurant from "./admin/Restaurant";
import AddMenu from "./admin/AddMenu";
import Orders from "./admin/Orders";
import Success from "./components/ui/Success";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
         <Route index element={<HeroSection/>}></Route>
         <Route path="/filter" element={<FilterPage/>}></Route>
         <Route path="/restaurant-details/:id" element={<RestaurantDetails/>}></Route>
         <Route path="/profile" element={<Profile/>}></Route>
         <Route path="/search/:text" element={<SearchPage/>}></Route>
         <Route path="/cart" element={<Cart/>}></Route>
         <Route path="/order/status" element={<Success/>} ></Route>
         <Route path="/admin/restaurant" element={<Restaurant/>}></Route>
         <Route path="/admin/menu" element={<AddMenu/>}></Route>
         <Route path="/admin/orders" element={<Orders/>}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>
    </div>
  );
}

export default App;
