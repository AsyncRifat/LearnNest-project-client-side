import { useState } from 'react';
import { GrLogout } from 'react-icons/gr';
import { AiOutlineBars } from 'react-icons/ai';
import LogoLN from '../../shared/LogoLN';
import AdminMenu from '../Menu/AdminMenu';
import TeacherMenu from '../Menu/TeacherMenu';
import StudentMenu from '../Menu/StudentMenu';
import { FaUser } from 'react-icons/fa';
import MenuItem from '../Menu/MenuItem';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router';
const Sidebar = () => {
  const [isActive, setActive] = useState(false);

  const { logOut } = useAuth();
  // console.log(user);
  const navigate = useNavigate();

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  // handle log out
  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate('/login');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden ">
        <div>
          <div className="block cursor-pointer p-4 font-bold relative z-40 md:z-0">
            <LogoLN />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 dark:bg-gray-700 text-black md:w-64 w-52 sm:w-60 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform  md:translate-x-0  transition duration-700 ease-in-out ${
          isActive ? 'translate-x-0' : '-translate-x-full'
        } `}
      >
        <div className="relative">
          <div className="sticky -top-4 z-20 w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-cyan-200 dark:bg-green-700 mx-auto">
            <LogoLN />
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6 dark:text-white">
            <nav>
              {/*  Menu Items */}
              <AdminMenu />
              <TeacherMenu />
              <StudentMenu />
            </nav>
          </div>
        </div>

        <div>
          <hr className="text-gray-400 dark:text-gray-400" />
          <MenuItem
            icon={FaUser}
            label="Profile"
            address="/dashboard/profile"
          />

          <button
            onClick={handleLogout}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 dark:text-gray-100 hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
