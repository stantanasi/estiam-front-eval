import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function GuestGuard({ children }) {
  const account = useSelector((state) => state.account);

  if (account.user) {
    return <Redirect to="/app/users" />;
  }

  return children;
}

GuestGuard.propTypes = {
  children: PropTypes.any
};

export default GuestGuard;
