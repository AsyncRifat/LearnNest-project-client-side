import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import { useUserPostData } from '../../utils/utils';
import toast from 'react-hot-toast';

const SocialLogin = ({ setWrongMessage }) => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || '/';

  // send user data in DB
  const { mutate: postData } = useUserPostData({
    endpoint: '/user',
    onSuccess: () => toast.success('Saved user data in Database'),
    onError: () => toast.error('Not save data in database'),
  });

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      const userPostData = {
        name: result?.user?.displayName,
        email: result?.user?.email,
        image: result?.user?.photoURL,
      };
      postData(userPostData);
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
