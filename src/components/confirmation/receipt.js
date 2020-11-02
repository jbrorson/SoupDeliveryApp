import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Invoice from '../../Icons/invoice.svg';
import CommentIcon from '../../Icons/comment.svg';
import SadIcon from '../../Icons/sad_face.svg';
import HappyIcon from '../../Icons/happy_face.svg';
import {
  Container,
  Heading,
  Heading2,
  ReceiptWrap,
  ReceiptLine,
  OrderId,
  Info,
  Total,
  Feedback,
  GiveFeedback,
  Good,
  Bad,
  LeaveFeedback,
  Background,
  Icon,
  BtnArea
} from './receiptStyles';

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
        <Icon>
          <img src={Invoice} style={{ height: '40px', width: '40px' }} />
        </Icon>
        <ReceiptLine>
          <p style={{ color: 'gray' }}>Kvitto</p>
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
        <OrderId style={{ color: 'gray' }}>
          <p>orderId:<br />
          #00217</p>
        </OrderId>
        <Info>Kvittot har även skickats till angiven mailadress</Info>
        <Total>Total summa: 250kr</Total>
      </ReceiptWrap>
      <Feedback>
        <Heading>Feedback
          <img src={CommentIcon} alt="" style={{ height: '30px', paddingLeft: '10px' }} />
        </Heading>
        <Heading2>Berätta gärna om din upplevelse för oss</Heading2>
        <GiveFeedback>
          <Bad type="button" onClick={() => history.push('/thankyou')}>
            <p>Missnöjd</p>
            <img src={SadIcon} style={{ height: '35px', width: '35px' }} />
          </Bad>
          <Good type="button" onClick={() => history.push('/thankyou')}>
            <p>Nöjd</p>
            <img src={HappyIcon} style={{ height: '35px', width: '35px' }} />
          </Good>
        </GiveFeedback>
        <Background>
          <LeaveFeedback type="text" placeholder="Lämna frivillig feedback" />
          <BtnArea>
            <button onClick={() => history.push('/thankyou')}>Sänd</button>
          </BtnArea>
        </Background>
      </Feedback>
    </Container>
  )
};

export default Receipt;