import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Course from "./Course";

const CourseHome = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://server-site-jade.vercel.app/data")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="flex flex-col lg:flex-row gap-x-4">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5 ">
            {user.map((usr) => (
              <Link
                key={usr.id}
                to={`/coursedetails/${usr.id}`}
                usr={usr.id}
                className="border border-gray-300 hover:text-white hover:bg-sky-600  p-3 m-4 rounded-lg block shadow-lg"
              >
                {usr.title}
              </Link>
            ))}
          </div>

          <div className="lg:w-full bg-white grid grid-cols-1 md:grid-cols-3 mx-auto gap-3">
            {user.map((usr) => (
              <Link key={usr.id} to={`/coursedetails/${usr.id}`}>
                <Course usr={usr}></Course>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHome;
