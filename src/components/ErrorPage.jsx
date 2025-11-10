import React from "react";
import { Link, useRouteError } from "react-router";
import errimage from '../assets/errorimage.png'

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
     
      <img
        src={errimage} 
        alt="Error Illustration"
        className="h-5/12 "
      />

      <h1 className="text-4xl font-bold text-red-600 mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        {error?.statusText || "The page you're looking for doesn't exist or has been moved."}
      </p>

      <Link
        to="/"
        className="bg-primary text-accent font-bold rounded-full px-6 py-4 border-2 hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
