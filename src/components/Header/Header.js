import React, { useContext, useState } from "react";
import { FaUserCircle, FaYenSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Header = () => {
  const { user,logOut  } = useContext(AuthContext);

  const handelLogout = () => {
    logOut()
    .then(() => {})
    .catch(error => console.log(error.massage))
  }

  const [isDark, setIsDark] = useState(false);
  const handelToggle = (event) => {
    setIsDark(event.target.checked);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-gray-100">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img
              className="w-12"
              src="https://sdmis.dsrvsindia.ac.in/new_layout/course_image.png"
              alt=""
            />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Scrate <span className="text-red-600">Learn</span>
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <span>Hello 👋</span>
              <span className="font-bold ml-2 bg-green-400 px-2 py-1 rounded-full">
                {user?.displayName}
              </span>
            </li>
            <li>
              <Link
                to="/coursehome"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Course
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                FAQ
              </Link>
            </li>

            <label
              for="Toggle1"
              className="inline-flex items-center cursor-pointer"
            >
              <span className="relative">
                <input
                  onClick={handelToggle}
                  id="Toggle1"
                  type="checkbox"
                  className="hidden peer"
                />
                <div className="w-10 h-6 rounded-full shadow-inner bg-white border border-gray-500 peer-checked:bg-gray-400"></div>
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
              </span>
              <span className="ml-1">{isDark ? "Dark" : "Light"}</span>
            </label>

            { user?.uid ? (
              <>
                <li>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-wrap gap-x-2 gap-y-2">
                      <div className="relative flex-shrink-0">
                        {user?.photoURL ? (
                          <img
                            src={user?.photoURL}
                            alt="user"
                            className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                          />
                        ) : (
                          <div className="text-4xl text-gray-500 -mr-"><FaUserCircle /> </div>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <button
                    onClick={logOut}
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide bg-black text-white transition duration-200 rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                <Link
                    to="/login"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide bg-black text-white transition duration-200 rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Log In
                  </Link>
                </li>
              </>
            )}


          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-50">
                <div className="p-5 bg-white border rounded shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img
                          className="w-12"
                          src="https://sdmis.dsrvsindia.ac.in/new_layout/course_image.png"
                          alt=""
                        />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Scrate <span className="text-red-600">Learn</span>
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/coursehome"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Course
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/faq"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          FAQ
                        </Link>
                      </li>

                      <label
                        for="Toggle2"
                        className="inline-flex items-center cursor-pointer"
                      >
                        <span className="relative">
                          <input
                            onClick={handelToggle}
                            id="Toggle2"
                            type="checkbox"
                            className="hidden peer"
                          />
                          <div className="w-10 h-6 rounded-full shadow-inner bg-white border border-gray-500 peer-checked:bg-gray-400"></div>
                          <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                        </span>
                        <span className="ml-1">
                          {isDark ? "Dark" : "Light"}
                        </span>
                      </label>

                      { user?.uid ? (
              <>
                <li>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-wrap gap-x-2 gap-y-2">
                      <div className="relative flex-shrink-0">
                        {user?.photoURL ? (
                          <img
                            src={user?.photoURL}
                            alt="user"
                            className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                          />
                        ) : (
                          <div className="text-4xl text-gray-500 -mr-3"><FaUserCircle /> </div>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <button
                    onClick={logOut}
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide bg-black text-white transition duration-200 rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                <Link
                    to="/login"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide bg-black text-white transition duration-200 rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Log In
                  </Link>
                </li>
              </>
            )}

                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
