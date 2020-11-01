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

  // const ShowIngredients = () => {
  //   history.push("/ingredients");
  // };


  return (
    <Router>
      <SoupWrap>
        <div>
          <ImgHolder>
            <img src={props.image} alt="" />
            {/* <SoupPhoto src="https://imengine.public.prod.ksf.infomaker.io/imengine/image.php?uuid=5c96b398-cc73-4395-ac58-ce2b83dfa382&type=preview&source=5c96b398-cc73-4395-ac58-ce2b83dfa382&function=hardcrop&width=800&height=564&q=80"></SoupPhoto> */}
            {/* <SoupPhoto src={props.image}></SoupPhoto> */}
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