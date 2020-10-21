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
} from './soupCardStyles';

const SoupCard = () => (

  <SoupWrap>
    <div>
      <ImgHolder>
        <SoupPhoto src="https://imengine.public.prod.ksf.infomaker.io/imengine/image.php?uuid=5c96b398-cc73-4395-ac58-ce2b83dfa382&type=preview&source=5c96b398-cc73-4395-ac58-ce2b83dfa382&function=hardcrop&width=800&height=564&q=80"></SoupPhoto>
      </ImgHolder>
      <InfoSection>
        <Title>Tomatsoppa</Title>
        <InfoButton>i</InfoButton>
      </InfoSection>
      <InfoSection>
        <Info>Ät dig i form med våran supertomatsoppa! 100% god!</Info>
        <ButtonAddOne>+1</ButtonAddOne>
      </InfoSection>
      <PriceSection>
        <DeliveryInfo>Leveranstid:<br />30 min</DeliveryInfo>
        <Price>Pris: 90kr</Price>
      </PriceSection>
    </div>
  </SoupWrap>

  /* <SoupWrap>

    <SoupPhoto src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.arla.se%2Frecept%2Fskargardssoppa-med-lax-och-potatis%2F&psig=AOvVaw1cWSCEQObMwDSEUmr_eHQB&ust=1603284206989000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCW-aaZw-wCFQAAAAAdAAAAABAD"></SoupPhoto>
    <InfoSection>
      <Title>Skärgårdssoppa</Title>
      <InfoButton>i</InfoButton>
    </InfoSection>
    <InfoSection>
      <Info>Krämig, smakrik soppa med smak av havet.</Info>
      <ButtonAddOne>+1</ButtonAddOne>
    </InfoSection>
    <PriceSection>
      <DeliveryInfo>Leveranstid:<br />20 min</DeliveryInfo>
      <Price>Pris: 90kr</Price>
    </PriceSection>
  </SoupWrap> */


);

export default SoupCard;