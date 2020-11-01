import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Content, PageHeading, Paragraph, Faq, ContactSection, VisitUs, MailUs, CallUs } from './SupportStyles';

const Support = () => {
  const location = useLocation();

  return (
    <Container>
      <Content>
        <PageHeading>Kontakta oss</PageHeading>
        <Faq>FAQ</Faq>
        <Paragraph>Vad är souperhealthy?</Paragraph>
        <Paragraph>Kan jag betala med swish?</Paragraph>
        <Paragraph>Hur skapar jag ett konto?</Paragraph>
        <Paragraph>Vad kostar leveransen?</Paragraph>
        <Paragraph>Var levererar ni?</Paragraph>
        <Paragraph>Jag vill jobba hos er!</Paragraph>
      </Content>
      <ContactSection>
        <VisitUs>
          <h3>Besök oss!</h3>
          <p>Av soppa blir du varm, det blir du även av ett besök i vår fina restaurang, vi finns på Odengatan 5.
Varmt välkommen förbi!</p>
        </VisitUs>
        <MailUs>
          <h3>Kom i kontakt</h3>
          <h5>Inte fått svar på dina frågor?</h5>
          <p>Kontakta oss via mail, vi återkopplar alltid inom 24 timmar.</p>
          <h4>support@souperhealthy.com</h4>
        </MailUs>
        <CallUs>
          <h3>Slå en signal</h3>
          <h5>08-230230230</h5>
        </CallUs>
      </ContactSection>
    </Container>
  )
};

export default Support;