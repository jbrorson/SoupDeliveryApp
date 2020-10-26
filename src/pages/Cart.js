import React, { useState, useEffect } from 'react';
import { ShopWrap, CartCard, CartItems, CartHeading, CartBtn } from '../components/shop/shopStyles';
import uuid from 'react-uuid';

const Cart = () => {

  const [cart, setCart] = useState([]);
  console.log(cart);
  const items = [
    {
      id: uuid(), name: 'Tomatsoppa', price: 90
    },
    {
      id: uuid(), name: 'Skärgårdssoppa', price: 95
    },
    {
      id: uuid(), name: 'Potatis -och purjolökssoppa', price: 80
    },
    {
      id: uuid(), name: 'Linssoppa', price: 80
    },
  ];

  const addToCart = (el) => {
    setCart([...cart, el])
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart]
    hardCopy = hardCopy.filter(cartItem => cartItem.id !== el.id)
    setCart(hardCopy);
  }

  const listItems = items.map(el => (
    <div key={el.id}>
      {`${el.name}: ${el.price}kr`}
      <input type='submit' value='+' onClick={() => addToCart(el)} />
    </div>
  ));

  const cartItems = cart.map(el => (
    <div key={el.id}>
      {`${el.name}: ${el.price}kr`}
      <input type='submit' value='-' onClick={() => removeFromCart(el)} />
    </div>
  ));

  return (
    <ShopWrap>
      <CartCard>
        <CartHeading>Din kundvagn</CartHeading>
        <CartItems>{listItems}</CartItems>
        <p>Din kundvagn innehåller: ({cart.length})st soppor</p>
        <CartItems>{cartItems}</CartItems>
        <button>Till kassa</button><button>Tillbaka till meny</button>
      </CartCard>
    </ShopWrap>
  )
};

export default Cart;