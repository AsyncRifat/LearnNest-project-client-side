import axios from 'axios';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { user, logOut } = useAuth();
  const token = user?.accessToken;
  const navigate = useNavigate();

  // Add a request interceptor
  axiosSecure.interceptors.request.use(
    config => {
      config.headers.authorization = `Bearer ${token}`;

      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosSecure.interceptors.response.use(response => {
    return response;
  });
  error => {
    if (error.status === 403) {
      navigate('/forbidden');
    } else if (error.status === 401) {
      logOut()
        .then(() => {
          console.log(`sign out user for ${error.status} status code`);
        })
        .catch(err => {
          console.log(err);
        });
    }
    return Promise.reject(error);
  };

  return axiosSecure;
};

export default useAxiosSecure;
