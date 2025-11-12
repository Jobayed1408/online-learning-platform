import { Link } from 'react-router';
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  BookAIcon
} from 'lucide-react';
import { LuRotate3D } from 'react-icons/lu';
import { BsTwitterX } from 'react-icons/bs';


const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-linear-to-r from-gray-700 to-gray-900 py-8 px-4 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl ">
        <div >
          <div className="flex items-center space-x-2 text-xl font-bold text-primary ">
            <BookAIcon size={25} /> Skill-HUB

            {/* <span className="text-xl ">Online Learning Platform</span> */}
          </div>
          <ul className="space-y-2 mt-4 text text-gray-200 ">
            <li><Link to="/all-courses" className=" hover:text-blue-600">All course</Link></li>
            <li><Link to="/add-course" className=" hover:text-blue-600">Add course</Link></li>
            <li><Link  className=" hover:text-blue-600">Profile</Link></li>
            <li><Link to="/auth/login" className=" hover:text-blue-600">Login</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-200">Resources</h3>
          <ul className="space-y-2 text-gray-200">
            <li><Link to="/" className=" hover:text-blue-600">Learning Blog</Link></li>
            <li><Link to="/" className=" hover:text-blue-600">Guides</Link></li>   
            <li><Link to="/" className=" hover:text-blue-600">Poly Tips</Link></li>
            <li><Link to="/" className=" hover:text-blue-600">Resources</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-200">Community</h3>
          <ul className="space-y-2 text-gray-200">
            <li><Link to="/" className=" hover:text-blue-600">Discussion Forums</Link></li>
            <li><Link to="/" className=" hover:text-blue-600">Study Groups</Link></li>
            <li><Link to="/" className=" hover:text-blue-600">Events & Workshops</Link></li>
            <li><Link to="/" className=" hover:text-blue-600">Leaderboard</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-200">Connect With Us</h3>
          <div className="flex space-x-4 mb-4 text-gray-200">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-700">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-400">
              <BsTwitterX size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className=" hover:text-pink-600">
              <Instagram size={24} />
            </a>

          </div>
          <div>
            <a
              href="mailto:support@elearn.com"
              className="flex items-center text-gray-200 hover:text-blue-600"
            >
              <Mail size={18} className="mr-2" /> support@elearn.com
            </a>
          </div>
        </div>
      </div>


      <div className="border-t lg:mb-0 md:mb-0 mb-20 border-blue-700 mt-8 pt-4 text-center">
        <p className="text-sm text-gray-200">
          © {currentYear} E-learning platform. All Rights Reserved.
          <span className="ml-4">
            <Link to="/" className="hover:text-blue-600 mr-3">Privacy Policy</Link>
            <Link to="/" className="hover:text-blue-600">Terms of Service</Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;