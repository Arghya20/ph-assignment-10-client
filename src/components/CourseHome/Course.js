import React from "react";

const Course = ({ usr }) => {
  return (
    <div>
   <div className="max-w-xs p-6 rounded-md shadow-lg bg-gray-300 text-black max-h-80 mb-4">
	<img className="rounded shadow-lg" src={usr.img} />

	<div className="mt-6 mb-2">
		<h2 className=" text-xl font-bold tracking-wide">{usr.title}</h2>
	</div>
	<p className="text-gray-700">{usr.dec}</p>
</div>
    </div>
  );
};

export default Course;
