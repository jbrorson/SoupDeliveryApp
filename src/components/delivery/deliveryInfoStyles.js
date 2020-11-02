import styled from 'styled-components';

export const DeliveryWrap = styled.div`
  margin-top: 80px;
`;

export const FormHeader = styled.h1`
  font-weight: 500;
  margin: 20px;
  display: flex; 
  justify-content: center;
`

export const FormInput = styled.input`
  height: 40px;
  width: 90%;
  border-radius: 5px;
  border: none;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 20px;
  padding-left: 5px;
`;

export const InputInfo = styled.p`
  padding-left: 20px;
  font-weight: bold;
`;

export const Background = styled.div`
  height: 180px; 
  width: 100%;
  border-radius: 5px;
  border: 1px solid lightgray;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;

  h4{
    padding-bottom: 10px; 
  }
`;

export const ContactKitchen = styled.input`
  height: 80px; 
  width: 100%;
  border-radius: 5px;
  border: none;
  padding-left: 5px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const TimeSection = styled.div`
  padding: 20px;
`;

export const TimeBox = styled.div`
  height: 40px;
  background-color: #cfcfcf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChoseTime = styled.p`
  font-weight: bold;
  padding-left: 20px;
`;

export const Check = styled.input`
  height: 20px;
  width: 20px;
  margin-right: 20px;
/* If style more I have to add a library for that */
`;

export const Next = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  width: 104px;
  height: 40px; 
  justify-content: center; 
  align-items: center;
  background-color: #32936F; 
  color: white;
  border: none; 
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 80px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
