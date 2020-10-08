import React from 'react';
import { SoupWrap } from './soupCardStyles';

function SoupCard(){
  return (
    <SoupWrap>
      <div className="SoupImg">Here will be a pic</div>
      <div className="info">some content</div>
    </SoupWrap>
  )
}

export default SoupCard;