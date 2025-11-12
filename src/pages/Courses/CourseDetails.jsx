// import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import axiosInstance from "../../components/axiosInstance";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";
import { IoConstruct } from "react-icons/io5";

const CourseDetails = () => {
    const { user } = use(AuthContext)
    
    console.log(user.email);
    

    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    

    useEffect(() => {
        axiosInstance
            .get(`/courses/${id}`)
            .then((res) => {
                if (res.data.success) setCourse(res.data.result);
            })
            .catch((err) => toast.error("Error fetching course:", err))
            .finally(() => setLoading(false));
    }, [id]);

    const enrollCourse = async(e, userEmail, courseId) => {
        // console.log('id ',courseId)
        e.preventDefault()
        try {
            const res = await axiosInstance.post("/enroll", { userEmail, courseId });
            if (res.data.success) {
                toast.success("Thanks for enrollment")
            } else {
                toast.error(res.data.message);
            }
          } catch (error) {
            console.error(error.message);
            toast.error("Maybe you are not owner of ths course...");
          }
    }
    const toastShow = e => {
        e.preventDefault()

        toast.error("Update allows only for course owner")
    }
    // console.log( user);

    if (loading) return <Loader />

    if (!course) return <p>Course not found.</p>;

    return (
        <div className="max-w-7xl mx-auto  md:p-6 rounded-2xl shadow-xl">
            <div className=" from-purple-500 to-pink-500 rounded-3xl p-3 md:p-8 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 flex flex-col justify-center md:items-start items-center">
                    <h1 className="text-2xl text-center md:text-left md:text-4xl font-bold mb-4">{course.title}</h1>
                    <p className="text-lg text-center md:text-left mb-4">{course.category}</p>
                    <p className="mb-6 text-center md:text-left line-clamp-3">{course.description}</p>
                    <div className="flex gap-2">
                        <button onClick={(e) => { enrollCourse(e, user.email,course._id ) }} className="btn-primary btn text-white-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 hover:text-primary transition">
                            Enroll Now
                        </button>
                        {
                            course?.created_by === user?.email && (

                                <Link to={`/update-course/${course._id}`}
                                className='btn-outline btn-primary btn px-6 py-2 rounded-full  hover:text-white-600 transition'>
                                    Update Course 
                                </Link>
                             )}
                             {course?.created_by !== user?.email && ( 
                                <Link onClick={(e)=> toastShow(e,user.email, course._id)}
                                className='opacity-50  btn-outline btn-primary btn px-6 py-2 rounded-full '>
                                    Update Course 
                                </Link>
                             )}
                    </div>
                </div>
                <div className="flex-1">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="rounded-2xl shadow-lg w-full object-cover"
                    />
                </div>
            </div>

            {/* Course Info Section */}
            <div className="mt-10 grid md:grid-cols-2 gap-8">
                <div className=" p-2 md:p-6 flex flex-col justify-center md:justify-left items-center md:items-start rounded-2xl md:shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Course Details</h2>
                    <p><span className="font-semibold">Price:</span> ${course.price}</p>
                    <p><span className="font-semibold">Category:</span> {course.category}</p>
                    {/* <p><span className="font-semibold">Downloads:</span> {course.downloads}</p> */}
                    {course.featured && (
                        <p className="mt-2 text-primary-500 font-semibold">🌟 Featured Course</p>
                    )}
                </div>

                <div className=" p-6 rounded-2xl md:shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-center">About Instructor</h2>
                    <div className="flex flex-col justify-center items-center gap-4">
                        <img
                            src={user.photoURL}
                            alt="Instructor"
                            className="w-25 h-25 border border-primary rounded-full object-cover transition duration-300 hover:scale-105"
                        />
                        <div className="flex flex-col items-center">
                            <p className="font-semibold text-xl">{user.displayName}</p>
                            <div className="flex gap-3 text-sm bg-blue-500 px-3 py-1 rounded-2xl justify-center items-center">
                            <span><IoConstruct /></span>
                            <p className=" text-black"> Instructor</p>
                            </div>
                        </div>
                    </div>
                    <p className="mt-4  line-clamp-4">
                        This course is carefully crafted to provide all the knowledge you need
                        to excel. Join and start learning today!
                    </p>
                </div>
            </div>

            {/* Course Description Section */}
            <div className="mt-10  p-6 rounded-2xl md:shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Course Description</h2>
                <p className="">{course.description}</p>
            </div>
        </div>
    );
};
// }

export default CourseDetails;