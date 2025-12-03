import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthContext";
import Loading from "../pages/Loading";

const Navbar = () => {
  const { user, signout, loading } = useContext(AuthContext);

  const userIcon =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s";

  if (loading) {
    return (
      <div className="bg-white text-black py-4">
        <Loading />
      </div>
    );
  }

  const handleLogOut = () => {
    signout()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged Out",
          text: "You have successfully logged out!",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch((error) => console.log(error));
  };

  // -------------------------
  // NAVLINKS (5 Required Routes)
  // -------------------------
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold"
              : "hover:text-yellow-300"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/items"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold"
              : "hover:text-yellow-300"
          }
        >
          All Items
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold"
              : "hover:text-yellow-300"
          }
        >
          About Us
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold"
              : "hover:text-yellow-300"
          }
        >
          Contact
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/support"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold"
              : "hover:text-yellow-300"
          }
        >
          Support
        </NavLink>
      </li>

      {/* Show MyProfile only when logged in (NOT private route otherwise) */}
      {user && (
        <li>
          <NavLink
            to="/myProfile"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-bold"
                : "hover:text-yellow-300"
            }
          >
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-black text-white sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">

        {/* Mobile Menu */}
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-ghost text-white">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-900 rounded-box w-48"
          >
            {navLinks}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="text-yellow-400 text-2xl font-bold">
          Toys <span className="text-lime-300">Gallery</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">{navLinks}</ul>

        {/* User Section */}
        <div className="flex items-center gap-4">

          {/* Avatar */}
          {user ? (
            <div
              className="tooltip tooltip-bottom"
              data-tip={user.displayName || "User"}
            >
              <img
                className="w-10 h-10 rounded-full border-2 border-yellow-400"
                src={user.photoURL || userIcon}
                alt="User"
              />
            </div>
          ) : (
            <img
              className="w-10 h-10 rounded-full border-2 border-gray-400"
              src={userIcon}
              alt="Guest"
            />
          )}

          {/* Auth Buttons */}
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn bg-white text-black font-bold px-4"
            >
              Logout
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-primary px-5">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
