import React from 'react';
const ACTIONS = {
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
};
interface State {
  count: number;
}
type Action = {
  type: string;
  payload: number;
};

const initalState: State = {
  count: 0,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTIONS.INCREASE:
      return { ...state, count: state.count + action.payload };
    case ACTIONS.DECREASE:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};
const UseReducerExample = () => {
  // const [count, setCount] = React.useState<number>(0);
  const [state, dispatch] = React.useReducer(reducer, initalState);
  const increaseCount = (): void => {
    // setCount((prevCount) => prevCount + 1);
    dispatch({ type: ACTIONS.INCREASE, payload: 1 });
  };
  const decreaseCount = (): void => {
    // setCount((prevCount) => prevCount - 1);
    dispatch({ type: ACTIONS.DECREASE, payload: 1 });
  };
  return (
    <div>
      <button onClick={decreaseCount}>-</button>
      <h1>{state.count}</h1>
      <button onClick={increaseCount}>+</button>
    </div>
  );
};

export default UseReducerExample;
