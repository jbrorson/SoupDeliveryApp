import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import uuid from 'react-uuid';
import Soup from '../components/Soups/Soup';

// import {
//   SoupWrap,
//   SoupPhoto,
//   InfoSection,
//   InfoButton,
//   Title,
//   Info,
//   ButtonAddOne,
//   PriceSection,
//   Price,
//   DeliveryInfo,
//   ImgHolder
// } from '../components/content/soupCardStyles';


const Menu = () => (
  <div>
    <p>Välkommen att frossa bland våra klassiska soppor</p>
    <Soup name="Tomatsoppa" price="80 kr" info="Ät dig i form med våran supertomatsoppa! 100% god!" time="Leveranstid: 30 min" />
    <Soup name="Skärgårdssoppa" price="85 kr" info="Krämig, smakrik soppa med smak av havet." time="Leveranstid: 20 min" />
    <Soup name="Purjolökssoppa" price="95 kr" info="För den jordnära. Mmmm potatis." time="Leveranstid: 20 min" />
    <Soup name="Linssoppa" price="90 kr" info="För den som tar soppa på allvar. Surpla på!" time="Leveranstid: 30 min" />
  </div>
  // <SoupWrap>
  //   <div>
  //     <ImgHolder>
  //       <SoupPhoto src="https://imengine.public.prod.ksf.infomaker.io/imengine/image.php?uuid=5c96b398-cc73-4395-ac58-ce2b83dfa382&type=preview&source=5c96b398-cc73-4395-ac58-ce2b83dfa382&function=hardcrop&width=800&height=564&q=80"></SoupPhoto>
  //     </ImgHolder>
  //     <InfoSection>
  //       <Title >Tomatsoppa</Title>
  //       <InfoButton>i</InfoButton>
  //     </InfoSection>
  //     <InfoSection>
  //       <Info>Ät dig i form med våran supertomatsoppa! 100% god!</Info>
  //       <ButtonAddOne>+1</ButtonAddOne>
  //     </InfoSection>
  //     <PriceSection>
  //       <DeliveryInfo>Leveranstid:<br />30 min</DeliveryInfo>
  //       <Price>Pris: 90kr</Price>
  //     </PriceSection>
  //   </div>
  // </SoupWrap>
);

export default Menu;