import React, { useEffect, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../../pages/CartContext';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { IngredientsWrap, SoupImg, SoupInfo, Dish, DishIncludes, DishPrice, IngredientBox, NutritionBox, InfoCard, ContactKitchen, ButtonArea, ButtonAdd, ButtonDelete, TotalIngred, GoBackBtn, Kitchen } from './ingredientsStyle';
// import { ContentWrap } from './contentStyles';

// import IngredientsIcon from '../../Icons/ingredients.svg';

const Ingredients = () => {

  // Lägg till addToCard för att addera i cart, lägg till onClick i button i returnen
  // const [cart, setCart] = useContext(CartContext);

  // const addToCart = () => {
  //   const soup = { name: props.name, info: props.info, time: props.time, price: props.price, image: props.image };
  //   setCart(curr => [...curr, soup]);
  // }
  //totalprice är ej komplett...
  // const totalPrice = cart.reduce(
  //   (prevValue, currentValue) => prevValue + currentValue.price, 0);

  const location = useLocation();
  useEffect(() => {
  }, [location]);

  return (
    <IngredientsWrap>
      <SoupImg src="https://imengine.public.prod.ksf.infomaker.io/imengine/image.php?uuid=5c96b398-cc73-4395-ac58-ce2b83dfa382&type=preview&source=5c96b398-cc73-4395-ac58-ce2b83dfa382&function=hardcrop&width=800&height=564&q=80"></SoupImg>
      <SoupInfo>
        <Dish>Tomatsoppa
          <GoBackBtn type="button">X</GoBackBtn>
        </Dish>
        <DishIncludes>Hög proteinhalt</DishIncludes>
        <DishPrice>Pris: 80 kr</DishPrice>
      </SoupInfo>
      <ButtonArea>
        <ButtonDelete type="button">Ta bort</ButtonDelete>
        <ButtonAdd type="button">Lägg till</ButtonAdd>
      </ButtonArea>
      <InfoCard>
        <IngredientBox>
          {/* <svg src="http://www.w3.org/2000/svg" width="40px" height="40px" color="green" /> */}
          <TotalIngred>Ingredientser<br /><br />Spenat, Tomat, Korriander, Tomat, Linser, osv</TotalIngred>
        </IngredientBox>
        <NutritionBox>
          <TotalIngred>Näringsinnehåll<br /><br />
          Kalorier:
          Protein: 37g/100g
          Fett:
          Socker:
          </TotalIngred>
        </NutritionBox>
      </InfoCard>
      <Kitchen>Kontakta köket</Kitchen>
      <ContactKitchen type="text" placeholder="Endast vid behov..."></ContactKitchen>
    </IngredientsWrap>
  )
};

export default Ingredients;