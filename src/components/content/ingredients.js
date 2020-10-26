import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { IngredientsWrap, SoupImg, SoupInfo, Dish, DishIncludes, DishPrice, IngredientBox, NutritionBox, InfoCard, ContactKitchen, ButtonArea, ButtonAdd, ButtonDelete, TotalIngred } from './ingredientsStyle';
// import { ContentWrap } from './contentStyles';

// import IngredientsIcon from '../../Icons/ingredients.svg';

const Ingredients = () => (

  <IngredientsWrap>
    <div>
      <SoupImg src="https://imengine.public.prod.ksf.infomaker.io/imengine/image.php?uuid=5c96b398-cc73-4395-ac58-ce2b83dfa382&type=preview&source=5c96b398-cc73-4395-ac58-ce2b83dfa382&function=hardcrop&width=800&height=564&q=80"></SoupImg>
      <SoupInfo>
        <Dish>Tomatsoppa</Dish>
        <DishIncludes>Hög proteinhalt</DishIncludes>
        <DishPrice>Pris: 80 kr</DishPrice>
      </SoupInfo>
      <ButtonArea>
        <ButtonDelete>Ta bort</ButtonDelete>
        <ButtonAdd>Lägg till</ButtonAdd>
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
      <ContactKitchen>Kontakta köket</ContactKitchen>
    </div>
  </IngredientsWrap >
);

export default Ingredients;