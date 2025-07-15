import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
  const handleGoogleSignIn = () => {
    console.log('social login');
  };

  return (
    <>
      <p className="pl-36 my-4"> Or</p>

      <button
        onClick={handleGoogleSignIn}
        className="btn bg-gray-600 text-white min-w-xs "
      >
        <FcGoogle size={24} />
        Login with Google
      </button>
    </>
  );
};

export default SocialLogin;
