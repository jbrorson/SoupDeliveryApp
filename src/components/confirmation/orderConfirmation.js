import React, { useEffect } from 'react';
import { Container, Order, Heading, OrderContent, Content, SumWrap, DeliveryInfo, EditBtn, YourInfo, LevInfo, LevPreOver, Greeting, DeliverTo, Payment, ChoosePayment, PayPicker, ButtonArea, Message, CreditCard } from './orderCofirmationStyles';
import { useHistory, useLocation } from 'react-router-dom';
import SwishIcon from '../../images/swish.png';
import MastercardIcon from '../../Icons/mastercard.svg';
import Creditcard from '../../Icons/creditcard.svg';
import Edit from '../../Icons/editbutton.svg';

const OrderConfirmation = () => {
  const history = useHistory();

  const location = useLocation();
  useEffect(() => {
  }, [location]);

  return (
    <Container>
      <Heading>Orderöversikt</Heading>
      <Order>
        <OrderContent>
          <Content>
            <h4>Soppa</h4><h4>Antal</h4><h4>Ändra</h4>
          </Content>
          <Content>
            <p>Lissoppa</p><p>1</p>
            <img src={Edit} alt="" style={{ height: '25px', width: '25px' }} />
          </Content>
          <Content>
            <p>Lissoppa</p><p>1</p>
            <img src={Edit} alt="" style={{ height: '25px', width: '25px' }} />
          </Content>
          <Content>
            <p>Lissoppa</p><p>1</p>
            <img src={Edit} alt="" style={{ height: '25px', width: '25px' }} />
          </Content>
          <SumWrap>Summa att betala 240kr</SumWrap>
        </OrderContent>
      </Order>
      <DeliveryInfo>
        <DeliverTo>
          <YourInfo>
            <h2>Leveransöversikt</h2>
            <img src={Edit} alt="" style={{ height: '25px', width: '25px' }} />
          </YourInfo>
          <LevInfo>
            <p>Namn</p><p>Namn</p>
          </LevInfo>
          <LevInfo>
            <p>Adress</p><p>...vägen 1</p>
          </LevInfo>
          <LevInfo>
            <p>Postnummer</p><p>12312</p>
          </LevInfo>
          <LevInfo>
            <p>Ort</p><p>Orten</p>
          </LevInfo>
          <LevInfo>
            <p>Telefon</p><p>Telefon</p>
          </LevInfo>
          <Greeting>
            <h3>Meddelande till bud</h3>
            <Message>Portkod 12213, 2 trappor upp, hiss finns</Message>
          </Greeting>
        </DeliverTo>
      </DeliveryInfo>
      <Payment>
        <CreditCard>
          <img src={Creditcard} alt="" />
        </CreditCard>
        <ChoosePayment>Välj betalningsmetod</ChoosePayment>
        <ButtonArea>
          <PayPicker type="button" alt="" onClick={() => history.push('/receipt')}><img src={SwishIcon} style={{ height: '30px', width: '30px' }} />Swish</PayPicker>
          <PayPicker type="button" alt="" onClick={() => history.push('/receipt')}><img src={MastercardIcon} style={{ height: '30px', width: '30px' }} />Betalkort</PayPicker>
        </ButtonArea>
      </Payment>
    </Container>
  );
}

export default OrderConfirmation;