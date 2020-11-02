import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Container, Heading, Heading2, ReceiptWrap, ReceiptLine, OrderId, Info, Total, Feedback, GiveFeedback, Good, Bad, LeaveFeedback, Background } from './receiptStyles';

const Receipt = () => {
  const location = useLocation();
  useEffect(() => {
  }, [location]);

  const history = useHistory();

  return (
    <Container>
      <Heading>Tack för din beställning!</Heading>
      <Heading2>Order påväg till vald leveransadress</Heading2>
      <ReceiptWrap>
        <ReceiptLine>
          <p>Kvitto</p>
        </ReceiptLine>
        <ReceiptLine>
          <p>Leveransadress</p>
          <h4>Karlavägen 5<br />Stockholm</h4>
        </ReceiptLine>
        <ReceiptLine>
          <p>Mottagare</p>
          <p>Pelle Pålsson</p>
        </ReceiptLine>
        <ReceiptLine>
          <p>Datum/tid</p>
          <p>22 Nov 2020<br />kl 'snarast'</p>
        </ReceiptLine>
        <ReceiptLine>
          <p>Order</p>
          <p>Linssoppa 2st<br />Bröd ingår</p>
        </ReceiptLine>
        <OrderId>
          <p>orderId:<br />
          #00217</p>
        </OrderId>
        <Info>Kvittot har även skickats till angiven mailadress</Info>
        <Total>Total summa: 250kr</Total>
      </ReceiptWrap>
      <Feedback>
        <Heading>Feedback</Heading>
        <Heading2>Berätta gärna om din upplevelse för oss</Heading2>
        <GiveFeedback>
          <Bad type="button" onClick={() => history.push('/thankyou')}>Missnöjd</Bad>
          <Good type="button" onClick={() => history.push('/thankyou')}> Nöjd</Good>
        </GiveFeedback>
        <Background>
          <LeaveFeedback type="text" placeholder="Lämna frivillig feedback" />
        </Background>
      </Feedback>
    </Container>
  )
};

export default Receipt;