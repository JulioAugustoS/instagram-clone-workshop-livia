import React from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({children, values}) => {
  return (
    <AuthContext.Provider value={{...values}}>{children}</AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = React.useContext(AuthContext);

  return context;
};

export {AuthProvider, useAuthContext};
