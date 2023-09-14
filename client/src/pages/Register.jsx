import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const navigateTo = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    console.log(formData)
    navigateTo("/")
  };

 

  return (
    <div className="h-[100vh] bg-gradient-to-r from-slate-900 to-blue-800  flex flex-col place-content-center ">
      <div className=" h-[85vh] rounded-lg shadow-lg flex items-center justify-center">
        <div className=" w-96 p-6 bg-blue-900 shadow-md rounded border-2 border-gray-800">
          <h2 className="text-2xl text-white text-center font-bold  mb-4">
            Register
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block font-medium mb-1 text-white py-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-full focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block font-medium mb-1 text-white py-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-full focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block font-medium mb-1 text-white py-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-full focus:outline-none focus:border-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full font-bold transition-all duration-300 bg-green-500 text-white py-2 rounded-full my-3 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200"
            >
              Register
            </button>
            <span className="px-8 md:px-12 text-xs md:text-md  text-white">
              Already have an Account ?{" "}
            </span>
            <button className="w-full border-2 text-black hover:text-white border-blue-600 font-noormal transition-all duration-300  py-2 rounded-full my-3 bg-blue-500  ">
              <Link
                to="/login"
                className=" flex items-center justify-center gap-2"
               
              >
                Login here
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
