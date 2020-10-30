import React from 'react';
import { OrderWrap, TotalWrap, OrderHeader, TextWrap, RowWrap, SumWrap, EditBtn, YourInfo, LevInfo, LevPreOver, Greeting, OrderTo, DeliverToPerson, Final, Payment, ChoosePayment, PayPicker, ButtonArea } from './orderCofirmationStyles';

const OrderConfirmation = () => {
  return (
    <TotalWrap>
      <OrderHeader>Orderöversikt</OrderHeader>
      <OrderWrap>
        <TextWrap>
          <RowWrap>
            <h4>Soppa</h4><h4>Antal</h4><h4>Ändra</h4>
          </RowWrap>
          <RowWrap>
            <p>Lissoppa</p><p>1</p><EditBtn type="button">(|)</EditBtn>
          </RowWrap>
          <RowWrap>
            <p>Lissoppa</p><p>1</p><EditBtn type="button">(|)</EditBtn>
          </RowWrap>
          <RowWrap>
            <p>Lissoppa</p><p>1</p><EditBtn type="button">(|)</EditBtn>
          </RowWrap>

          <SumWrap>Summa att betala 240kr</SumWrap>

        </TextWrap>
      </OrderWrap>

      <OrderTo>
        <DeliverToPerson>
          <YourInfo>
            <LevPreOver>Leveransöversikt</LevPreOver>
            <EditBtn type="button">edit</EditBtn>
          </YourInfo>
          <hr />
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
          <hr />
          <Final>
            <h3>Skicka en hälsning: </h3>
            <Greeting type="textarea" placeholder="Säg något fint!?.."></Greeting>
          </Final>
        </DeliverToPerson>
      </OrderTo>

      <Payment>
        <ChoosePayment>Välj betalningsmetod</ChoosePayment>
        <ButtonArea>
          <PayPicker type="button">Swish</PayPicker>
          <PayPicker type="button">Betalkort</PayPicker>
        </ButtonArea>
      </Payment>
      <br />
    </TotalWrap>
  );
}

export default OrderConfirmation;