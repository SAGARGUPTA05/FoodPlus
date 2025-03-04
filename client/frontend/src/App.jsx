import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Main from "./components/Main";
import ResetPassword from "./auth/ResetPassword";
import ForgetPassword from "./auth/ForgetPassword";
import VerifyEmail from "./auth/VerifyEmail";
import './App.css';


function App() {
  return (
    <div className="">
      <Routes>
      <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/forget-password" element={<ForgetPassword />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="/verify-email" element={<VerifyEmail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
