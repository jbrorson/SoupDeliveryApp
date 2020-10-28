import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)'
}

export const PageWrap = styled.div`
  height: 100vh; 
  width: 100%;
  padding: 25px;
  background-color: #E8E6E6;

  ${media.desktop} {
      /* width: 45%; */
      /* display: flex; 
      justify-content: center; */
      /* flex-flow: row wrap; */
    }
`;

export const PageCard = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 100px;
  padding: 30px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px; 
  
  ${media.desktop} {
      width: 45%;
    }
`;

export const PageHeading = styled.h1`
  margin: 10px;
  display: flex;
  justify-content: center;
`
export const Faq = styled.h5`
  padding: 10px;
  font-size: 17px; 
  font-weight: bold;
`;

export const Paragraph = styled.p`
  justify-content: center;
  padding: 10px;
`;

export const ContactSection = styled.section`
  height: 400px;
  background-color: #E8E6E6;
  margin-top: 30px;
  margin-bottom: 58px;
  padding: 20px; 

${media.desktop} {
    width: 45%;
  }
`;

export const VisitUs = styled.div`
  height: 100px;
  border: 1px solid green;
  margin: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const MailUs = styled.div`
  height: 100px;
  border: 1px solid pink;
  margin: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CallUs = styled.div`
  height: 100px;
  border: 1px solid yellow;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
