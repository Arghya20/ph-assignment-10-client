import React from "react";

const Faq = () => {
  return (
    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
      <h2 className="text-center my-5 text-xl font-bold">This is FAQ Page !</h2>
      <div className="space-y-4">
        <details className="w-full border rounded-lg">
          <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
          Which JavaScript library we used in this website ?
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
          This website is built on JavaScript library React .
{" "}
          </p>
        </details>
        <details className="w-full border rounded-lg">
          <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
          Which CSS framework we used on this webstie ?
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
          We have used Telwind as our CSS framework.{" "}
          </p>
        </details>
        <details className="w-full border rounded-lg">
          <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
          What is the authentication system we used on this Site ?
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
         In this website We used Google Firebase as Authenticate system .{" "}
          </p>
        </details>
        <details className="w-full border rounded-lg">
          <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
          What hosting service did we use to host this website ?
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
          We hosted our entire site on Google Firebase . {" "}
          </p>
        </details>
      </div>
    </div>
  );
};

export default Faq;
