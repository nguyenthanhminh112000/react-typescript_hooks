import React from 'react';
import { useUserValue, useUserDispatch } from './../context/userContext';
const ChildComponent = () => {
  const user = useUserValue();
  const dispatch = useUserDispatch();

  ////
  console.log(user);

  return (
    <div>
      <h1>user's name is:{user?.name}</h1>
      <h1>user's email is:{user?.email}</h1>

      <button
        onClick={(): void => {
          // dispatch({ type: 'CHANGE_USER_NAME', payload: 'Vu nhu cc' });
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default ChildComponent;
