import { NavLink } from "react-router-dom";
import "animate.css";
import { MdRealEstateAgent } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const navlinks = (
    <>
      <li className="flex">
        {" "}
        <NavLink
          to="/"
          className={` 
          flex items-center px-4 rounded-none pt-4 uppercase text-base text-[#3a3a3a] duration-75 `}
        >
          Home
        </NavLink>
      </li>
      <li className="flex">
        {" "}
        <NavLink
          to="/contactus"
          className={` ${({ isActive }) => {
            console.log(isActive);
          }}flex items-center px-4 rounded-none duration-75 pt-4 uppercase text-base text-[#3a3a3a] `}
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  const buttonProfile = (
    <>
      {/* buttons and user profile */}
      <div className="items-center flex-shrink-0 hidden lg:flex mt-4">
        {/* <button className="self-center px-8 py-3 rounded">Sign in</button> */}
        <button className="self-center px-8 py-3 font-semibold rounded bg-[#71b100] text-white">
          Sign in
        </button>
      </div>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost  animate__animated animate__tada text-3xl font-bold text-[#71b100] bg-opacity-70 py-5 h-auto min-h-0  ">
            <MdRealEstateAgent></MdRealEstateAgent>
            Dream Estate
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">{buttonProfile}</div>
      </div>
    </div>
  );
};

export default Navbar;
