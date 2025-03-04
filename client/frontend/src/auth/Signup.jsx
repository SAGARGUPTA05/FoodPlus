import React, { useState } from "react";
import { Mail,User2, LockKeyholeIcon, Loader2, PhoneCallIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {userSignupSchema} from '../schema/userSchema'
import {z} from 'zod'
function Signup() {
  const [loading, setLoading] = useState(false);
  const [errors,setErrors]=useState({});
  const [input, setInput] = useState({
    fullname:"",
    contact:"",
    email: "",
    password: "",
  });

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulating login process
      try{
          userSignupSchema.parse(input);
          
          console.log("validated Data",input);
          setTimeout(() => {
            console.log("Signup successful:",input);
            setLoading(false)
            
          }, 2000);
    
        } catch(err){
          setLoading(false);
          if(err instanceof z.ZodError){
            const errorMessages=err.errors.reduce((acc,error)=>{
              acc[error.path[0]]=error.message;
              return acc;
            },{})
            setErrors(errorMessages)
          }
        }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form
        className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4"
        onSubmit={loginSubmitHandler} // Correct placement of onSubmit
      >
        <div className="mb-4">
          <h1 className="font-bold text-2xl text-center">Eats</h1>
        </div>
        
     
        <div className="relative mb-8">
          <input
            type="text"
            name="fullname"
            value={input.fullname}
            onChange={changeEventHandler}
            placeholder="Enter your "
            className="pl-10 focus-visible:ring-1 border border-gray-300 rounded-md p-2 w-full"
            required
          />
          <User2 className="absolute left-2 inset-y-2 text-gray-500 pointer-events-none" />
        </div>
        <div className="relative mb-8">
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
        </div>
        <div className="relative mb-8">
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
        </div>
        <div className="relative mb-8">
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
        </div>
        <div className="mb-10">
          <button
            type="submit"
            disabled={loading}
            className="btn-orange w-full flex items-center justify-center"
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
