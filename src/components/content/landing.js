import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Heading } from './landingStyles';

const Landing = () => {
  const location = useLocation();
  useEffect(() => {
  }, [location]);

  return (
    <Container>
      <Heading>Souper Healthy</Heading>
    </Container>
  )
};

export default Landing;