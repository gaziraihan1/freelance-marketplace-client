import { AlignRight, X } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Auth-context/AuthProvider";
import { toast } from "react-toastify";
import Loading from "./Loading";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const { logOut, user, loading } = useContext(AuthContext);
  const handleLogout = () => {
    logOut().then(() => {
      toast.success("Logout successfull");
    });
  };

  return (
    <nav className="flex justify-between lg:w-11/12 mx-auto 2xl:w-10/12 items-center">
      <div>
        <h2 className="text-xl font-bold lg:text-3xl">
          Task<span className="text-gray-600">MP</span>
        </h2>
      </div>
      <div className="lg:hidden" onClick={() => setMenu(!menu)}>
        {menu ? (
          <X className="cursor-pointer" />
        ) : (
          <AlignRight className="cursor-pointer" />
        )}
      </div>
      <ul
        className={`flex bg-slate-300 flex-col gap-4 absolute p-6 rounded-lg ${
          menu ? "top-16 right-2" : "hidden"
        } lg:hidden text-center z-10`}
      >
        {
          user? <li className="flex justify-center items-center">
              <div>
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.photoURL}
                  alt="User"
                />
              </a>
              <Tooltip id="my-tooltip" />
            </div>
            </li>: ''
        }
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/add-task"}>Add Task</NavLink>
        </li>
        <li>
          <NavLink to={"/browse-task"}>Browse Tasks</NavLink>
        </li>
        <li>
          <NavLink to={"/my-posted-task"}>My Posted Tasks</NavLink>
        </li>
        {user ? (
          <>
            
            <li className="py-1 rounded-2xl border border-red-500 hover:text-gray-700">
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className="py-1 rounded-2xl border border-gray-500 hover:text-gray-700">
              <Link to="/auth/login">Login</Link>
            </li>
            <li className="py-1 rounded-2xl border border-gray-500 hover:text-gray-700">
              <Link to="/auth/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
      <ul className="hidden lg:flex gap-6 xl:gap-8 2xl:gap-12 text-lg font-medium text-gray-600">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/add-task"}>Add Task</NavLink>
        </li>
        <li>
          <NavLink to={"/browse-task"}>Browse Tasks</NavLink>
        </li>
        <li>
          <NavLink to={"/my-posted-task"}>My Posted Tasks</NavLink>
        </li>
      </ul>
      <div className="hidden lg:block">
        {loading ? (
          <span className="loading loading-spinner loading-sm lg:loading-xl"></span>
        ) : user ? (
          <div className="flex gap-2">
            <div>
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.photoURL}
                  alt="User"
                />
              </a>
              <Tooltip id="my-tooltip" />
            </div>
            <button
              className="py-1 px-7 border rounded-4xl cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/auth/login">
              <button className="bg-blue-600 text-white px-6 py-2 rounded">
                Login
              </button>
            </Link>
            <Link to="/auth/signup">
              <button className="bg-blue-800 text-white px-6 py-2 rounded">
                Signup
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
