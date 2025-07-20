import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import useAxios from '../hooks/useAxios';

export const imageUpload = async fromImage => {
  const formImageData = new FormData();
  formImageData.append('image', fromImage);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMBB_API_KEY}`,
    formImageData
  );

  return data?.data?.display_url;
};

export const useUserPostData = ({ endpoint, onSuccess, onError }) => {
  const axiosInstance = useAxios();

  return useMutation({
    mutationFn: async payload => {
      const result = await axiosInstance.post(endpoint, payload);
      return result.data;
    },
    onSuccess,
    onError,
  });
};
