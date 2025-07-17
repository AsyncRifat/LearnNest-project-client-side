import { FaBan, FaLock } from 'react-icons/fa';
import { Link } from 'react-router';
import useDocumentTitle from '../../utils/useDocumentTitle';

const Forbidden = () => {
  useDocumentTitle('Forbidden');
  return (
    <div className="flex flex-col items-center justify-center px-4 text-center pt-15 md:pt-28">
      <FaBan className="text-red-500 text-7xl mb-4 animate-pulse" />

      <h1 className="text-5xl font-bold text-gray-800 mb-2">403</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Forbidden Access
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        You don&apos;t have permission to access this page. If you believe this
        is a mistake, please contact the administrator.
      </p>
      <div className="flex gap-4">
        <Link
          to="/"
          className="btn bg-violet-600 hover:bg-violet-600 text-white px-6 py-2 rounded-lg"
        >
          Go Home
        </Link>
        <Link
          to="/login"
          className="btn border border-violet-500 text-violet-500 hover:bg-violet-100 px-6 py-2 rounded-lg"
        >
          Login Again
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;
