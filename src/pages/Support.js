import React from 'react';
import { PageWrap, PageCard, PageHeading, Paragraph, Faq } from './PageStyles';

const Support = () => {
  return (
    <PageWrap>
      <PageCard>
        <PageHeading>Kontakta oss</PageHeading>
        <Faq>FAQ</Faq>
        <Paragraph>Vad är souperhealthy?</Paragraph>
        <Paragraph>Kan jag betala med swish?</Paragraph>
        <Paragraph>Hur skapar jag ett konto?</Paragraph>
        <Paragraph>Vad kostar leveransen?</Paragraph>
        <Paragraph>Var levererar ni?</Paragraph>
        <Paragraph>Jag vill jobba hos er!</Paragraph>
      </PageCard>
      <div>Besök oss
      <p>Av soppa blir du varm, det blir du även av ett besök i vår fina restaurang, vi finns på Odengatan 5.
Varmt välkommen förbi!</p>
      </div>
      <div>Maila oss
      <h5>Inte fått svar på dina frågor?</h5>
        <p>Kontakta oss via mail, vi återkopplar alltid inom 24 timmar.</p>
        <p>support@souperhealthy.com</p>
      </div>
      <div>Ring oss
      <h5>08-230230230</h5>
      </div>
    </PageWrap>
  )
};

export default Support;