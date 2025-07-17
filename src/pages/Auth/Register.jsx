import React, { useState } from 'react';
import useDocumentTitle from '../../utils/useDocumentTitle';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from './SocialLogin';
import { imageUpload } from '../../utils/utils';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import useAuth from '../../hooks/useAuth';
import { BeatLoader } from 'react-spinners';
import toast from 'react-hot-toast';

const Register = () => {
  useDocumentTitle('LearnNest | Register');
  const { createUser, updateUserProfile } = useAuth();
  const [imageUrl, setImageUrl] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || '/';

  // react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const passwordValue = watch('password');

  // create user
  const onSubmit = async data => {
    const email = data?.email;
    const password = data?.password;
    const name = data?.name;

    try {
      await createUser(email, password);

      await updateUserProfile(name, imageUrl);

      setLoading(true);
      reset(reset);

      navigate(from, { state: { spinnerLoginHome: true } });
    } catch (error) {
      console.log(error.message);
      toast.error('Something went wrong');
    }
  };

  // handle image
  const handleImageUpload = async e => {
    e.preventDefault();
    const image = e.target.files[0];

    try {
      const imageURL = await imageUpload(image);
      setImageUrl(imageURL);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-semibold mb-2 font-quicksand">
        Create an Account
      </h1>
      <p className="text-sm mb-5">Register with LearnNest</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          {/* file */}
          <label className="relative">
            <input
              type="file"
              onChange={handleImageUpload}
              name="image"
              className="w-20 h-20 rounded-full object-cover "
            />
            <img
              src={
                imageUrl
                  ? imageUrl
                  : 'https://i.ibb.co/rRPYkscQ/placeholder.jpg'
              }
              alt="profile photo"
              className="absolute top-0 w-20 h-20 rounded-full object-cover border border-gray-500"
            />

            {!imageUrl && (
              <FaCloudUploadAlt
                size={27}
                className="absolute bottom-2 left-13 text-lime-600"
              />
            )}
          </label>

          {/* name */}
          <label className="label mt-3">Name</label>
          <input
            type="text"
            {...register('name', { required: true })}
            className="input"
            placeholder="Name"
          />
          {errors.name?.type === 'required' && (
            <p className="text-red-500">Enter your name please</p>
          )}

          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === 'required' && (
            <p className="text-red-500">Required Email</p>
          )}

          {/* password */}
          <label className="label">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password', {
                required: true,
                minLength: 6,
                pattern:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
              })}
              className="input"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="absolute top-2.5 right-55"
            >
              {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
            </button>
            {errors.password?.type === 'required' && (
              <p className="text-red-500">Required Password</p>
            )}
            {errors.password?.type === 'minLength' && (
              <p className="text-red-500">
                Password must be 6 characters or longer
              </p>
            )}
            {errors.password?.type === 'pattern' && (
              <p className="text-red-500">
                Must be use capital,small,Special character needed
              </p>
            )}

            {passwordValue && passwordValue.length < 6 && (
              <p className="text-yellow-500 mt-1">Weak Password</p>
            )}

            {passwordValue && passwordValue.length >= 6 && (
              <p className="text-green-600 mt-1">Strong Password</p>
            )}
          </div>
        </fieldset>
        <button
          type="submit"
          className="btn bg-green-600 hover:bg-green-700 text-black mt-4 min-w-xs"
        >
          {loading ? <BeatLoader color="#4B0082" size={10} /> : 'Register'}
        </button>
      </form>

      <p className="text-xs mt-4">
        Already have an account?{' '}
        <Link to="/login" className="ink link-info">
          Login
        </Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Register;
