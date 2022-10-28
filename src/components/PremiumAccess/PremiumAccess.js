import React from "react";
import { FaCrown, FaRegStar, FaUserGraduate } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const PremiumAccess = () => {
  const data = useLoaderData();
  const { title, img, dec, students, ratings } = data;
  return (
    <div className="m-2">
      <div className=" mx-auto mt-6 max-w-3xl p-6 rounded-md shadow-lg bg-sky-50 text-black mb-4 border border-gray-200  hover:border hover:border-gray-300 ">
        <img className="rounded shadow-lg mx-auto" src={img} />

        <div className="mt-6 mb-2 text-center">
          <h2 className=" text-2xl font-bold tracking-wide"><span className="text-lg mr-3 text-green-600">Congratulations, You got the premium access for - </span>{title}</h2>
        </div>
        <p className="text-gray-700 mb-4 mt-6">
          <span className="font-bold text-black">Course Description : </span>{" "}
          {dec}
        </p>
       

        <div className="flex justify-between mt-8 text-gray-500 text-sm">
          <div className="flex items-center gap-x-2  ">
            total students
            <FaUserGraduate /> <span>{students}</span>
          </div>
          <div className="flex items-center justify-end gap-x-2 ">
            ratings
            <FaRegStar /> <span>{ratings}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumAccess;
