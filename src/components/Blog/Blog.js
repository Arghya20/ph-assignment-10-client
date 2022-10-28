import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Blog
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold">Q1. What is cors ?</h3>
              <p className="mt-1 dark:text-gray-400">
                Ans: Cross-origin resource sharing (CORS) is a browser mechanism
                which enables controlled access to resources located outside of
                a given domain. It extends and adds flexibility to the
                same-origin policy (SOP). However, it also provides potential
                for cross-domain attacks, if a website's CORS policy is poorly
                configured and implemented. CORS is not a protection against
                cross-origin attacks such as cross-site request forgery (CSRF).
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Q2. Why are you using firebase? What other options do you have
                to implement authentication?
              </h3>
              <p className="mt-1 dark:text-gray-400">
                Ans: The Firebase Realtime Database lets you build rich,
                collaborative applications by allowing secure access to the
                database directly from client-side code. Data is persisted
                locally, and even while offline, realtime events continue to
                fire, giving the end user a responsive experience.
                <br />
                Firebase authentication supports authentication using a
                password, phone numbers, popular identity provider like Google,
                Facebook, and Twitter, etc.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Q3. How does the private route work ?
              </h3>
              <p className="mt-1 dark:text-gray-400">
                Ans: The react private route component renders child components
                (children) if the user is logged in. If not logged in the user
                is redirected to the /login page with the return url passed in
                the location state property.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Q4. What is Node? How does Node work?
              </h3>
              <p className="mt-1 dark:text-gray-400">
                Ans: Node.js is an open-source, cross-platform, back-end
                JavaScript runtime environment that runs on a JavaScript Engine
                and executes JavaScript code outside a web browser, which was
                designed to build scalable network applications.
                <br />
                <br />
                It is a used as backend service where javascript works on the
                server-side of the application. This way javascript is used on
                both frontend and backend. Node. js runs on chrome v8 engine
                which converts javascript code into machine code, it is highly
                scalable, lightweight, fast, and data-intensive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
