import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" mt-8">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <span
              aria-label="Go Home"
              title="Logo"
              className="inline-block mb-5"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </span>
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
              24 hours of learning,
              <br className="hidden md:block" />
              networking and jobs{" "}
              <span className="inline-block text-deep-purple-accent-400">
                on the floor
              </span>
            </h5>
            <p className="mb-6 text-gray-900">
              Our goal is to make education and experiential skills affordable
              and accessible to everyone regardless of their disparate economic
              and educational backgrounds. We empower students to make demands
              unlike any other platform or institute because curiosity cannot be
              contained. Learning cannot be boxed in a book. So let’s step ahead
              and ‘build together’.
            </p>
            <hr className="mb-5 border-gray-300" />
            <div className="flex items-center space-x-4">
              <Link to="/coursehome">
                <button className=" px-12 py-3 bg-gray-800 rounded-full text-white hover:bg-gray-900">
                  Visite Courses
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
