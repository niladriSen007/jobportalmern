import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider, Outlet,Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/login",
      element:<Login />
    },
    {
      path:"/register",
      element:<Register />
    },
    {
      path:"*",
      element:<Navigate to="/login" />
    },
  ]) 

  return (
    <RouterProvider router={router}/>
  );
};

export default App;
