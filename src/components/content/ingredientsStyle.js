import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 600px)'
}

export const IngredientsWrap = styled.div`
  background: #E8E6E6;
  margin: 20px;
  margin-top: 120px; 
  margin-bottom: 100px;

  ${media.desktop} {
    width: 50%;    
  }
`;
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
  z-index: 10;

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
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const IngredientBox = styled.div`
  width: 145px;
  height: 139px;
  background-color: #fefefe; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  display: flex; 
  flex-flow: wrap;
  justify-content: center;
  padding: 20px;
  margin-right: 10px;

  img{
    display: flex;
    justify-content: center;
    width: 30px;
    margin-bottom: 10px;
  }

  h5{
    font-size: 12px;
  }

  p{
    font-size: 12px;
    font-weight: 300;
    display: flex;
    justify-content: center;
  }
`;

export const NutritionBox = styled.div`
  width: 115px;
  height: 157px;
  background-color: #fefefe; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  display: flex; 
  justify-content: center;
  flex-flow: wrap;
  padding: 20px;
  margin-left: 10px;

  h5{
    font-size: 12px;
  }

  p{
    font-size: 12px;
    font-weight: 300;
    display: flex;
    justify-content: center;
  }

    img{
    display: flex;
    justify-content: center;
    width: 30px;
    margin-bottom: 10px;
  }
`;

export const Background = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-top: 20px;
`;

export const Kitchen = styled.p`
  margin-left: 10px;
  font-weight: bold;
`;

export const ContactKitchen = styled.textarea`
  width: 100%;
  height: 80px;
  background-color: #fefefe;   
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex; 
  justify-content: center;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  font-style: italic;
  border: none;
`;

export const Button = styled.button`
  width: 50px;
  height: 30px; 
  color: #fff;
  background: #32936F;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  /* display: flex; */
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


