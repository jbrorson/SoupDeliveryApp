import styled from 'styled-components';

export const DeliveryWrap = styled.div`
  /* margin: 0; */
  margin-top: 80px;
`;

// export const StyledForm = styled.form`
//   display: flex; 
//   justify-content: center;
//   flex-wrap: wrap;
//   width: 100%;
//   border: 2px solid blue;
// `;

export const FormHeader = styled.h1`
  /* width: 100%; */
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

export const ContactKitchen = styled.textarea`
  height: 80px; 
  width: 100%;
  border-radius: 5px;
  border: none;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px 5px;
`;

export const TimeSection = styled.div`
  height: 240px;
  margin-bottom: 20px;
`;

export const TimeBox = styled.div`
  width: 80%;
  height: 40px;
  background-color: #cfcfcf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 15px;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
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

export const NextBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center; 
  background-color: #32936F; 
  width: 104px;
  height: 40px;
  color: white;
  border: none; 
  border-radius: 5px;
  margin-bottom: 80px;
  margin-left: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
