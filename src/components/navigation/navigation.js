import React from 'react';

import { NavStyles, NavIcons, Icons } from './navigationStyles';
// import GlobalStyle from '../../globalStyles';

function Navigation(){
  return(
    <NavStyles>
     
        {/* <GlobalStyle> */}
          <NavIcons>
            <Icons><a href="/">KTjänst</a></Icons>
            <Icons><a href="/">Meny</a></Icons>
            <Icons><a href="/">Kundvagn</a></Icons>
            <Icons><a href="/">Följ</a></Icons>
          </NavIcons>
          {/* </GlobalStyle> */}
       
      </NavStyles>
    
  )
}

export default Navigation; 