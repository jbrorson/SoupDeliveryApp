import React, { useEffect, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import IngredIcon from '../../Icons/ingredients.svg';
import HeartIcon from '../../Icons/nutritional.svg';
import { CartContext } from '../../pages/CartContext';
import {
  IngredientsWrap,
  SoupImg,
  SoupInfo,
  Dish,
  DishIncludes,
  DishPrice,
  IngredientBox,
  NutritionBox,
  InfoCard,
  ContactKitchen,
  ButtonArea,
  ButtonAdd,
  ButtonDelete,
  GoBackBtn,
  Kitchen,
  Background,
  Button
} from './ingredientsStyle';

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
      {/* <GoBackBtn type="button">X</GoBackBtn> */}
      <SoupImg src="https://imengine.public.prod.ksf.infomaker.io/imengine/image.php?uuid=5c96b398-cc73-4395-ac58-ce2b83dfa382&type=preview&source=5c96b398-cc73-4395-ac58-ce2b83dfa382&function=hardcrop&width=800&height=564&q=80"></SoupImg>
      <SoupInfo>
        <Dish>Tomatsoppa</Dish>
        <DishIncludes>Hög proteinhalt</DishIncludes>
        <DishPrice>Pris: 80 kr</DishPrice>
      </SoupInfo>
      <ButtonArea>
        <ButtonDelete type="button">Ta bort</ButtonDelete>
        <ButtonAdd type="button">Lägg till</ButtonAdd>
      </ButtonArea>
      <InfoCard>
        <IngredientBox>
          <img src={IngredIcon} />
          <h5>Ingredientser</h5>
          <p>
            Spenat, Tomat,<br />
            Korriander, Tomat,<br />
            Linser, osv
          </p>
        </IngredientBox>
        <NutritionBox>
          <img src={HeartIcon} alt="" />
          <h5>Näringsinnehåll</h5>
          <p>
            Kalorier:
            Protein: 37g/100g
            Fett:
            Socker:
          </p>
        </NutritionBox>
      </InfoCard>
      <Background>
        <Kitchen>Kontakta köket</Kitchen>
        <ContactKitchen type="text" placeholder="Endast vid behov..."></ContactKitchen>
        <Button>OK</Button>
      </Background>
    </IngredientsWrap >
  )
};

export default Ingredients;