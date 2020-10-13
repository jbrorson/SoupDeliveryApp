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
  DeliveryInfo 
} from './soupCardStyles';

const SoupCard = () => (
  <SoupWrap>
    <div>
      <SoupPhoto src="https://imengine.public.prod.ksf.infomaker.io/imengine/image.php?uuid=5c96b398-cc73-4395-ac58-ce2b83dfa382&type=preview&source=5c96b398-cc73-4395-ac58-ce2b83dfa382&function=hardcrop&width=800&height=564&q=80"></SoupPhoto>
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
);

export default SoupCard;