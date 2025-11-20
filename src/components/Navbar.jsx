import React, { useContext } from "react";
import { Link, NavLink } from "react-router";

import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";
import Loading from '../pages/Loading'

const Navbar = () => {
  const { user, signout,loading } = useContext(AuthContext);
  const userIcon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s"

  if (loading) {
    
    return (
      <div className="bg-white text-black py-4">
       <Loading></Loading>
      </div>
    );
  }

  const handleLogOut = () => {


 

    signout()
      .then(() => {
         Swal.fire({
        icon: 'success',
        title: 'Logged Out',
        text: 'You have successfully logged out!',
        timer: 2000,
        showConfirmButton: false,
      });

      })
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold border-b-2 border-yellow-400"
              : "text-white font-bold hover:text-yellow-400"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold border-b-2 border-yellow-400"
              : "text-white font-bold hover:text-yellow-400"
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myProfile"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold border-b-2 border-yellow-400"
              : "text-white font-bold hover:text-yellow-400"
          }
        >
          My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">

        {/* Mobile dropdown */}
        <div className="dropdown md:hidden relative">
          <label tabIndex={0} className="btn btn-ghost text-white">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-900 rounded-box w-44 left-0 top-full"
          >
            {navLinks}
          </ul>
        </div>
        {/* Logo */}
        <div>
          <h1 className="text-yellow-400 text-2xl md:text-3xl font-bold">
            Toys <span className="text-lime-200">Gallary</span>
          </h1>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6">{navLinks}</ul>

        

        {/* User section */}
        <div className="flex items-center gap-4">
          {user ? (
            <div
              className="tooltip tooltip-bottom"
              data-tip={user.displayName || "User"}
            >
              <img
                className="w-10 md:w-12 rounded-full border-2 border-yellow-400"
                src={user.photoURL || userIcon }
                alt="User"
              />
            </div>
          ) : (
            <img
              className="w-10 md:w-12 rounded-full border-2 border-gray-400"
              src={userIcon}
              alt="Guest"
            />
          )}

          {user ? (
            <button
              onClick={handleLogOut}
              className="btn bg-white text-xl font-extrabold text-black px-4 md:px-8"
            >
              LogOut
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-primary px-4 md:px-8">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
