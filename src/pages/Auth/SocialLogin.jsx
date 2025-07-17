import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

const SocialLogin = ({ setWrongMessage }) => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || '/';

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      setWrongMessage(err);
    } finally {
      navigate(from, { state: { spinnerLoginHome: true } });
    }
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
