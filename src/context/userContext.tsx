import React from 'react';

const ACTIONS = {
  CHANGE_USER_NAME: 'CHANGE_USER_NAME',
};
interface Props {
  children: JSX.Element;
}

interface User {
  name: string;
  email: string;
}
interface Action {
  type: string;
  payload: string;
}

/////////////
const UserContext = React.createContext<User | null>(null);
const UserDispatchContext = React.createContext<React.Dispatch<Action> | null>(
  null,
);

const userReducer = (state: User, action: Action): User => {
  switch (action.type) {
    case ACTIONS.CHANGE_USER_NAME:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};
const initialState: User = {
  name: '',
  email: '',
};

export const UserContextProvider = ({ children }: Props) => {
  const [user, dispatch] = React.useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};
export const useUserValue = () => {
  return React.useContext<User | null>(UserContext);
};
export const useUserDispatch = () => {
  return React.useContext<React.Dispatch<Action> | null>(UserDispatchContext);
};
