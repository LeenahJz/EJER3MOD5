import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({ allowedRoles }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Redirect to login if the user is not authenticated
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Redirect to a forbidden page or homepage if the user doesn't have the required role
    return <Navigate to="/" />;
  }

  // Render the protected component if the user is authenticated and has the required role
  return <Outlet />;
};

export default PrivateRoute;