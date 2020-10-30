import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 900px)'
}

export const TotalWrap = styled.section`
  margin-top: 50px;
  background-color: #E8E6E6;
  width: 100%; 
`;

export const OrderHeader = styled.h1`
  height: 40px;
  display: flex; 
  justify-content: center; 
`;

export const OrderWrap = styled.div`
  width: 320px;
  height: 300px;
  margin: 20px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const TextWrap = styled.section`
  height: 280px;
  margin: 30px 20px;
`;

export const RowWrap = styled.div`
  height: 40px; 
  display: flex; 
  justify-content: space-between;
  padding: 0 10px;
  border-bottom: 1px solid gray;
  margin: 10px;
`;

export const EditBtn = styled.button`
  height: 30px; 
  width: 30px; 
  border: none;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SumWrap = styled.h4`
  display: flex; 
  justify-content: center;
`;

export const OrderTo = styled.div`
  width: 320px;
  height: 500px;
  margin: 20px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const DeliverToPerson = styled.section`
  height: 400px;
  margin: 30px 20px;
`;

export const LevInfo = styled.div`
  height: 50px;
  display: flex; 
  justify-content: space-between;
`;

export const YourInfo = styled.div`
  height: 30px; 
  display: flex; 
  justify-content: space-between;
  padding: 10px;
`;

export const LevPreOver = styled.h1`
  padding-bottom: 10px; 
`;

export const Greeting = styled.input`
  width: 100%; 
  height: 60px; 
  border-radius: 5px;
  font-style: italic;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
  border: none;
  background-color: #e8e8e8; 
  padding-left: 5px;
`;

export const Final = styled.div`
  padding: 10px;
`;

export const Payment = styled.div`
  width: 320px;
  height: 200px;
  margin: 20px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const ChoosePayment = styled.h2`
  height: 30px;
  display: flex; 
  justify-content: center; 
  padding-top: 20px;
`;

export const PayPicker = styled.button`
  display: flex; 
  flex-flow: wrap;
  margin: 10px; 
  padding: 10px; 
  width: 155px;
  height: 41px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 5px;
  justify-content: center;
  border: none;
  font-weight: bold;
`;

export const ButtonArea = styled.div`
  display: flex; 
  justify-content: center;
  flex-flow: wrap;
`;