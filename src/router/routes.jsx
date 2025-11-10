import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
// import AllModels from "../Pages/AllModels/AllModels";
// import Profile from "../Pages/Profile/Profile";
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
// import AddModel from "../Pages/AddModel/AddModel";
// import ModelDetails from "../Pages/ModelDetails/ModelDetails";
// import UpdateModel from "../Pages/UpdateModel/UpdateModel";
// import MyModels from "../Pages/MyModels/MyModels";
// import MyDownloads from "../Pages/MyDownloads/MyDownloads";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
        // loader: () => fetch('http://localhost:3000/latest-models')
      },
      {
        path: "/all-courses",
        element: <Courses />,
        // loader: () => fetch('http://localhost:3000/models')
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    //   {
    //     path: "/profile",
    //     element: (
    //       <PrivateRoute>
    //         <Profile />
    //       </PrivateRoute>
    //     ),
    //   },
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

    //    {
    //     path: "/my-models",
    //     element: (
    //       <PrivateRoute>
    //         <MyModels />
    //       </PrivateRoute>
    //     ),
    //   },

    //    {
    //     path: "/my-downloads",
    //     element: (
    //       <PrivateRoute>
    //         <MyDownloads />
    //       </PrivateRoute>
    //     ),
    //   },

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
