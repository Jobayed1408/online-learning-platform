import { Link, NavLink } from "react-router";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { MdOutlineDensitySmall } from "react-icons/md";
import { BookA } from "lucide-react";
import "./css/themeChange.css"

const NavBar = () => {
  const { user, signOutUser } = use(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

  useEffect(() => {
    const html = document.querySelector('html')
    html.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])


  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light")
  }
  return (
    <div className="navbar min-h-0 z-1   glass-card max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>
                <GoHomeFill />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/all-courses"}>
                <MdOutlineDensitySmall /> Courses
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"}>
                <LuLayoutDashboard /> DashBoard
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="flex text-primary items-center gap-1 text-lg md:text-3xl font-bold">
          <div className="hidden md:flex">
            <BookA className="" /> <h1 >
              E-Learning School
            </h1>
          </div>
          
        </Link>
      </div>
      <div className="navbar-center md:hidden flex font-bold text-primary text-lg">
            <BookA className="" />
            <h1>E-Learning School</h1>
          </div>
      <div className="md:navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-10 text-xl">
          <li>
            <NavLink to={"/"}>
              <GoHomeFill />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/all-courses"}>
              <MdOutlineDensitySmall /> Courses
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard"}>
              <LuLayoutDashboard /> Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 border-2 border-blue-600 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  referrerPolicy="no-referrer"
                  src={user.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <div className=" pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs">{user.email}</li>
              </div>

              <li>
                <Link to={"/my-course"}>
                  My Courses
                </Link>
              </li>

              <li >
                <Link to={"/enroll-course"}>
                  My Enrollment
                </Link>
              </li>
              {/* <div className="theme">
                <input
                  id="theme-toggle"
                  className="theme__toggle"
                  type="checkbox"
                  onChange={(e) => handleTheme(e.target.checked)}
                  defaultChecked={localStorage.getItem('theme') === "dark"}
                />
                <div className="theme__fill"></div>
                <div className="theme__icon">
                  <div className="theme__icon-part"></div>
                  <div className="theme__icon-part"></div>
                  <div className="theme__icon-part"></div>
                  <div className="theme__icon-part"></div>
                  <div className="theme__icon-part"></div>
                  <div className="theme__icon-part"></div>
                  <div className="theme__icon-part"></div>
                  <div className="theme__icon-part"></div>
                  <div className="theme__icon-part"></div>
                </div>
              </div> */}


              <input
                onChange={(e) => handleTheme(e.target.checked)}
                type="checkbox"
                defaultChecked={localStorage.getItem('theme') === "dark"}
                className="toggle" />


              <li>
                <button
                  onClick={signOutUser}
                  className="btn btn-xs text-left btn-primary mt-2 text-white"
                >
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to={"/auth/login"}
            className="flex items-center rounded-full outline p-2 md:px-8 text-sm md:text-xl text-primary hover:bg-primary hover:text-white transition-all duration-300" 
          >
            {" "}
            <IoLogIn /> Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
