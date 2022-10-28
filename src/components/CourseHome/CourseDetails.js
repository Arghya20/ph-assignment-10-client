import React from "react";
import {
  FaCrown,
  FaFileDownload,
  FaRegStar,
  FaUserGraduate,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const CourseDetails = () => {
  const coursedetails = useLoaderData();
  const { id, title, dec, details, ratings, students, img } = coursedetails;

  return (
    <div className="m-2">
      <div
        className=" mx-auto mt-6 max-w-3xl p-6 rounded-md shadow-lg bg-gray-100 text-black mb-4 border border-gray-200  hover:border hover:border-gray-300"
        ref={ref}
      >
        <div className="flex justify-center mb-5">
          <Pdf targetRef={ref} filename="Course-Details.pdf">
            {({ toPdf }) => (
              <button
                onClick={toPdf}
                type="button"
                className="flex items-center gap-x-2 text-white px-8 py-3 font-semibold rounded-full bg-green-500 hover:bg-green-600 "
              >
                <span>Download Course Details</span>
                <FaFileDownload />
              </button>
            )}
          </Pdf>
        </div>

        <img className="rounded shadow-lg mx-auto" src={img} />

        <div className="mt-6 mb-2 text-center">
          <h2 className=" text-2xl font-bold tracking-wide">{title}</h2>
        </div>
        <p className="text-gray-700 mb-4 mt-6">
          <span className="font-bold text-black">Course Description : </span>{" "}
          {dec}
        </p>
        <p>
          {" "}
          <span className="font-bold text-black ">Course Details : </span>{" "}
          {details}
        </p>
        <div className="flex justify-between mt-8 text-gray-500 text-sm">
          <div className="flex items-center gap-x-2  ">
            enrolled students
            <FaUserGraduate /> <span>{students}</span>
          </div>
          <div className="flex items-center justify-end gap-x-2 ">
            ratings
            <FaRegStar /> <span>{ratings}</span>
          </div>
        </div>
        <div className="flex justify-center mt-6 mb-8">
          <Link to={`/premiumAccess/${id}`}>
            <button
              type="button"
              className="flex items-center gap-x-2  px-8 py-3 font-semibold rounded-full bg-yellow-500 hover:bg-yellow-600 shadow-lg border border-gray-400"
            >
              <span>Get Premium Access</span>
              <FaCrown />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
