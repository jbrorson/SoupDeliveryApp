import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 600px)'
}

export const IngredientsWrap = styled.div`
  height: 100%;
  width: 100%;
  background: #E8E6E6;
  margin: 20px;

  ${media.desktop} {
    width: 50%;    
  }
`;

// img tar upp 100% av width och kan därför inte få till ordentligt 
export const SoupImg = styled.img`
  height: 200px;
  width: 100%;
  border-radius: 7px; 
  margin: 0;

  ${media.desktop} {
    width: 90%;
    margin: 20px;
  }
`;

export const SoupInfo = styled.div`
  height: 180px;
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
  justify-content: space-around;
  padding: 15px;

  ${media.desktop} {
    justify-content: center;
  }
`;

export const GoBackBtn = styled.button`
  background-color: #fefefe; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100%;
  border: none;
  height: 40px;
  width: 40px; 
  font-size: 20px; 

  ${media.desktop} {
    margin-left: 20px;
  }
`;

export const DishIncludes = styled.h4`
  width: 100%;
  color: #32936F;
  display: flex; 
  justify-content: center;
  margin-top: auto;
  padding: 10px;
`;

export const DishPrice = styled.h3`
  font-weight: 700;
  width: 100%;
  display: flex; 
  justify-content: center;
  margin: 0;
  padding: 10px;
`;

export const InfoCard = styled.div`
  height: 190px;
  padding: 15px 0;
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
  height: 100%;
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

export const Kitchen = styled.p`
  margin-left: 10px;
  font-weight: bold;
`;

export const ContactKitchen = styled.textarea`
  width: 100%;
  height: 100px;
  background-color: #fefefe;   
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex; 
  justify-content: center;
  padding: 10px;
  margin-top: 10px;
  border-radius: 15px;
  font-style: italic;
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


