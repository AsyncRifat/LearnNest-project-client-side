import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import LoadingSpinner from '../../pages/shared/LoadingSpinner';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation();

  if (loading) {
    return <LoadingSpinner smallHeight={false} />;
  }

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace={true}
        state={{ from: location.pathname }}
      />
    );
  }

  return children;
};

export default PrivateRoute;
