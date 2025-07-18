import React from 'react';
import useDocumentTitle from '../../utils/useDocumentTitle';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';

const TeachOnPage = () => {
  useDocumentTitle('LearnNest | Request');

  const { user } = useAuth();
  const name = user?.displayName;
  const email = user?.email;
  const image = user?.photoURL;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log('Submitted Data:', { name, email, image, data });
    reset();
    // TODO: Send to server or API
  };

  return (
    <div className=" flex items-center justify-center  dark:from-[#1e272e] dark:to-[#1e272e] px-1 md:px-4 mt-4 md:mt-10">
      <div className="w-full max-w-4xl bg-white/80 dark:bg-gray-900/70 backdrop-blur-lg border border-gray-200 dark:border-gray-800 shadow-xl rounded-3xl p-8 md:p-12">
        <h2 className="font-quicksand text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Apply to Teach on <span className="text-green-600">LearnNest</span>
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* User Profile Card */}
          <div className="flex flex-col items-center border border-gray-200 rounded-xl p-6 bg-white dark:bg-gray-800 shadow-inner ">
            <img
              src={user?.photoURL}
              alt="User"
              className="w-24 h-24 object-cover rounded-full border-4 border-green-400 shadow-md"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
              {user?.displayName || 'Unknown User'}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {user?.email}
            </p>
            <p className="mt-2 px-3 py-1 bg-green-100 dark:bg-green-700 text-green-700 dark:text-white text-xs rounded-full">
              Logged In
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            {/* Experience */}
            <div>
              <label className="block text-gray-400 dark:text-gray-600 mb-1 text-sm">
                Experience Level
              </label>
              <select
                {...register('experience', { required: true })}
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-800 dark:text-white"
              >
                <option value="">Select</option>
                <option value="beginner">Beginner</option>
                <option value="mid-level">Mid-level</option>
                <option value="experienced">Experienced</option>
              </select>
              {errors.experience && (
                <p className="text-red-500 text-xs mt-1">Required</p>
              )}
            </div>

            {/* Title */}
            <div>
              <label className="block text-gray-400 dark:text-gray-600 mb-1 text-sm">
                Course Title
              </label>
              <input
                type="text"
                placeholder="e.g. Advanced React & Redux"
                {...register('title', { required: true })}
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-800 dark:text-white"
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1">Required</p>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-400 dark:text-gray-600 mb-1 text-sm">
                Category
              </label>
              <select
                {...register('category', { required: true })}
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-800 dark:text-white"
              >
                <option value="">Select Category</option>
                <option value="web-development">Web Development</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="graphic-design">Graphic Design</option>
                <option value="data-science">Data Science</option>
                <option value="ai-machine-learning">
                  AI & Machine Learning
                </option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-xs mt-1">Required</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 transition-colors text-white py-3 px-6 rounded-xl font-semibold shadow-lg"
              >
                Submit for Review
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeachOnPage;
