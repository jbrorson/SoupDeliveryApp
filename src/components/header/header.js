import React /*{ useState }*/ from 'react';
import { HeaderWrap, NavIcon, HeaderAmmount } from './headerStyles';
import { Route } from 'react-router-dom';
// import Shop from '../shop/shop';
// import { ShoppingBag } from '@styled-icons/boxicons-regular';

const Header = () => (
  <HeaderWrap>
    {/* <CartBox> */}
    <NavIcon />
    <HeaderAmmount>Summa: 0 kr</HeaderAmmount>
    {/* <a href=""><ShoppingBag /></a> */}
    {/* <ul className="HeaderLinks">
        <li><a href="/">Kundvagn</a></li>
      </ul> */}
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
{/* </NavIcon> */ }
//     </HeaderWrap>
//   )
// }

export default Header; 