import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)'
}

export const SoupWrap = styled.div`
  /* position: absolute; */
  width: 85%;
  height: 420px;
  left: 0px;
  top: 0px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  ${media.desktop} {
    display: flex; 
    justify-content: flex-start;
    /* width: 45%;  */
  }
`;

export const SoupPhoto = styled.img`
  width: 280px;
  height: 175px;
  margin: 20px 0 0 20px;
  border-radius: 7px;
`;

export const InfoSection = styled.section`
  height: 70px; 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 2px solid #E5E5E5;
`;

export const Title = styled.h2`
  font-weight: bold;
`;

export const InfoButton = styled.button`
  height: 30px; 
  width: 30px;
  border-radius: 50%;
  border: 0;
  background-color: #fff;
  font-size: 18px;
  border: 1.5px solid #000000;
`;

export const Info = styled.p`
  color: black;
  margin-left: 30px;
  font-weight: 200;
`;

export const ButtonAddOne = styled.button`
  width: 47px;
  height: 35px; 
  background-color: #32936F;
  border-radius: 4px;
  color: #fff;
  border: 0;
  margin-right: 30px;
`;

export const PriceSection = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Price = styled.h3`
  color: black;
  margin-left: 10px;
  font-weight: bold;
`;

export const DeliveryInfo = styled.h3`
  color: black;
  margin-right: 10px;
  font-weight: 300;
`;
  /* .SoupImg {
    width: 100%; 
    height: 200px; 
    background-color: gray; 

    ${media.desktop} {
      width: 48%; 
    }
  }
  .info {
    margin-top: 10px; 
    width: 100%;
    height: 200px; 
    background-color: pink; 

    ${media.desktop} {
      margin: 0;
      width: 48%;
    }
  }
`; */