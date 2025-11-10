import React from 'react';
import { Link } from 'react-router';

const Dashboard = () => {
    return (
        <div>
            <Link className='btn btn-primary' to={'/add-course'}>Add course</Link>
            <Link className='btn btn-primary' to={'/my-course'}>My course</Link>
            <Link className='btn btn-primary' to={'/enroll-course'}>MEnrolled course</Link>
        </div>
    );
};

export default Dashboard;