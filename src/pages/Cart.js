import React, { useState } from 'react';
import { CartWrap, CartCard, CartItems, CartHeading, CartBtn, CartInfo, BtnDiv } from '../components/shop/CartStyles';
import uuid from 'react-uuid';
import { CartContext } from './CartContext';

export const Cart = () => {
  const [cart, setCart] = useState([]);
  const items = [
    {
      id: uuid(), name: 'Tomatsoppa', price: 90
    },
    {
      id: uuid(), name: 'Skärgårdssoppa', price: 95
    },
    {
      id: uuid(), name: 'Potatis/Purjolökssoppa', price: 80
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

  const style = {
    backgroundColor: '#32936F',
    color: '#fff',
    borderRadius: '5px',
    border: 0,
    height: '25px',
    width: '25px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    fontSize: '20px',
    marginLeft: '15px'
  };

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    borderBottom: '1px solid lightgray'
  }


  const listItems = items.map(el => (
    <div style={divStyle} key={el.id}>
      {`${el.name}: ${el.price}kr`}
      <input type='submit' value='+' style={style} onClick={() => addToCart(el)} />
    </div>
  ));

  const cartItems = cart.map(el => (
    <div style={divStyle} key={el.id}>
      {`${el.name}: ${el.price}kr`}
      <input type='submit' value='-' style={style} onClick={() => removeFromCart(el)} />
    </div>
  ));

  return (
    <CartWrap>
      <CartCard>
        <CartHeading>Din kundvagn</CartHeading>
        <CartItems>{listItems}</CartItems>
        <CartInfo>Din kundvagn innehåller: ({cart.length})st soppor</CartInfo>
        <CartItems>{cartItems}</CartItems>
        <BtnDiv>
          <CartBtn>Till kassa</CartBtn>
          <CartBtn>Till meny</CartBtn>
        </BtnDiv>
      </CartCard>
    </CartWrap>
  )
};

export default Cart;