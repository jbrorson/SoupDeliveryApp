import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

// export const PopupWrap = styled.section`
//   width: 320px;
//   height: 450px;
//   left: 0px;
//   top: 0px;
//   background: #FFFFFF;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   border-radius: 10px;
//   margin: 100px 20px;
// `;

export const Background = styled.div`
  width: 100%; 
  height: 100%; 
  background: rgba(0, 0, 0, 0.8);
  position: fixed; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
`;

export const PopupWrap = styled.div`
  width: 400px; 
  width: 400px; 
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid; 
  grid-template-columns: 1fr 1fr;
  position: relative; 
  z-index: 10;
  border-radius: 10px;  
  /* padding: 0;
  margin: 0;  */
`;

export const PopupImg = styled.div`
  width: 100%; 
  height: 100%; 
  border-radius: 10px 0 0 10px; 
  background: #000;
`;

export const PopupContent = styled.div`
  box-sizing: border-box; 
  margin: 0;
  padding: 0;
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  line-height: 1.8;
  color: #141414;

  p{
    margin-bottom: 1rem;
  }

  button{
    padding: 10px 24px; 
    background: #141414;
    color: #fff;
    border: none; 
  }
`;

export const ClosePopupButton = styled(MdClose)`
  cursor: pointer; 
  position: absolute; 
  top: 20px; 
  right: 20px; 
  width: 32px; 
  height: 32px; 
  padding: 0; 
  z-index: 10;
`;