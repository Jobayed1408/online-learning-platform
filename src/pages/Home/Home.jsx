import React, { useEffect, useState } from 'react';
import PopularCourses from './PopularCourses';
import HeroSection from './HeroSection';
import { motion } from "framer-motion";
import axiosInstance from '../../components/axiosInstance';
import Loader from '../../components/Loader';
import WhyChooseUs from './WhyChooseUs';


const Home = () => {

    const [instructors, setInstructors] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axiosInstance
            .get(`/users`)
            .then((res) => {
                setInstructors(res.data)
                // console.log(res.data); 

            })
            .catch((err) => console.error("Error fetching course:", err))
            .finally(() => setLoading(false));
    }, [instructors])
    // console.log('users', users); 

    if (loading) return <Loader />

    return (
        <div>

            <HeroSection></HeroSection>
            <section className="py-12 ">
                <div className="container mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl mb-8 font-bold "
                    >
                        Popular Courses
                    </motion.h2>
                    <PopularCourses></PopularCourses>
                </div>
            </section>


            <section className="py-16 ">
                <div className="max-w-6xl mx-auto text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }} 
                        className="text-3xl font-bold "
                    >
                        Top Instructors
                    </motion.h2>
                    <p className="mt-2">
                        Learn from the industry's best mentors with years of experience.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {instructors.slice(0, 4).map((ins, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className=" p-6 rounded-xl border border-blue-600 mx-5 shadow hover:shadow-lg transition flex flex-col items-center"
                        >
                            <motion.img
                                        src={ins.photo}
                                        alt={ins.name}
                                        className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-blue-500"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.1 }}
                                      />
                            <img
                                
                            />
                            <h3 className="text-xl font-semibold ">
                                {ins.name}
                            </h3>
                            <p className=" mt-1">Popular</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section>
                <WhyChooseUs />
            </section>




        </div>
    );
};

export default Home;