import React from 'react';
import { DeliveryWrap, FormInput, StyledForm, InputInfo, ContactKitchen, FormHeader } from './deliveryInfoStyles';
import Navigation from '../navigation/navigation';
import { AppWrap } from '../../appStyles';

function DeliveryInfo() {
  return (
    <DeliveryWrap>
      <StyledForm>
        <FormHeader>Leveransinformation</FormHeader>
        <InputInfo>[ ] Namn *</InputInfo>
        <FormInput type="text" placeholder="Namn" /*value={this.state.name}*/ />
        <InputInfo>[ ] Email *</InputInfo>
        <FormInput type="text" placeholder="Email" />
        <InputInfo>[ ] Telefon *</InputInfo>
        <FormInput type="text" placeholder="Telefon" />
        <InputInfo>[ ] Adress *</InputInfo>
        <FormInput type="text" placeholder="Adress" />
        <InputInfo>[ ] Postnummer *</InputInfo>
        <FormInput type="text" placeholder="PostNr" />
        <InputInfo>[ ] Ort *</InputInfo>
        <FormInput type="text" placeholder="Ort" />
        <InputInfo>[ ] Meddela köket</InputInfo>
        <ContactKitchen type="text" placeholder="Skriv här vid särskilt önskemål till köket" />
      </StyledForm>
    </DeliveryWrap>
  );
}

export default DeliveryInfo;