import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ element: Component, role, redirectPath, ...rest }) => {
  // Check for the appropriate authentication token based on the user role
  const isAuthenticated =
    role === 'Etudiants'
      ? !!Cookies.get('authTokenUser') // Check if authToken exists for clients
      : !!Cookies.get('authTokenAdmin'); // Check if authTokenTransporteur exists for transporteurs

  return isAuthenticated ? Component : <Navigate to={redirectPath} />;
};

export default PrivateRoute;