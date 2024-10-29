import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#0b0121] font-Rajdhani font-semibold">
      <div className="navbar  container mx-auto text-white">
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
              className="menu menu-sm dropdown-content text-black font-semibold bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Download the app</a>
              </li>
              <li>
                <a>Talk to an expert</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-[20px] lg:text-[25px]">X-Flow</a>
        </div>

        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 hidden  md:flex items-center text-[16px] gap-6 text-[#ececec]">
            <li>Features</li>
            <li>Pricing</li>
            <li>About us</li>

            <button className="border-[1px] px-4 py-2 bg-white text-black rounded-full">
              Download the app
            </button>

            <button className="border-[1px] px-6 py-2 rounded-full">
              Talk to an expert
            </button>
          </ul>
          <button className="md:hidden flex border-[1px] lg:px-6 px-4 py-1 lg:py-2 bg-white text-black rounded-full">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
