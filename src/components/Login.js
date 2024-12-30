import React from "react";
import Header from "../components/Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/BD-en-20241223-TRIFECTA-perspective_2fcc1566-738b-4522-aba5-a72a29a34b06_large.jpg"
          alt="Netflix Bg"
        />
      </div>
      <form className=" w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="p-4 my-4 text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name (Optional)"
            className="p-4 my-4 w-full bg-gray-600"
          />
        )}

        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 my-4 w-full bg-gray-600"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <button className="p-4 my-6 bg-red-700 text-white rounded-lg w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already a user? Sign in."}
        </p>
      </form>
    </div>
  );
};

export default Login;
