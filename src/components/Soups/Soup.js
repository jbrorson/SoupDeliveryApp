import React, { useContext } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { CartContext } from '../../pages/CartContext';
import {
  SoupWrap,
  SoupPhoto,
  InfoSection,
  InfoButton,
  Title,
  Info,
  ButtonAddOne,
  PriceSection,
  Price,
  DeliveryInfo,
  ImgHolder
} from '../content/soupCardStyles';

const Soup = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    const soup = { name: props.name, info: props.info, time: props.time, price: props.price, image: props.image };
    setCart(curr => [...curr, soup]);
  }
  const history = useHistory();

  return (
    <Router>
      <SoupWrap>
        <div>
          <ImgHolder>
            <img src={props.image} alt="" />
          </ImgHolder>
          <InfoSection>
            <Title>{props.name}</Title>
            <InfoButton type="button" onClick={() => history.push('/ingredients')}>i</InfoButton>
          </InfoSection>
          <InfoSection>
            <Info>{props.info}</Info>
            <ButtonAddOne type="button" onClick={addToCart}>+1</ButtonAddOne>
          </InfoSection>
          <PriceSection>
            <DeliveryInfo>{props.time}</DeliveryInfo>
            <Price>{props.price}</Price>
          </PriceSection>
        </div>
      </SoupWrap>
    </Router>
  )
};

export default Soup;