import React from 'react';
import { Link } from 'react-router';
import { PlusCircle, Edit3, BookOpen } from 'lucide-react';

const Dashboard = () => {
  const items = [
    {
      title: 'Add New Course',
      desc: 'Create and publish a new course for students.',
      icon: <PlusCircle className="w-12 h-12 text-blue-500" />,
      link: '/add-course',
      color: 'bg-blue-50 hover:bg-blue-100',
    },
    {
      title: 'My Courses',
      desc: 'View, edit, or manage your uploaded courses.',
      icon: <Edit3 className="w-12 h-12 text-green-500" />,
      link: '/my-course',
      color: 'bg-green-50 hover:bg-green-100',
    },
    {
      title: 'Enrolled Courses',
      desc: 'Check courses you have enrolled in and progress.',
      icon: <BookOpen className="w-15 h-15 text-purple-500" />,
      link: '/enroll-course',
      color: 'bg-purple-50 hover:bg-purple-100',
    },
  ];

  return (
    <div className="min-h-screen  py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-primary">
        🎓 Dashboard
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className={`${item.color} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center text-center`}
          >
            {item.icon}
            <h2 className="text-2xl text-primary font-semibold mt-4 mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
