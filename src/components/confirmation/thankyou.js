import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Container, Heading, BackToStart } from './thankyouStyles';

const Thankyou = () => {
  const location = useLocation();
  useEffect(() => {
  }, [location]);

  const history = useHistory();

  return (
    <Container>
      <Heading>Tack så mycket!</Heading>
      <BackToStart type="button" alt="" onClick={() => history.push('/menu')}>Till meny</BackToStart>
    </Container>
  )
};

export default Thankyou; 