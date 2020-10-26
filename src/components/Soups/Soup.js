import React from 'react';
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


  return (
    <>
      <SoupWrap>
        <div>
          <ImgHolder>
            <SoupPhoto src="https://imengine.public.prod.ksf.infomaker.io/imengine/image.php?uuid=5c96b398-cc73-4395-ac58-ce2b83dfa382&type=preview&source=5c96b398-cc73-4395-ac58-ce2b83dfa382&function=hardcrop&width=800&height=564&q=80"></SoupPhoto>
          </ImgHolder>
          <InfoSection>
            <Title>{props.name}</Title>
            <InfoButton>i</InfoButton>
          </InfoSection>
          <InfoSection>
            <Info>{props.info}</Info>
            <ButtonAddOne>+1</ButtonAddOne>
          </InfoSection>
          <PriceSection>
            <DeliveryInfo>{props.time}</DeliveryInfo>
            <Price>{props.price}</Price>
          </PriceSection>
        </div>
      </SoupWrap>
    </>
  )
};

export default Soup;