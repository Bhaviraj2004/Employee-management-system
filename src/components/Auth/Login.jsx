import React from "react";

const Login = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="p-20 rounded-xl border-2 border-emerald-600">
        <form className="flex flex-col items-center justify-center">
          <input
            required
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400"
            type="email"
            placeholder="enter your email"
          />
          <input
            required
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400 mt-4"
            type="password"
            placeholder="enter your password"
          />
          <button className="border-none outline-none bg-emerald-600 rounded-full text-xl py-3 px-5 mt-5 w-[260px] block">
            Log in
          </button>


        </form>
      </div>
    </div>
  );
};

export default Login;
