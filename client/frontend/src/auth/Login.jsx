import React, { useState } from "react";
import { Mail, LockKeyholeIcon, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { userLoginSchema } from "../schema/userSchema";
import { z } from "zod";
import { useUserStore } from "../store/useUserStore";

function Login() {
  const [errors, setErrors] = useState({});
  const { login, loading } = useUserStore(); // ✅ Ensure 'loadIng' exists in Zustand

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    setErrors({}); // Reset errors before validation

    try {
      userLoginSchema.parse(input); // Validate input with Zod
      

      await login(input);
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
    <div className="flex items-center justify-center min-h-screen w-screen px-4">
      <form
        className="md:p-8 w-full max-w-md md:border border-gray-200 mx-auto bg-white shadow-lg rounded-lg p-6"
        onSubmit={loginSubmitHandler}
      >
        <div className="mb-4 text-center">
          <h1 className="font-bold text-2xl">Foodplus</h1>
        </div>

        <div className="relative mb-6">
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

        <div className="relative mb-6">
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

        <div className="mb-6">
          <button
            type="submit"
            disabled={loading} // ✅ Zustand's 'loadIng' instead of 'loading'
            className="btn-orange w-full flex items-center justify-center p-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition duration-300"
          >
            {loading ? ( // ✅ Zustand loading state
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </>
            ) : (
              "Login"
            )}
          </button>
        </div>

        <hr />
        
        <p className="text-center mt-2">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
