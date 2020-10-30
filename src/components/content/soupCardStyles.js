import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 900px)'
}

export const SoupWrap = styled.div`
  width: 320px;
  height: 450px;
  left: 0px;
  top: 0px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 100px 20px;
`;

export const ImgHolder = styled.div`
  height: 200px;
  width: 100%; 
  display: flex; 
  justify-content: center; 

  img{
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 7px;
  }

  /* ${media.desktop} {
    width: 80%;
  } */
`;


// export const SoupPhoto = styled.image`
//   width: 85%;
//   height: 180px;
//   margin: 20px;
//   border-radius: 7px;



export const Title = styled.h2`
  font-weight: bold;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;

  ${media.desktop} {
    margin: 0 20px;
  }
`;

export const InfoButton = styled.button`
  height: 30px; 
  width: 30px;
  border-radius: 50%;
  /* border: 0; */
  background-color: #fff;
  font-size: 18px;
  border: 1.5px solid #000000;
  margin-right: 20px;

  ${media.desktop} {
    height: 40px;
    width: 40px;
  }
`;


export const InfoSection = styled.section`
  height: 80px; 
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 2px solid #E5E5E5;

  ${media.desktop} {
    justify-content: center;
  }
`;


export const Info = styled.p`
  margin-left: 20px;
  font-weight: 200;
`;

export const ButtonAddOne = styled.button`
  width: 65px;
  height: 45px;
  font-size: 20px; 
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

  ${media.desktop} {
    justify-content: center;
  }
`;

export const Price = styled.h2`
  margin-left: 10px;
  font-weight: bold;
`;

export const DeliveryInfo = styled.h3`
  color: black;
  margin-right: 10px;
  font-weight: 300;

  ${media.desktop} {
    margin-right: 30px;
  }
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