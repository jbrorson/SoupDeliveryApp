import React, { useState } from 'react';
import { HeaderWrap, NavIcon} from './headerStyles';
// import Shop from '../shop/shop';

const Header = props => (
  <HeaderWrap>
    {/* <CartBox> */}
      <ul className="HeaderLinks">
        <NavIcon />
        <li><a href="/">Kundvagn</a></li>
      </ul>
    {/* </CartBox> */}
  </HeaderWrap>
)
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
 

  // return (
  //   <HeaderWrap>
      {/* <NavIcon onClick={handleClick}>
        {click ? <Shop /> : !true}; */}
        // <CartBox />
      {/* </NavIcon> */}
//     </HeaderWrap>
//   )
// }

export default Header; 