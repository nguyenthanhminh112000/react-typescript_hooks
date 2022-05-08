import React from 'react';
interface Props {
  number: number;
  getListNumber: (number: number) => number[];
}

const ListItem = ({ getListNumber, number }: Props) => {
  const [items, setItems] = React.useState<number[]>([]);
  React.useEffect((): void => {
    setItems(getListNumber(number));
    console.log('Updating items');
  }, [getListNumber]);
  return (
    <div>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </div>
  );
};

export default ListItem;
