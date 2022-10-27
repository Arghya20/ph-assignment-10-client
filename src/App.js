import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Blog from "./components/Blog/Blog";
import Faq from "./components/FAQ/Faq";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import CourseHome from "./components/CourseHome/CourseHome";
import Home from "./Home/Home";
import Course from "./components/CourseHome/Course";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/coursehome",
          element: <CourseHome></CourseHome>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/faq",
          element: <Faq></Faq>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/course/:id",
          element: <Course></Course>,
        },
      ],
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
