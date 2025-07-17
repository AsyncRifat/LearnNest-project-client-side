import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../components/errorPage/ErrorPage';
import AuthLayout from '../layout/AuthLayout';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Home from '../pages/Home/Home';
import DashboardLayout from '../layout/DashboardLayout';
import Profile from '../pages/Dashboard/Profile/Profile';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import TeacherRequest from '../pages/Dashboard/Admin/TeacherRequest';
import Users from '../pages/Dashboard/Admin/Users';
import AllClassesAdmin from '../pages/Dashboard/Admin/AllClassesAdmin';
import AddClass from '../pages/Dashboard/Teacher/AddClass';
import MyClass from '../pages/Dashboard/Teacher/MyClass';
import MyEnrollClass from '../pages/Dashboard/Student/MyEnrollClass';
import AllClasses from '../pages/Classes/AllClasses';
import TeachOnPage from '../pages/ApplyTeacher/TeachOnPage';
import Forbidden from '../pages/Forbidden/Forbidden';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <MainLayout />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'all-approved-classes',
        Component: AllClasses,
      },
      {
        path: 'teacher-request',
        Component: TeachOnPage,
      },
      {
        path: 'forbidden',
        Component: Forbidden,
      },
    ],
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
    ],
  },

  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <p className="text-center text-2xl font-bold text-green-600">
            Welcome My Website
          </p>
        ),
      },
      // Admin panel
      {
        path: 'teacher-request',
        element: <TeacherRequest />,
      },
      {
        path: 'users-request',
        element: <Users />,
      },
      {
        path: 'all-classes-request',
        element: <AllClassesAdmin />,
      },
      // Teacher panel
      {
        path: 'add-class',
        element: <AddClass />,
      },
      {
        path: 'my-class',
        element: <MyClass />,
      },
      // student panel
      {
        path: 'my-enroll-class',
        element: <MyEnrollClass />,
      },
      // common
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);
