import React from 'react';
import uuid from 'react-uuid';
import Soup from './Soups/Soup';


const Soups = () => {
  const soups = [
    { id: uuid(), name: 'Tomatsoppa', price: 90 }, //Lägg till image här
    { id: uuid(), name: 'Skärgårdssoppa', price: 95 },
    { id: uuid(), name: 'Potatis -och purjolökssoppa', price: 80 },
    { id: uuid(), name: 'Linssoppa', price: 80 }
  ];

  return (
    <section>
      {soups.map((soup) => (
        <Soup id={soup.id} name={soup.name} price={soup.price} />

      ))}
    </section>
  );
};

export default Soups;