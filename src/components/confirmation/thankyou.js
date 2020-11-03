import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Container, Heading, BackToStart, Heading2 } from './thankyouStyles';

const Thankyou = () => {
  const location = useLocation();
  useEffect(() => {
  }, [location]);

  const history = useHistory();

  return (
    <Container>
      <Heading>Souper Healthy</Heading>
      <Heading2>Tack för din feedback</Heading2>
      <p>Vi ses snart igen</p>
      <BackToStart type="button" alt="" onClick={() => history.push('/landing')}>Tillbaka till meny</BackToStart>
    </Container>
  )
};

export default Thankyou; 