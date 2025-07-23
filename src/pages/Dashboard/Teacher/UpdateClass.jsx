import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { imageUpload } from '../../../utils/utils';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const UpdateClass = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageFileName, setImageFileName] = useState('');
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: updateData } = useQuery({
    queryKey: ['updateData'],
    queryFn: async () => {
      const res = await axiosSecure(`/update-data-find/${id}`);
      return res.data;
    },
  });

  const title = updateData?.title;
  const price = updateData?.price;
  const description = updateData?.description;

  useEffect(() => {
    if (updateData?.image) {
      setImagePreview(updateData.image);
    }
  }, [updateData]);

  // uploaded image in ImgBB
  const handleImageUpload = async e => {
    e.preventDefault();
    const image = e.target.files[0];
    setImageFileName(image?.name || '');

    try {
      const imageURL = await imageUpload(image);
      setImagePreview(imageURL);
    } catch (error) {
      console.log('Upload failed:', error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    setUploading(true);

    try {
      const updatedClass = {
        title: data.title,
        name: user.displayName,
        teacherImage: user?.photoURL,
        email: user.email,
        price: parseFloat(data.price),
        description: data.description,
        image: imagePreview,
        status: 'pending',
        enrolled: 0,
      };
      // console.log(updatedClass);

      const res = await axiosSecure.put(`/update-class/${id}`, updatedClass);

      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text: 'Your class has been successfully updated.',
        });
        navigate('/dashboard/my-class');
      } else {
        Swal.fire({
          icon: 'info',
          title: 'No Changes',
          text: 'Nothing was updated.',
        });
      }
    } catch (err) {
      console.error('Update failed:', err);
      Swal.fire('Error', 'Something went wrong while updating!', 'error');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mt-4 md:mt-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-4xl  rounded-xl">
        <div className="text-center">
          <h2 className="font-quicksand text-2xl font-bold mb-3 text-center text-gray-800 dark:text-gray-200">
            Update Your Course
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label className="block text-gray-400 mb-1 text-sm">
                Class Title
              </label>
              <input
                defaultValue={title}
                type="text"
                {...register('title', { required: 'Title is required' })}
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-800 dark:text-white border-gray-300 text-black"
                placeholder="e.g. Fullstack BootCamp"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-400 mb-1 text-sm">
                Price ($)
              </label>
              <input
                type="number"
                step="0.01"
                defaultValue={price}
                {...register('price', { required: 'Price is required' })}
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-800 dark:text-white border-gray-300 text-black"
                placeholder="Enter your course price"
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.price.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-gray-400 mb-1 text-sm">
                Instructor Name
              </label>
              <input
                value={user?.displayName || ''}
                readOnly
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-800 dark:text-white border-gray-300 text-black"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-400 mb-1 text-sm">Email</label>
              <input
                value={user?.email || ''}
                readOnly
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-800 dark:text-white border-gray-300 text-black"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex-3/4">
            <label className="block text-gray-400 mb-1 text-sm">
              Description
            </label>
            <textarea
              defaultValue={description}
              rows={4}
              {...register('description', {
                required: 'Description is required',
              })}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-800 dark:text-white border-gray-300 text-black"
              placeholder="Write about this class..."
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="col-span-1">
              <label className="block text-gray-400 mb-1 text-sm">
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-800 dark:text-white border-gray-300 text-black flex-1"
              />
            </div>

            <div className="col-span-1 mx-auto border-black my-auto">
              {imagePreview && (
                <div>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className=" h-24 w-auto rounded shadow-2xl object-cover"
                    title="Uploaded Photo"
                  />
                  <p className=" text-gray-500 dark:text-gray-400 text-xs font-thin mt-1">
                    <span className="font-semibold">Name: </span>
                    {imageFileName}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Submit */}

          <button
            className=" py-2.5 w-full text-black bg-cyan-600 rounded-md disabled:cursor-not-allowed"
            disabled={!imagePreview}
          >{`${uploading ? 'Submitting...' : 'Update'}`}</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateClass;
