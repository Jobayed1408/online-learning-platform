import React from 'react';
import { useEffect, useState } from "react";
import axiosInstance from "../components/axiosInstance";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Loader from '../components/Loader';
import { Link } from 'react-router';

const EnrolledCourses = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!user) return;

    axiosInstance.get(`/enroll-courses?email=${user.email}`)
      .then(res => {
        setCourses(res.data.courses)
        // console.log(res.data);


      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [user]);

  if (loading) return <Loader />
  console.log(courses);


  return (
    <div className=" gap-6 p-6">
      <div className="">
        {courses.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table w-11/12 mx-auto">
              <thead>
                <tr>
                  <th>Course Information</th>
                  <th>Price</th>
                  <th>Featured</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(course => (
                  <tr key={course._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              className="object-cover"
                              src={course.image}
                              alt={course.title}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{course.title}</div>
                          <div className="text-sm opacity-50">{course.category}</div>
                        </div>
                      </div>
                    </td>
                    <td>{course.price}</td>
                    <td>{course.featured ? 'Featured' : 'Not Featured'}</td>
                    <td>
                      <div className="flex gap-3">
                        {/* <Link className="btn btn-sm btn-primary" to={'/my-course'}>My Course</Link> */}
                        <Link className="btn btn-sm btn-primary" to={`/course-details/${course._id}`}>Details</Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500 py-6">No courses enrolled yet.</p>
        )}

      </div>
    </div>
  );
};

export default EnrolledCourses;

