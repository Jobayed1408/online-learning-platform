import { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import axiosInstance from "../components/axiosInstance";

const AddCourse = () => {
    const { user } = use(AuthContext)
    console.log(user);
    
    const [featured, setFeatured] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault()

        const formData = {
            title: e.target.name.value,
            category: e.target.category.value,
            description: e.target.description.value,
            image: e.target.thumbnail.value,
            price: e.target.price.value,
            featured: featured,
            created_at: new Date(),
            downloads: 0,
            created_by: user.email
        }
        // console.log(formData);
        try {
            const res = await axiosInstance.post("/courses", formData);
            if (res.data.success) {
              toast.success("Course added successfully!");
            //   e.target.reset();     // reset form fields
              setFeatured(false);   
            }
          } catch (err) {
            console.error(err);
            toast.error("Failed to add course.");
          }


    }

    //  title, image URL, price, duration, category, and description , isFeatured
    return (
        <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
            <div className="card-body p-6 relative">
                <h2 className="text-2xl font-bold text-center mb-6">Add New Course</h2>
                {/* <form className="space-y-4"> */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Instructor's Name */}
                    <div>
                        <label className="label font-medium">Instructor's Name</label>
                        <input
                            type="text"
                            defaultValue={user.displayName} 
                            required
                            readOnly
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            
                        />
                    </div>

                    {/* Instructor's Email */}
                    <div>
                        <label className="label font-medium">Instructor's Email</label>
                        <input
                            type="text"
                            defaultValue={user.email}
                            required
                            readOnly
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                        />
                    </div>


                    {/* Instructor's Image */}
                    <div>
                        <label className="label font-medium">Instructor's Image</label>
                        <input
                            defaultValue={user.photoURL}
                            required
                            readOnly
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                        />
                    </div>


                    {/* Name Field */}
                    <div>
                        <label className="label font-medium">Course Title</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Enter name"
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div>
                        <label className="label font-medium">Category</label>
                        <select
                            defaultValue={""}
                            name="category"
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
                            required
                            rows="3"
                            className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
                            placeholder="Enter description"
                        ></textarea>
                    </div>

                    {/* Thumbnail URL */}
                    <div>
                        <label className="label font-medium">Course Banner</label>
                        <input
                            type="url"
                            name="thumbnail"
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
                        Add Course
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCourse;
