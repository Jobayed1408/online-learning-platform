import React, { useEffect, useState } from 'react';
import axiosInstance from '../../components/axiosInstance';

const PopularCourses = () => {

    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axiosInstance.get("/latest-courses")
            .then((res) => {
                setCourses(res.data);
                
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => setLoading(false));
    }, [])

    // console.log(courses);
    if (loading) return <p>Loading...</p>;


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {courses.map((course) => (
                <div key={course._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                    <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded" />
                    <h3 className="text-xl font-bold mt-2">{course.title}</h3>
                    <p className="text-gray-600">{course.category}</p>
                    <p className="mt-1 font-semibold">${course.price}</p>
                    {course.isFeatured && <span className="text-sm text-white bg-blue-500 px-2 py-1 rounded mt-2 inline-block">Featured</span>}
                </div>
            ))}
        </div>
    );
};

export default PopularCourses;