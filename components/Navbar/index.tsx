import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex  items-center justify-between mx-auto">
        <button>
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
        </button>

        <div
          className="flex items-center justify-center w-full"
          id="navbar-default"
        >
          <h1 className="text-black font-bold">Profile</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
