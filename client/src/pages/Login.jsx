import {  useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { SlSocialSpotify } from "react-icons/sl";
// import LogoContainer from "../components/LogoContainer";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const  navigateTo = useNavigate()

  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigateTo("/")
  };



  return (
    <div className="  h-screen bg-gradient-to-r from-slate-900 to-blue-800 flex flex-col place-content-center">
      {/* <LogoContainer /> */}
      <div className="justify-center items-center flex h-[80vh] ">
        <div className=" w-96 p-6 bg-blue-900  rounded border-2 border-gray-800 shadow-2xl ">
          <h2 className="text-3xl font-bold text-white text-center  py-6">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block py-1 text-sm font-medium text-white md:text-xl"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 pl-4 w-full border border-gray-300 rounded-full"
                value={email}
                onChange={handleEmailChange}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block py-1 text-sm font-medium text-white md:text-xl"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 pl-4 w-full border border-gray-300 rounded-full"
                value={password}
                onChange={handlePasswordChange}
                required
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full py-2 bg-green-500 text-white font-bold mt-3 mb-1 hover:bg-green-600 flex justify-center items-center gap-2"
            >
              Login 
            </button>
            <button
              type="submit"
              className="w-full rounded-full py-2 bg-blue-500 text-white font-bold my-3 hover:bg-green-600 flex justify-center items-center gap-2"
            >
              Login with facebook <BsFacebook size={20} />
            </button>
            <button
              type="submit"
              className="w-full rounded-full py-2 bg-gradient-to-r from-white to-blue-600 text-black font-bold my-3 hover:bg-green-600 flex justify-center items-center gap-2"
            >
              Login with Google <FcGoogle size={20} />
            </button>
            <span className="px-12 md:px-16 text-xs md:text-md  text-white">
              Create New Account ?{" "}
              <Link to="/register" className="underline">
                Click here
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;