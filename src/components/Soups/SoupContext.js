import React, { useState, createContext } from 'react';
import uuid from 'react-uuid';

//Create context
export const SoupContext = createContext();

export const SoupProvider = props => {
  const [soups, setSoups] = useState([
    {
      name: 'Tomatsoppa',
      price: 90,
      id: uuid()
    },
    {
      name: 'Skärgårdssoppa',
      price: 95,
      id: uuid()
    },
    {
      name: 'Potatis -och purjolökssoppa',
      price: 80,
      id: uuid()
    },
    {
      name: 'Linssoppa',
      price: 80,
      id: uuid()
    }
  ]);
  return (
    <SoupContext.Provider>
      {props.children}
    </SoupContext.Provider>
  );
};