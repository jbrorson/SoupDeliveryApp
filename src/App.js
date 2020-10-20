import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GlobalStyle from './globalStyles';

import { AppWrap } from './appStyles';
import Header from './components/header/header';
import Content from './components/content/content';
import Navigation from './components/navigation/navigation';
// import Shop from './components/shop/shop';
import { CartBox, } from './appStyles';
import { NavIcon } from './components/header/headerStyles';
import SoupCard from './components/content/soupCard';
import Ingredients from './components/content/ingredients';
import DeliveryInfo from './components/delivery/deliveryInfo';
// import Menu from './pages/Menu';
// import Support from './pages/Support';
// import Cart from './pages/Cart';
// import Order from './pages/Order';


function App() {
  return (
    <AppWrap>
      <DeliveryInfo />
    </AppWrap>
    // <Ingredients />
    // <Shop />
    // <Router>
    //   <GlobalStyle />
    //   <AppWrap>
    //     <Header />
    //     <Content>
    //       <SoupCard />
    //     </Content>
    //     <Navigation />
    //   </AppWrap>
    // </Router>
  );
}

export default App;
