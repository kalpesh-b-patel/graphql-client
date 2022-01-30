import { createContext, useReducer } from 'react';

const initialState = {
  state: null,
};

const authReducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const AuthContext = createContext(initialState);

const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const value = { state, dispatch };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
