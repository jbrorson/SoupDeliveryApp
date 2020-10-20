import styled from 'styled-components';

export const DeliveryWrap = styled.div`
  height: 100%;
  width: 100%;
  background-color: #E8E6E6;
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const StyledForm = styled.form`
  height: 60%;
  width: 100%;
  margin: 0 0 30px 30px;
  /* margin-left: 20px; */
`;

export const FormHeader = styled.h1`
  width: 100%;
  font-weight: 500;
`

export const FormInput = styled.input`
  height: 40px;
  width: 80%;
  border-radius: 5px;
  border: none;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 5px;
`;

export const InputInfo = styled.p`
  padding-left: 5px; 
  font-weight: bold;
`;

export const ContactKitchen = styled.textarea`
  height: 80px; 
  width: 80%;
  border-radius: 5px;
  border: none;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px 5px;
`;
