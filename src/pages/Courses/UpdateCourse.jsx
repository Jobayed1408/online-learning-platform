import React, { use, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthContext';
import axiosInstance from '../../components/axiosInstance';
import { useNavigate, useParams } from 'react-router';

const UpdateCourse = () => {

    const { id } = useParams();
    console.log(id);

    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [featured, setFeatured] = useState()
    const { user } = use(AuthContext)
    const navigate = useNavigate()
    console.log(user.email);
    console.log(course);

    useEffect(() => {
        axiosInstance
            .get(`/courses/${id}`)
            .then((res) => {
                setCourse(res.data.result)
                // console.log(res.data.result);

            })
            .catch((err) => console.error("Error fetching course:", err))
            .finally(() => setLoading(false));
    }, [id]);


    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = {
            title: e.target.title.value,
            category: e.target.category.value,
            description: e.target.description.value,
            image: e.target.thumbnail.value,
            price: e.target.price.value,
            isFeatured: e.target.isFeatured.checked,
            email: user?.email,
        }
        // console.log(formData);
        try {
            const res = await axiosInstance.put(`/update-course/${id}`, formData);

            if (res.data.success) {
                toast.success("Course updated successfully!");
                navigate("/");
            } else {
                toast.error(res.data.message || "Failed to update course!");
            }
        } catch (err) {
            console.error("Update error:", err);
            toast.error("Failed to update course.");
        }

    }
    // console.log(course);

    if (loading) return <p>Loading course data...</p>
    // if (!course) return <p>Course not found!</p>
    // console.log(course);

    return (
        <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
            <div className="card-body p-6 relative">
                <h2 className="text-2xl font-bold text-center mb-6">Update Course</h2>
                {/* <form className="space-y-4"> */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label className="label font-medium">Title</label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={course.title}
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Enter name"
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div>
                        <label className="label font-medium">Category</label>
                        <select
                            name="category"
                            defaultValue={course.category}
                            required
                            className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                        >
                            <option value="" disabled>
                                Select category
                            </option>
                            <option value="Web Development">Web Development</option>
                            <option value="App Development">App Development</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Photography">Photography</option>
                            <option value="Personal Development">Personal Development</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Description Textarea */}
                    <div>
                        <label className="label font-medium">Description</label>
                        <textarea
                            name="description"
                            defaultValue={course.description}
                            required
                            rows="3"
                            className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
                            placeholder="Enter description"
                        ></textarea>
                    </div>

                    {/* Thumbnail URL */}
                    <div>
                        <label className="label font-medium">Image URL</label>
                        <input
                            type="url"
                            name="thumbnail"
                            defaultValue={course.image}
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="label font-medium">Price</label>
                        <input
                            type="text"
                            name="price"
                            defaultValue={course.price}
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Enter price"
                        />

                    </div>

                    {/* Is featured */}

                    <div className="flex items-center gap-2">
                        <label htmlFor="isFeatured" className="text-sm font-medium">
                            Mark as Featured Course
                        </label>
                        <input
                            type="checkbox"
                            defaultValue={course.isFeatured}
                            checked={featured}
                            name="isFeatured"
                            onChange={(e) => setFeatured(e.target.checked)}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
                    >
                        Update Course
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCourse;