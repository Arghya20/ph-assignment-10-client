import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CourseHome = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gray-200">
        <div className="flex flex-col lg:flex-row gap-x-4">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5 bg-red-300">
            <p>Total Number of User - {user.length}</p>
            {user.map((usr) => (
              <Link
                to={`/course/${user.id}`}
                className="text-white bg-gray-600 p-3 m-4 rounded block"
              >
                {usr.name}
              </Link>
            ))}
          </div>

          <div className="lg:w-full bg-sky-400">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, soluta excepturi! Voluptates placeat dolor architecto
              asperiores accusamus. Fugit beatae aspernatur error, vitae dolor,
              laudantium eius ea nemo assumenda libero accusamus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHome;
