import React from 'react';
import ListItem from './ListItem';

const UseCallbackExample = () => {
  const [number, setNumber] = React.useState<number>(0);
  const [dark, setDark] = React.useState<boolean>(false);
  // const getListNumber = (number: number): number[] => {
  //   return [number, number + 1, number + 2];
  // };

  // const getListNumber = React.useCallback(
  //   (number: number): number[] => {
  //     return [number, number + 1, number + 2];
  //   },
  //   [number],
  // );
  const getListNumber = React.useMemo(() => {
    return (number: number): number[] => {
      return [number, number + 1, number + 2];
    };
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          setDark((prevDark) => !prevDark);
        }}
      >
        Change theme
      </button>
      <ListItem getListNumber={getListNumber} number={number} />

      <div style={themeStyles}>l</div>
    </div>
  );
};

export default UseCallbackExample;
