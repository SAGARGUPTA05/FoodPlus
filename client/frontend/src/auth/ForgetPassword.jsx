import React, { useState } from "react";
import { Loader2, Mail } from "lucide-react";
import { Link } from "react-router-dom";


function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <form className="flex flex-col gap-5  md:p-8 w-full max-w-md rounded-lg mx-4">
        <div className="text-center ">
          <h1 className="font-extrabold text-2xl mb-2 ">Forget Password</h1>
          <p className="text-sm text-gray-600 ">
            Enter your email address to reset your passeword
          </p>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="Enter yuor email address"
            className="pl-10 w-full"
          />
          <Mail className="absolute inset-y-0 left-2"></Mail>
        </div>
        {loading ? (
          <button className="btn-orange text-white flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin  "></Loader2>Please
            wait
          </button>
        ) : (
          <button className="btn-orange">Send Reset Link</button>
        )}
        <span className="text-center">
          Back to{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
}

export default ForgetPassword;
