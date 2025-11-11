import React, { useEffect, useState } from 'react';
import axiosInstance from '../../components/axiosInstance';
import Loader from '../../components/Loader';
import { motion } from "framer-motion";

const PopularCourses = () => {

  const [courses, setCourses] = useState([]);
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
  }, []);

  if (loading) return <Loader />;

  // ✨ Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1, ease: "easeOut" }, 
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-3 gap-6 md:p-6"
    >
      {courses.slice(0, 6).map((course) => (
        <motion.div
          key={course._id}
          variants={cardVariants}
          whileHover={{ scale: 1.03, y: -5 }}
          className=" border border-blue-600 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center"
        >
          <motion.img
            src={course.image}
            alt={course.title}
            className="w-full h-40 object-cover rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
          />
          <h3 className="text-xl font-bold mt-3  text-center">{course.title}</h3>
          <p className="text-gray-500">{course.category}</p>
          <p className="mt-1 font-semibold text-blue-600">${course.price}</p>
          
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PopularCourses;
