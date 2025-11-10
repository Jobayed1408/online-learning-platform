import React, { useEffect, useState } from 'react';
import PopularCourses from './PopularCourses';
import HeroSection from './HeroSection';
import { motion } from "framer-motion";
import { i } from 'framer-motion/client';
import axiosInstance from '../../components/axiosInstance';


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


    return (
        <div>

            <HeroSection></HeroSection>
            <section className="py-12 ">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 ">Popular Courses</h2>
                    {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"> */}
                    <PopularCourses></PopularCourses>
                </div>
            </section>


            <section className="py-16 ">
                <div className="max-w-6xl mx-auto text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold "
                    >
                        Top Instructors
                    </motion.h2>
                    <p className="mt-2">
                        Learn from the industry's best mentors with years of experience.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {instructors.slice(0,4).map((ins, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className=" p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
                    >
                        <img
                            src={ins.photo}
                            alt={ins.name}
                            className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-blue-500"
                        />
                        <h3 className="text-xl font-semibold ">
                            {ins.name}
                        </h3>
                        {/* <p className="text-blue-600 dark:text-blue-400 mt-1"></p> */}
                        <p className="text-blue-600 dark:text-blue-400 mt-1">Popular</p>
                    </motion.div>
                     ))} 
                </div>
            </section>


            {/* <section className="py-12 ">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 ">Top Instructors</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {instructors.map(inst => (
                            <div key={inst.id} className=" rounded-2xl shadow hover:shadow-lg transition">
                                <img src={inst.photo} alt={inst.name} className="rounded-full text-2xl h-40  object-cover" />
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg ">{inst.name}</h3>
                                    <p className="text-sm ">{inst.expertise}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

        </div>
    );
};

export default Home;