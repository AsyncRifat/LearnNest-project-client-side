import React from 'react';
import useAuth from '../../hooks/useAuth';
import useUserRole from '../../hooks/useUserRole';
import LoadingSpinner from '../../pages/shared/LoadingSpinner';
import { Navigate } from 'react-router';

const TeacherRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, isRoleLoading } = useUserRole();

  if (loading || isRoleLoading) {
    return <LoadingSpinner />;
  }

  if (!user || role !== 'admin') {
    return <Navigate to="/forbidden" />;
  }

  return children;
};

export default TeacherRoute;
