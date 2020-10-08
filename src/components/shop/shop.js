import React, { useState, useEffect } from 'react';
import { ShopWrap } from './shopStyles';

const Shop = () => {

  const [cart, setCart] = useState([]);
  console.log(cart);
  const items = [
    {
      id: 1, name:'Tomatsoppa', price: 90
    },
    {
      id: 2, name:'Skärgårdssoppa', price: 95
    }, 
    {
      id: 3, name:'Potatis -och purjolökssoppa', price: 80
    }, 
    {
      id: 4, name:'Linssoppa', price: 80
    },
  ];

  const addToCart = (el) => {
    setCart([...cart, el])
  };

  const removeFromCart = (el) => {
    let hardCopy =[...cart]
    hardCopy = hardCopy.filter(cartItem => cartItem.id !== el.id)
    setCart(hardCopy);
  }

  const listItems = items.map(el => (
    <div key={el.id}>
      {`${el.name}: ${el.price}kr`}
      <input type='submit' value='+' onClick={()=>addToCart(el)} />
    </div>
  ));

  const cartItems = cart.map(el => (
    <div key={el.id}>
      {`${el.name}: ${el.price}kr`}
      <input type='submit' value='-' onClick={()=>removeFromCart(el)} />
    </div>
  ));

  return (
    <ShopWrap>
      <h1>Soppmeny:</h1>
      <div>{listItems}</div>
      <p>Din kundvagn innehåller: ({cart.length})st soppor</p>
      <div>{cartItems}</div>
    </ShopWrap>
    
)}; 

export default Shop;