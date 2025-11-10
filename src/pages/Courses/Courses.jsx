import React, {  useEffect, useState } from "react";
import axiosInstance from "../../components/axiosInstance";
import { Link } from "react-router";
import Loader from "../../components/Loader";

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
console.log(courses);

  const fetchAllCourses = () => {
    setLoading(true);
    axiosInstance
      .get("/latest-courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.error("Error fetching courses:", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      fetchAllCourses();
      return;
    }

    setLoading(true);
    axiosInstance
      .get(`/search?text=${searchTerm}`)
      .then((res) => setCourses(res.data))
      .catch((err) => console.error("Error searching:", err))
      .finally(() => setLoading(false));
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold text-blue-600">
        <Loader />
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <form onSubmit={handleSearch} className="flex mb-8 gap-3 justify-center">
        <input
          type="text"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search courses..."
          className="border px-4 py-2 rounded-md w-1/2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div
              key={course._id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-xl font-bold mt-2">{course.title}</h3>
              <p className="text-gray-600">{course.category}</p>
              <p className="mt-1 font-semibold">${course.price}</p>
              <Link to={`/course-details/${course._id}`} className="btn btn-outline btn-primary rounded-full mt-3 ">Show Details</Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No courses found.</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
