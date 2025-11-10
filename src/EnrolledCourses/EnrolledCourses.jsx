import React from 'react';
import { useEffect, useState } from "react";
import axiosInstance from "../components/axiosInstance";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Loader from '../components/Loader';

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

  if(loading) return <Loader />
//   console.log(courses);
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {courses.length ?  (
        courses.map(course => (
          <div key={course._id} className="card p-4 border rounded-lg shadow-md">
            <img src={course.image} alt={course.title} className="rounded-lg h-40 w-full object-cover" />
            <h2 className="text-lg font-bold mt-2">{course.title}</h2>
            <p className="text-sm mt-1">{course.category}</p>
          </div>
        ))
      ) : (
        <p>No courses enrolled yet.</p>
      )}
    </div>
  );
};

export default EnrolledCourses;

