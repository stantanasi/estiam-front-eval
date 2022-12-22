import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function AuthGuard({ children }) {
  const account = useSelector((state) => state.account);

  if (!account.user) {
    return <Redirect to="/login" />;
  }

  return children;
}

AuthGuard.propTypes = {
  children: PropTypes.any
};

export default AuthGuard;
