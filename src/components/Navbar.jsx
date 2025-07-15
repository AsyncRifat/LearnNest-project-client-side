import { Link, NavLink } from 'react-router';
import { RiMenuFold2Line } from 'react-icons/ri';
import Theme from './theme/Theme';
import { CgMenuRound } from 'react-icons/cg';
import LogoLN from '../pages/shared/LogoLN';

const Navbar = () => {
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
        to="/b"
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-200 dark:bg-gray-700 rounded-lg py-1 px-2 md:ml-1 '
            : ' py-1 px-2 md:ml-1'
        }
      >
        All Classes
      </NavLink>
      <NavLink
        to="/c"
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-200 dark:bg-gray-700 rounded-lg py-1 px-2 md:ml-1 '
            : ' py-1 px-2 md:ml-1'
        }
      >
        Teach on{' '}
        <span className="font-bold font-quicksand text-base">LearnNest</span>
      </NavLink>

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

      <Link className="px-3 py-1.5 rounded-md bg-yellow-400 dark:bg-yellow-600">
        Log Out
      </Link>
    </>
  );
  return (
    <div className="sticky top-0 z-40">
      <div className="navbar relative z-10 bg-base-100 shadow-sm group">
        <div className="navbar-start">
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
              <CgMenuRound size={25} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-fit shadow absolute -right-1 md:-right-4 transition duration-1500 cursor-pointer"
            >
              {link}
            </ul>
          </div>
        </div>
        <div className="navbar-end  hidden lg:flex menu menu-horizontal px-1 mr-5">
          {link}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
