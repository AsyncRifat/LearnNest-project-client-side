import { Link, NavLink, useNavigate } from 'react-router';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import Theme from './theme/Theme';
import { CgMenuGridO } from 'react-icons/cg';
import LogoLN from '../pages/shared/LogoLN';
import useAuth from '../hooks/useAuth';
import avatarImg from '../assets/placeholder.jpg';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleUserSignOut = () => {
    logOut()
      .then(() => {
        navigate('/login');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const link = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-200 dark:bg-gray-700 rounded-lg py-1 px-2 md:ml-1 '
            : ' py-1 px-2 md:ml-1'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/all-approved-classes"
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-200 dark:bg-gray-700 rounded-lg py-1 px-2 md:ml-1 '
            : ' py-1 px-2 md:ml-1'
        }
      >
        All Classes
      </NavLink>
      <NavLink
        to="/teacher-request"
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-200 dark:bg-gray-700 rounded-lg py-1 px-2 md:ml-1 '
            : ' py-1 px-2 md:ml-1'
        }
      >
        Teach on
        <span className="font-bold font-quicksand text-base">LearnNest</span>
      </NavLink>

      {user ? (
        <div className="relative ml-4">
          <div className="flex flex-row items-center gap-3">
            {/* Dropdown btn */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className=" md:py-1 md:px-2 md:border-1 border-neutral-200 dark:border-gray-600 flex flex-row items-center gap-3 md:rounded-full cursor-pointer md:hover:shadow-lg transition "
            >
              <p className="md:hidden ml-15 font-semibold">Menu</p>

              <div className="hidden md:block">
                <AiOutlineMenu />
              </div>
              <div className="hidden md:block">
                {/* Avatar */}
                <img
                  className="rounded-full w-8 h-8 object-cover"
                  referrerPolicy="no-referrer"
                  src={user && user?.photoURL ? user?.photoURL : avatarImg}
                  alt="profile"
                  height="30"
                  width="30"
                />
              </div>
            </div>
            {isOpen && (
              <div className="absolute rounded-xl shadow-xl w-[40vw] md:w-[10vw] bg-gray-200 dark:bg-gray-300 overflow-hidden right-0 top-12 text-sm dark:text-black ">
                <div className="grid grid-cols-1 text-center  pt-2">
                  <p className="px-3 py-1.5 font-semibold flex items-center gap-2">
                    <FaUserCircle className="text-lg text-violet-600" />
                    {user?.displayName}
                  </p>
                  <hr className="text-gray-300" />

                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 px-3 py-2.5 active:bg-gray-400 hover:bg-gray-300"
                  >
                    <MdDashboard size={20} className="text-cyan-700" />
                    Dashboard
                  </Link>
                  <button
                    onClick={handleUserSignOut}
                    className="flex items-center gap-2 px-3 py-2.5 active:bg-gray-400 hover:bg-gray-300"
                  >
                    <RiLogoutBoxRLine size={20} className="text-red-500" />
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          <NavLink
            to="login"
            className={({ isActive }) =>
              isActive
                ? 'bg-gray-200 dark:bg-gray-700 rounded-lg py-1 px-2 md:ml-1 '
                : ' py-1 px-2 md:ml-1'
            }
          >
            Sign In
          </NavLink>
          <NavLink
            to="register"
            className={({ isActive }) =>
              isActive
                ? 'bg-gray-200 dark:bg-gray-700 rounded-lg py-1 px-2'
                : ' py-1 px-2'
            }
          >
            Sign Up
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <div className="sticky top-0 z-40 ">
      <div className="navbar relative z-10 bg-base-100 dark:bg-[#2C3A47] shadow-sm group md:h-[74px]">
        <div className="navbar-start ml-2">
          <LogoLN />
        </div>

        <div className="navbar-end lg:hidden mr-2.5 md:mr-5">
          <div className="mr-3 mt-1">
            <Theme />
          </div>
          <div className="dropdown dropdown-hover cursor-pointer">
            <div
              tabIndex={0}
              role="button"
              className="active:bg-gray-100 dark:active:bg-gray-800 active:rounded-full  lg:hidden "
            >
              <CgMenuGridO size={25} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-[200px] shadow absolute -right-1 md:-right-4 transition duration-1500 cursor-pointer text-center"
            >
              {link}
            </ul>
          </div>
        </div>
        <div className="navbar-end  hidden lg:flex menu menu-horizontal px-1 mr-10">
          {link}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
