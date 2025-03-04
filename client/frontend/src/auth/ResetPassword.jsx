import React, { useState } from "react";
import { Loader2, LockKeyholeIcon } from "lucide-react";
import { Link } from "react-router-dom";


function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <form className="flex flex-col gap-5  md:p-8 w-full max-w-md rounded-lg mx-4">
        <div className="text-center ">
          <h1 className="font-extrabold text-2xl mb-2 ">Reset Password</h1>
          <p className="text-sm text-gray-600 ">
            Enter your new passeword to reset old one
          </p>
        </div>
        <div className="relative w-full">
          <input
            type="password"
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            value={newPassword}
            placeholder="Enter your new password"
            className="pl-10 w-full"
          />
          <LockKeyholeIcon className="absolute inset-y-0 left-2 text-gray-600"></LockKeyholeIcon>
        </div>
        {loading ? (
          <button className="btn-orange text-white flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin  "></Loader2>Please
            wait
          </button>
        ) : (
          <button className="btn-orange">Reset</button>
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

export default ResetPassword;
