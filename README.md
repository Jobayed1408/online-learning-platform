# SkillHub - Learn Smarter, Grow Faster

**Live Site:** [(https://skill-hub-clients-0.netlify.app/)]  

SkillHub is a full-stack online learning platform where users can explore, enroll in, and manage courses while instructors can create and manage their own courses. The platform focuses on smooth interaction, intuitive UI, and efficient data management.

---

## Features

- **User Authentication**: Users can register and log in using Email/Password or Google Authentication. Passwords are validated for security.  
- **Course Management (CRUD)**: Instructors can create, update, view, and delete courses. All courses are stored in MongoDB, and images are uploaded via imgbb.  
- **Enrollment**: Students can enroll in courses, view enrolled courses, and get notifications upon successful enrollment.  
- **Home Page Animations**: Hero banner, popular courses, top instructors, and other sections include interactive animations using Framer Motion and AOS.  
- **Advanced Filtering**: Users can filter courses by category, featured courses, and more.  
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop using Tailwind CSS.  
- **Theme Toggle**: Users can switch between Dark and Light themes.  
- **Dynamic Notifications**: Toast messages notify users of successful or failed actions.  
- **Private Routes & Dashboard**: Authenticated users have access to a personalized dashboard with My Courses, Add Course, My Enrolled Courses, etc.  
- **Loading & 404 Page**: Custom loading spinners while fetching data and a custom 404 page for invalid routes.  

---

## Project Structure

**Client Side**: React + Tailwind CSS + Framer Motion + Axios  
**Server Side**: Node.js + Express + MongoDB + Firebase Authentication  

**Key Pages**:
- Home
- All Courses
- View Course Details
- Add Course
- My Courses
- My Enrolled Courses
- Login / Register
- protected router for unauthorized user

---

<!-- ## Installation

1. Clone the repositories:  
   ```bash
   git clone [client-repo-url]
   git clone [server-repo-url] -->
