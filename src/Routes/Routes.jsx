import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../components/errorPage/ErrorPage';
import AuthLayout from '../layout/AuthLayout';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Home from '../pages/Home/Home';

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
]);
