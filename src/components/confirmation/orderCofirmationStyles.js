import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 900px)'
}

export const Container = styled.section`
  margin-top: 100px;
`;

export const Heading = styled.h1`
  height: 40px;
  display: flex; 
  justify-content: center; 
`;

export const Order = styled.div`
  width: 320px;
  margin: 20px;
  padding: 20px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const OrderContent = styled.section`
  margin: 30px 20px;
`;

export const Content = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid lightgray;
  margin: 10px;
`;

export const SumWrap = styled.h4`
  display: flex; 
  justify-content: center;
  padding-top: 20px;
`;

export const DeliveryInfo = styled.div`
  width: 320px;
  margin: 20px;
  padding: 20px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const EditBtn = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const DeliverTo = styled.section`
  margin: 30px 20px;
`;

export const YourInfo = styled.div`
  height: 30px; 
  display: flex; 
  justify-content: space-between;
  align-items: center; 
  margin-bottom: 20px; 

  button{
    border: none;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const LevInfo = styled.div`
  display: flex; 
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  
  p{
    padding: 10px; 
  }
`;

export const Greeting = styled.div`
  width: 100%; 
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  
  h3{
    padding: 10px 0 0 20px;
  }
`;

export const Message = styled.div`
  font-style: italic;
  padding: 20px;
  color: gray;
`;

export const Payment = styled.div`
  width: 320px;
  margin: 20px;
  margin-bottom: 140px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const ChoosePayment = styled.h3`
  display: flex; 
  justify-content: center; 
  padding: 20px 0;
  border-bottom: 2px solid lightgray;
`;

export const PayPicker = styled.button`
  display: flex; 
  flex-flow: wrap;
  margin: 10px; 
  padding: 0 20px; 
  width: 155px;
  height: 41px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 5px;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  font-weight: bold;
`;

export const ButtonArea = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  padding-bottom: 20px;
`;

export const CreditCard = styled.div`
  display: flex; 
  justify-content: center; 
  padding-top: 20px; 
`;