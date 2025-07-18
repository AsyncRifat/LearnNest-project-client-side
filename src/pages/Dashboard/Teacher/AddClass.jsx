import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Button from '../../shared/Button';
import { imageUpload } from '../../../utils/utils';

const AddClass = () => {
  const { user } = useAuth();
  // const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  // uploaded image in ImgBB
  const handleImageUpload = async e => {
    e.preventDefault();
    const image = e.target.files[0];

    try {
      const imageURL = await imageUpload(image);
      setImagePreview(imageURL);
    } catch (error) {
      console.log('Upload failed:', error);
    }
  };

  // form data without image
  const onSubmit = async data => {
    setUploading(true);
    try {
      const classData = {
        title: data.title,
        name: user.displayName,
        email: user.email,
        price: parseFloat(data.price),
        description: data.description,
        image: imagePreview,
        status: 'pending',
      };

      console.log(classData);

      // Send to your backend
      // await axios.post('https://your-backend.com/classes', classData);
      // reset();
      // setImagePreview(null);
      // navigate('/dashboard/my-classes');
    } catch (error) {
      console.error(error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mt-4 md:mt-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-4xl  rounded-xl">
        <div className="text-center">
          <h2 className="font-quicksand text-2xl font-bold mb-3 text-center text-gray-800 dark:text-gray-200">
            Create & Submit a New Course
          </h2>

          <p className="mb-12 text-gray-500 dark:text-gray-400 text-sm font-thin">
            Provide essential details about your class including title, pricing,
            and description. Upload a preview image and submit for admin review.
            Once approved, your class will be visible to students.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label className="block text-gray-400 mb-1 text-sm">
                Class Title
              </label>
              <input
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
                {...register('price', { required: 'Price is required' })}
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-800 dark:text-white border-gray-300 text-black"
                placeholder="99"
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
          <div>
            <label className="block text-gray-400 mb-1 text-sm">
              Description
            </label>
            <textarea
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

          {/* Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="col-span-1">
              <label className="block text-gray-400 mb-1 text-sm">
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                // {...register('image', { required: 'Image is required' })}
                onChange={handleImageUpload}
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-800 dark:text-white border-gray-300 text-black flex-1"
              />
            </div>

            <div className="col-span-1 mx-auto border-black my-auto">
              {imagePreview && (
                <div className="flex items-center text-black gap-x-7">
                  <p className=" text-gray-500 dark:text-gray-400 text-sm font-normal">
                    Uploaded Image:
                  </p>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className=" h-24 w-auto rounded shadow-2xl object-cover"
                    title="Uploaded Photo"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="">
            <Button
              type="submit"
              label={`${uploading ? 'Submitting...' : 'Add Class'}`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
