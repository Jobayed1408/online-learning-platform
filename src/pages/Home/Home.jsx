import React, { useEffect, useState } from 'react';
import PopularCourses from './PopularCourses';
import HeroSection from './HeroSection';
import { motion } from "framer-motion";
import { i } from 'framer-motion/client';
import axiosInstance from '../../components/axiosInstance';


const Home = () => {

    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        axiosInstance
            .get(`/users`)
            .then((res) => {
                setInstructors(res.data)
                // console.log(res.data); 

            })
            .catch((err) => console.error("Error fetching course:", err))
        // .finally(() => setLoading(false));
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


            


            <section className="py-12 ">
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
            </section>

        </div>
    );
};

export default Home;