import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photourl = form.photourl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photourl, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setError("");
        handelUpdateUserProfile(name, photourl)
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handelUpdateUserProfile = (name, photourl) => {
    const profile = {
      displayName: name,
      photoURL: photourl,
    };
    updateUserProfile(profile);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl  border border-gray-400 mt-20 shadow-xl bg-gray-100">
        <p className="text-center text-red-800 bg-red-200 rounded-full">
          {error}
        </p>

        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form
          onSubmit={handelSubmit}
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
          data-bitwarden-watching="1"
        >
          <div className="space-y-1 text-sm">
            <label for="name" className="block ">
              Name
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md shadow  focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="photourl" className="block ">
              Photo Url
            </label>
            <input
              required
              type="text"
              name="photourl"
              id="photourl"
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md shadow  focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="Email" className="block ">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md shadow  focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md shadow focus:border-violet-400"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-full  bg-black text-white">
            Sign Up
          </button>
        </form>
        <p className="text-xs text-center sm:px-6 ">
          Already have an account?
          <Link
            rel="noopener noreferrer"
            to="/login"
            className="underline p-1 text-blue-800"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
