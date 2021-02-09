import {useState} from 'react';

const onAdd = (stock, counter) => {
  let newStock = counter;

  if (newStock >= stock) {
    newStock--;
  } else {
    newStock = "Out of Stock";
  }

  return newStock;
};
export const ItemCounter = (stock, counter) => {
    const [stock,setStock] = useState();
    
  return (
    <>
      <button>+</button>
      <b>0</b>
      <button>-</button>
    </>
  );
};
