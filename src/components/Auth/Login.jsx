import React, {useState} from "react";

const Login = ({handleLogin}) => {

const [Email, setEmail] = useState("");

const [Password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(Email, Password);
    setEmail("");
    setPassword("");
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="p-20 rounded-xl border-2 border-emerald-600">
        <form onSubmit={(e)=>{
           submitHandler(e);
        }} className="flex flex-col items-center justify-center">
          <input
          value={Email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
            required
            className=" w-[350px] outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400"
            type="email"
            placeholder="enter your email"
          />
          <input
          value={Password}
          onChange={(e)=>{
            setPassword(e.target.value);
          }}
            required
            className=" w-[350px] outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400 mt-4"
            type="password"
            placeholder="enter your password"
          />
          <button className="w-[350px] hover:bg-emerald-500 border-none outline-none bg-emerald-600 rounded-full text-xl py-3 px-5 mt-5 block">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
