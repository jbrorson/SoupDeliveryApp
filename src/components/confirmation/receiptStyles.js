import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 900px)'
}

export const Container = styled.section`
  margin-top: 100px;
`;

export const Heading = styled.h2`
  margin-top: 20px;
  display: flex; 
  justify-content: center; 
`;

export const Heading2 = styled.p`
  padding-top: 10px;
  display: flex; 
  justify-content: center; 
  font-size: 17px;
  margin-bottom: 20px;
`;

export const ReceiptWrap = styled.div`
  width: 320px;
  margin: 20px;
  padding: 20px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const ReceiptLine = styled.div`
  height: 30px; 
  display: flex; 
  justify-content: space-between;
  align-items: center; 
  margin-bottom: 20px; 
`;

export const OrderId = styled.div`
  margin: 20px; 

  p{
    display: flex; 
    justify-content: center;
    padding: 10px;
    border-top: 1px solid lightgray;
  }
`;
export const Info = styled.h5`
  display: flex;
  justify-content: center;
  margin: 20px;
`

export const Total = styled.h3`
  padding: 20px; 
  display: flex;
  justify-content: center;
`

export const Feedback = styled.section`
  padding: 20px; 
  margin-bottom: 100px;
`;

export const GiveFeedback = styled.div`
  width: 100%;
  display: flex; 
  align-items: center;
  justify-content: space-evenly;
`;

export const Good = styled.button`
  height: 80px;
  width: 80px;
  background-color: #D2FFE4; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex; 
  justify-content: center;
  padding: 20px;
  border-radius: 15px;
  font-size: 15px;
  border: none;
`;

export const Bad = styled.button`
  height: 80px;
  width: 80px;
  background-color: #FFF0F0; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex; 
  justify-content: center;
  padding: 20px;
  border-radius: 15px;
  font-size: 15px;
  border: none;
`;

export const Background = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-top: 20px;
`;

export const LeaveFeedback = styled.input`
  height: 100px;
  width: 100%;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid lightgray;
`;