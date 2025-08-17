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
import ClassDetails from '../pages/Classes/ClassDetails';
import MyClassDetails from '../pages/Dashboard/Teacher/MyClassDetails';
import MyEnrollClassDetails from '../pages/Dashboard/Student/MyEnrollClassDetails';
import UpdateClass from '../pages/Dashboard/Teacher/UpdateClass';
import AdminRoute from './AdminRoute/AdminRoute';
import TeacherRoute from './TeacherRoute/TeacherRoute';
import DashboardHome from '../pages/Dashboard/DashboardHome/DashboardHome';
import Service from '../pages/ServicePage/Service';
import Fee from '../pages/Fee/Fee';
import PieChartStats from '../components/pieChart/PieChartStats';

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
        path: 'service',
        Component: Service,
      },
      {
        path: 'fee',
        Component: Fee,
      },
      {
        path: 'classDetails/:id',
        element: (
          <PrivateRoute>
            <ClassDetails />
          </PrivateRoute>
        ),
      },
      {
        path: 'teacher-request',
        element: (
          <PrivateRoute>
            <TeachOnPage />
          </PrivateRoute>
        ),
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
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
      // Admin panel
      {
        path: 'stats',
        element: (
          <AdminRoute>
            <PieChartStats />
          </AdminRoute>
        ),
      },
      {
        path: 'teacher-request',
        element: (
          <AdminRoute>
            <TeacherRequest />
          </AdminRoute>
        ),
      },
      {
        path: 'users-request',
        element: (
          <AdminRoute>
            <Users />
          </AdminRoute>
        ),
      },
      {
        path: 'all-classes-request',
        element: (
          <AdminRoute>
            <AllClassesAdmin />
          </AdminRoute>
        ),
      },
      // Teacher panel
      {
        path: 'add-class',
        element: (
          <TeacherRoute>
            <AddClass />
          </TeacherRoute>
        ),
      },
      {
        path: 'my-class',
        element: (
          <TeacherRoute>
            <MyClass />
          </TeacherRoute>
        ),
      },
      {
        path: 'update-my-class/:id',
        element: (
          <TeacherRoute>
            <UpdateClass />
          </TeacherRoute>
        ),
      },
      {
        path: 'my-class/:id',
        element: (
          <TeacherRoute>
            <MyClassDetails />
          </TeacherRoute>
        ),
      },
      // student panel
      {
        path: 'my-enroll-class',
        element: <MyEnrollClass />,
      },
      {
        path: 'myEnroll-class/:id',
        element: <MyEnrollClassDetails />,
      },
      // common
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);
