import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import UserIcon from '../../Icons/guest_1.svg';
import MailIcon from '../../Icons/mail.svg';
import PhoneIcon from '../../Icons/telephone.svg';
import AddressIcon from '../../Icons/post-number.svg';
import {
  DeliveryWrap,
  FormInput,
  InputInfo,
  ContactKitchen,
  FormHeader,
  TimeSection,
  TimeBox,
  Check,
  ChoseTime,
  Button,
  Next,
  Background
} from './deliveryInfoStyles';


function DeliveryInfo() {
  const location = useLocation();
  useEffect(() => {
  }, [location]);

  const history = useHistory();

  return (
    <DeliveryWrap>
      <div>
        <FormHeader>Leveransinformation</FormHeader>
        <InputInfo>
          <img src={UserIcon} style={{ height: '20px', width: '20px' }} /> Namn *</InputInfo>
        <FormInput type="text" placeholder="För-och efternamn" /*value={this.state.name}*/ />
        <InputInfo>
          <img src={MailIcon} style={{ height: '20px', width: '20px' }} /> Email *</InputInfo>
        <FormInput type="text" placeholder="Email" />
        <InputInfo>
          <img src={PhoneIcon} style={{ height: '20px', width: '20px' }} /> Telefon *</InputInfo>
        <FormInput type="text" placeholder="Telefon" />
        <InputInfo>
          <img src={AddressIcon} style={{ height: '20px', width: '20px' }} /> Adress *</InputInfo>
        <FormInput type="text" placeholder="Adress" />
        <InputInfo>
          <img src={AddressIcon} style={{ height: '20px', width: '20px' }} /> Postnummer *</InputInfo>
        <FormInput type="text" placeholder="PostNr" />
        <InputInfo>
          <img src={AddressIcon} style={{ height: '20px', width: '20px' }} /> Ort *</InputInfo>
        <FormInput type="text" placeholder="Ort" />
        <Background>
          <h4>Meddela budet</h4>
          <ContactKitchen type="text" placeholder="Information till bud ex portkod, våning.." />
        </Background>
      </div>
      <TimeSection>
        <h4>Välj leveransdag/tid *</h4>
        <TimeBox>
          <ChoseTime>Snarast</ChoseTime>
          <Check type="checkbox"></Check>
        </TimeBox>
        <TimeBox>
          <ChoseTime>Upphämtning</ChoseTime>
          <Check type="checkbox" alt=""></Check>
        </TimeBox>
        <TimeBox>
          <ChoseTime>Annat datum/tid</ChoseTime>
          <Check type="checkbox" alt=""></Check>
        </TimeBox>
      </TimeSection>
      <Next>
        <Button type="button" alt="" onClick={() => history.push('/orderConfirmation')}>Nästa</Button>
      </Next>
    </DeliveryWrap>
  );
}

export default DeliveryInfo;