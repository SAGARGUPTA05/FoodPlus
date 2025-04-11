import React, { useState } from "react";
import { Mail, User2, LockKeyholeIcon, Loader2, PhoneCallIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { userSignupSchema } from "../schema/userSchema";
import { z } from "zod";
import { useUserStore } from "../store/useUserStore";
 
function Signup() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    fullname: "",
    contact: "",
    email: "",
    password: "",
    admin: false, // ✅ added admin field
  });

  const { signup, loading } = useUserStore();

  const changeEventHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const signupSubmitHandler = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      userSignupSchema.parse(input);
      console.log("Validated Data:", input);

      await signup(input);
      navigate("/verify-email");
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errorMessages = err.errors.reduce((acc, error) => {
          acc[error.path[0]] = error.message;
          return acc;
        }, {});
        setErrors(errorMessages);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <form
        className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4"
        onSubmit={signupSubmitHandler}
      >
        <div className="mb-4">
          <h1 className="font-bold text-2xl text-center">Foodplus</h1>
        </div>

        {/* Full Name Input */}
        <div className="relative mb-4">
          <input
            type="text"
            name="fullname"
            value={input.fullname}
            onChange={changeEventHandler}
            placeholder="Enter your full name"
            className="pl-10 focus-visible:ring-1 border border-gray-300 rounded-md p-2 w-full"
            required
          />
          <User2 className="absolute left-2 inset-y-2 text-gray-500 pointer-events-none" />
          {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
        </div>

        {/* Email Input */}
        <div className="relative mb-4">
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={changeEventHandler}
            placeholder="Enter your email"
            className="pl-10 focus-visible:ring-1 border border-gray-300 rounded-md p-2 w-full"
            required
          />
          <Mail className="absolute left-2 inset-y-2 text-gray-500 pointer-events-none" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Password Input */}
        <div className="relative mb-4">
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={changeEventHandler}
            placeholder="Enter your password"
            className="pl-10 focus-visible:ring-1 border border-gray-300 rounded-md p-2 w-full"
            required
          />
          <LockKeyholeIcon className="text-gray-500 absolute left-2 inset-y-2" />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        {/* Contact Input */}
        <div className="relative mb-4">
          <input
            type="text"
            name="contact"
            value={input.contact}
            onChange={changeEventHandler}
            placeholder="Enter your contact"
            className="pl-10 focus-visible:ring-1 border border-gray-300 rounded-md p-2 w-full"
            required
          />
          <PhoneCallIcon className="absolute left-2 inset-y-2 text-gray-500 pointer-events-none" />
          {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
        </div>

        {/* Admin Checkbox */}
        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            name="admin"
            id="admin"
            checked={input.admin}
            onChange={changeEventHandler}
          />
          <label htmlFor="admin" className="text-sm">Register as Admin</label>
        </div>

        {/* Signup Button */}
        <div className="mb-6">
          <button
            type="submit"
            disabled={loading}
            className="btn-orange w-full flex items-center justify-center p-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition duration-300"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </>
            ) : (
              "Signup"
            )}
          </button>
        </div>

        <hr />

        {/* Login Redirect */}
        <p className="text-center mt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
