import React from 'react';
import { Container, Order, Heading, OrderContent, Content, SumWrap, DeliveryInfo, EditBtn, YourInfo, LevInfo, LevPreOver, Greeting, DeliverTo, Payment, ChoosePayment, PayPicker, ButtonArea } from './orderCofirmationStyles';

const OrderConfirmation = () => {
  return (
    <Container>
      <Heading>Orderöversikt</Heading>
      <Order>
        <OrderContent>
          <Content>
            <h4>Soppa</h4><h4>Antal</h4><h4>Ändra</h4>
          </Content>
          <Content>
            <p>Lissoppa</p><p>1</p><EditBtn type="button">Ändra</EditBtn>
          </Content>
          <Content>
            <p>Lissoppa</p><p>1</p><EditBtn type="button">Ändra</EditBtn>
          </Content>
          <Content>
            <p>Lissoppa</p><p>1</p><EditBtn type="button">Ändra</EditBtn>
          </Content>
          <SumWrap>Summa att betala 240kr</SumWrap>
        </OrderContent>
      </Order>
      <DeliveryInfo>
        <DeliverTo>
          <YourInfo>
            <h2>Leveransöversikt</h2>
            <button type="button">Ändra</button>
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
            <h3>Hälsning</h3>
            <p>Här kommer lite uppiggande soppa som du kan värma dig med!</p>
          </Greeting>
        </DeliverTo>
      </DeliveryInfo>
      <Payment>
        <ChoosePayment>Välj betalningsmetod</ChoosePayment>
        <ButtonArea>
          <PayPicker type="button">Swish</PayPicker>
          <PayPicker type="button">Betalkort</PayPicker>
        </ButtonArea>
      </Payment>
    </Container>
  );
}

export default OrderConfirmation;