import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.nav
     className="w-screen overflow-x-hidden h-16 pt-4 bg-gradient-to-r from-slate-900 to-blue-800 flex justify-between px-48  items-center">
      <div className=" text-white flex gap-8 text-xl">
        <a href="#">About Us</a>
        <a href="#">Job Seeker</a>
        <a href="#">Employer</a>
      </div>
      <div className="flex gap-6 items-center">
        <button className=" border-2 border-white px-3 py-1 rounded-full text-white">
          <Link to={"/register"}>Sign Up</Link>
        </button>
        <button className=" bg-blue-600 text-white px-3 py-1 rounded-full text-xl">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
