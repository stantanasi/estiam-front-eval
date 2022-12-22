import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [userName] = useState('John Doe');

  return (
    <UserContext.Provider value={userName}>{children}</UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default UserContext;
