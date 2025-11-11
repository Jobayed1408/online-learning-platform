import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Registration";
import PrivateRoute from "./PrivateRoute";
import AddCourse from "../AddCourse/AddCourse";
import Courses from "../pages/Courses/Courses";
import CourseDetails from "../pages/Courses/CourseDetails";
import UpdateCourse from "../pages/Courses/UpdateCourse";
import Dashboard from "../pages/Dashboard/Dashboard";
import Mycourses from "../MyCourses/Mycourses";
import EnrolledCourses from "../EnrolledCourses/EnrolledCourses";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/all-courses",
        element: <Courses />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/add-course",
        element: (
          <PrivateRoute>
            <AddCourse />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-course",
        element: (
          <PrivateRoute>
            <Mycourses />
          </PrivateRoute>
        ),
      },
      {
        path: "/enroll-course",
        element: (
          <PrivateRoute>
            <EnrolledCourses />
          </PrivateRoute>
        ),
      },
      {
        path: "/course-details/:id",
        element: (
          <PrivateRoute>
            <CourseDetails />
          </PrivateRoute>
        ),
      },

        {
        path: "/update-course/:id",
        element: (
          <PrivateRoute>
            <UpdateCourse />
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);
