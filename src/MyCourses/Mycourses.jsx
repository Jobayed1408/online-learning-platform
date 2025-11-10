import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axiosInstance from "../components/axiosInstance";
import { Link, useParams } from "react-router";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Mycourses = () => {
    
    const { user } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        axiosInstance
            .get(`/my-courses?email=${user.email}`)
            .then((res) => {
                console.log(res.data);
                if (res.data.success) setCourses(res.data.courses);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [user]);

    if (loading) return <p>Loading...</p>;

    const handleDelete =  (e, id) => {
        e.preventDefault()
        console.log(id);



        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosInstance.delete(`/course/${id}`);
                    setCourses(prev => prev.filter(course => course._id !== id));
                    if (res.data.success) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "This course has been deleted.",
                            icon: "success"
                        });
                    }
                  } catch (err) {
                    console.error(err);
                    Swal.fire("Error!", "Failed to delete course.", "error");
                  }
                
            }
        });
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.length === 0 ? (
                <p>No courses found</p>
            ) : (
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
                        <div className="flex justify-between items-center mt-4">
                            <Link to={`/course-details/${course._id}`} className="btn btn-outline btn-primary rounded-full ">Show Details</Link>
                            <Link to={`/update-course/${course._id}`} className=" btn-primary btn  rounded-full  hover:text-white-600 transition">
                                Update Course
                            </Link>
                            <Link onClick={(e) => handleDelete(e, course._id)} className="btn-outline btn-primary btn  rounded-full  hover:text-white-600 transition">
                                Delete Course
                            </Link>
                        </div>
                    </div>
                ))
            )
            }
        </div>
    );
};

export default Mycourses;
