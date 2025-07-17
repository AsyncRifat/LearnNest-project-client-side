import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

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

  const imgbbAPI = 'YOUR_IMGBB_API_KEY'; // 🔁 Replace this

  const onSubmit = async data => {
    setUploading(true);
    return console.log(data);
    try {
      // Upload image to imgbb
      const formData = new FormData();
      formData.append('image', data.image[0]);

      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbAPI}`,
        formData
      );

      const imageUrl = res.data.data.display_url;

      const classData = {
        title: data.title,
        name: user.displayName,
        email: user.email,
        price: parseFloat(data.price),
        description: data.description,
        image: imageUrl,
        status: 'pending',
      };

      // ✅ Send to your backend
      // await axios.post('https://your-backend.com/classes', classData);

      // reset();
      // setImagePreview(null);
      // navigate('/dashboard/my-classes');
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
        <h2 className="font-quicksand text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
          Add New Class
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
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

          {/* Description */}
          <div className="md:col-span-2">
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
          <div className="md:col-span-2">
            <label className="block text-gray-400 mb-1 text-sm">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              {...register('image', { required: 'Image is required' })}
              onChange={e =>
                setImagePreview(URL.createObjectURL(e.target.files[0]))
              }
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-800 dark:text-white border-gray-300 text-black"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}

            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-4 h-48 w-auto rounded shadow object-cover"
              />
            )}
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={uploading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded transition"
            >
              {uploading ? 'Submitting...' : 'Add Class'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
