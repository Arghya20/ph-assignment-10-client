import React from "react";
import { FaRegStar, FaUserGraduate } from "react-icons/fa";

const Course = ({ usr }) => {
  return (
    <div>
      <div className="max-w-xs p-6 rounded-md shadow-lg bg-gray-100 text-black mb-4 border border-gray-200 hover:bg-gray-200 hover:border hover:border-gray-300">
        <img className="rounded shadow-lg" src={usr.img} />

        <div className="mt-6 mb-2">
          <h2 className=" text-xl font-bold tracking-wide">{usr.title}</h2>
        </div>
        <p className="text-gray-700">{usr.dec}</p>
        <div className="flex justify-between mt-4 text-gray-500 text-sm">
          <div className="flex items-center gap-x-2  ">
            <FaUserGraduate /> <span>{usr.students}</span>
          </div>
          <div className="flex items-center justify-end gap-x-2 ">
            <FaRegStar /> <span>{usr.ratings}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
