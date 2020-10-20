import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)'
}

export const IngredientsWrap = styled.div`
  height: 100%;
  width: 100%;
  /* margin-top: 50px; */
  background: #E8E6E6;
  padding: 0;

  ${media.desktop} {
    display: flex; 
    justify-content: flex-start;
  }
`;

export const SoupImg = styled.img`
  width: 320px;
  height: 200px;
  margin: 20px 0 0 20px;
  border-radius: 7px; 
`;

export const SoupInfo = styled.div`
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 85%;
  width: 100%;
  display: flex;
  align-items: space-evenly;
  justify-content: center;
  flex-flow: wrap;
  font-weight: 700;
`;

export const Dish = styled.h2`
  width: 100%;
  border-bottom: 1px solid #C4C4C4;
  font-weight: 700;
  display: flex; 
  justify-content: center;
  margin: 20px 0 20px 0;
  padding: 0 0 20px 0;
`;

export const DishIncludes = styled.h4`
  width: 100%;
  color: #32936F;
  display: flex; 
  justify-content: center;
  margin-top: auto;
`;

export const DishPrice = styled.h3`
  font-weight: 700;
  width: 100%;
  display: flex; 
  justify-content: center;
  margin: 0;
`;

export const InfoCard = styled.div`
  height: 170px;
  margin-top: 15px;
  width: 100%;
  display: flex; 
  align-items: center;
  justify-content: space-evenly;
`;

export const IngredientBox = styled.div`
  width: 145px;
  height: 139px;
  background-color: #fefefe; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex; 
  justify-content: center;
  padding: 10px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 500;
`;

export const NutritionBox = styled.div`
  width: 115px;
  height: 157px;
  background-color: #fefefe; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex; 
  justify-content: center;
  padding: 10px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 500;
`;

export const TotalIngred = styled.p`
  height: 130px; 
  width: 100%;
  margin: 10px;
`;

export const ContactKitchen = styled.div`
  width: 295px;
  height: 100px;
  background-color: #fefefe;   
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex; 
  justify-content: center;
  padding: 10px;
  border-radius: 15px;
  margin-top: 20px;
  margin-left: 20px;
`;

export const ButtonArea = styled.div`
  height: 90px;
  width: 100%;
  background: #E8E6E6;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ButtonAdd = styled.button`
  width: 110px;
  height: 40px;
  background: #32936F;
  border-radius: 5px;
  color: #fefefe;
  display: flex; 
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border: none;
  font-size: 17px;
  font-weight: 400;
`;

export const ButtonDelete = styled.button`
  width: 110px;
  height: 40px;
  background: #E8E6E6;
  border-radius: 5px;
  color: #32936F;
  display: flex; 
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border: none;
  font-size: 17px;
  font-weight: 400;
`;


