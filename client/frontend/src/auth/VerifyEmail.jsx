import { Loader2 } from "lucide-react";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";
import { toast } from "react-toastify"; // Added for error messages

function VerifyEmail() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRef = useRef([]);
  const navigate = useNavigate();
  const { verifyEmail, loading } = useUserStore();

  const handleChange = (value, index) => {
    if (/^[a-zA-Z0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
    if (value !== "" && index < 5) {
      inputRef.current[index + 1].focus();
    }
  };
  localStorage.clear()
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputRef.current[index - 1].focus();
      }
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const verificationCode = otp.join("");

    if (verificationCode.length < 6) {
      toast.error("Please enter the full 6-digit code.");
      return;
    }

    try {
      await verifyEmail(verificationCode);
      navigate("/"); // Redirect on success
      
    } catch (error) {
      toast.error("Verification failed. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="p-8 rounded-md w-full max-w-md flex flex-col gap-10 border-gray-200">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl">Verify your email</h1>
          <p className="text-sm text-gray-600">
            Enter the 6-digit code sent to your email address.
          </p>
        </div>

        <form onSubmit={submitHandler}>
          <div className="flex justify-between">
            {otp.map((letter, index) => (
              <input
                type="text"
                ref={(element) => {
                  inputRef.current[index] = element;
                }}
                value={letter}
                maxLength={1}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onChange={(e) => handleChange(e.target.value, index)}
                className="md:w-12 md:h-12 w-8 h-8 text-center text-sm md:text-2xl font-normal md:font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                key={index}
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-orange mt-6 w-full flex items-center justify-center"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                Please wait
              </>
            ) : (
              "Verify"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyEmail;
