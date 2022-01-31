import React, { createContext, useReducer } from 'react';

export enum ActionType {
  Login,
  LoginSuccess,
  LoginFail,
}

export interface State {
  user: string | null;
  loading: boolean;
}
export interface Action {
  type: ActionType
}

const initialState: State = {
  user: 'Kalpesh',
  loading: false,
};

const authReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.Login: {
      return {
        user: 'Kalpesh Patel',
        loading: false,
      };
    }
    case ActionType.LoginFail:
    case ActionType.LoginSuccess:
    default:
      return state;
  }
};

export const AuthContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => undefined });

const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={ { state, dispatch } }>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
