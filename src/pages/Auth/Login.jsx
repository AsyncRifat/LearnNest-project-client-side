import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { BeatLoader } from 'react-spinners';
import SocialLogin from './SocialLogin';
import useDocumentTitle from '../../utils/useDocumentTitle';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const Login = () => {
  useDocumentTitle('LearnNest | Login');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [wrongMessage, setWrongMessage] = useState('');

  const { signInUser, forgotPassword } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    const email = data?.email;
    const password = data?.password;

    try {
      await signInUser(email, password);
      setLoading(true);
      reset();
      setWrongMessage();
      navigate('/');
    } catch (error) {
      setWrongMessage(error);
      toast.error('Something went wrong');
    }
  };

  const handleForgotPassword = async e => {
    e.preventDefault();
    const email = getValues('email');

    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    try {
      await forgotPassword(email);
      toast.success('Reset email sent. Check your inbox!');
    } catch (error) {
      setWrongMessage('Failed to send reset email', error);
      toast.error('Something went wrong');
    }
  };
  return (
    <>
      <h1 className="text-4xl font-semibold mb-2 font-quicksand">
        Welcome Back
      </h1>
      <p className="text-sm mb-5">Login with LearnNest</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === 'required' && (
            <p className="text-red-500">Email is required</p>
          )}

          <label className="label">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password', { minLength: 6 })}
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

            {errors.password?.type === 'minLength' && (
              <p className="text-red-500">
                Password must be 6 characters or longer
              </p>
            )}
          </div>

          <div>
            <Link
              type="button"
              onClick={handleForgotPassword}
              className="link link-hover"
            >
              Forgot password?
            </Link>
          </div>
        </fieldset>
        <button
          type="submit"
          className="btn bg-green-600 hover:bg-green-700 text-black mt-4 min-w-xs"
          disabled={loading}
        >
          {loading ? <BeatLoader color="#4B0082" size={10} /> : 'Login'}
        </button>
      </form>

      {wrongMessage && (
        <p className="text-xs mt-1">
          <span className="font-semibold">NB:</span>{' '}
          <span className="font-normal text-red-500">
            Check your correct Email & Password
          </span>
        </p>
      )}

      <p className="text-xs mt-4">
        Don't have any account?{' '}
        <Link to="/register" className="ink link-info">
          Register
        </Link>
      </p>
      <SocialLogin setWrongMessage={setWrongMessage} />
    </>
  );
};

export default Login;
