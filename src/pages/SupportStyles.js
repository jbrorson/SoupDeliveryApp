import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)'
}

export const Container = styled.div`
  height: 100%; 
  padding: 20px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 100px;
  padding: 30px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px; 

  ${media.desktop} {
      width: 45%;
      margin-top: 180px;
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
  margin-bottom: 120px;
  padding: 20px; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  flex-direction: column;
  border: 1px solid lightgray; 
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

${media.desktop} {
    width: 45%;
  }
`;

export const VisitUs = styled.div`
  margin: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;

  h3{
    display: flex; 
    justify-content: center;
    padding: 10px;
  }
`;

export const MailUs = styled.div`
  margin-top: 10px;
  
  margin-bottom: 10px;

  h3{
    display: flex; 
    justify-content: center;
  }

  h5{
    display: flex; 
    justify-content: center;
    padding-bottom: 10px;
    font-style: italic;
  }

  h4{
    display: flex; 
    justify-content: center;
    padding: 10px;
    border-bottom: 1px solid lightgray;
  }
`;

export const CallUs = styled.div`
  margin: 10px;
  padding-top: 10px;

  h5{
   
    padding-top: 10px;
  
  }
`;
