import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

import GlobalStyle from './globalStyles';
import { AppWrap } from './appStyles';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
// import Menu from './pages/Menu';
import Support from './pages/Support';
import Cart from './pages/Cart';
import Order from './pages/Order';
// import Soup from './components/Soups/Soup';
import { CartProvider } from './pages/CartContext';
import { SoupProvider } from './components/Soups/SoupContext';
import SoupList from './components/Soups/SoupList';
import Ingredients from './components/content/ingredients';
import DeliveryInfo from './components/delivery/deliveryInfo';
import OrderConfirmation from './components/confirmation/orderConfirmation';
import Receipt from './components/confirmation/receipt';
import Thankyou from './components/confirmation/thankyou';
import Landing from './components/content/landing.js';

function App() {
  // const [showPopup, setShowPopup] = useState(false);

  // const openPopup = () => {
  //   setShowPopup(prev => !prev);
  // };
  // const history = useHistory();

  return (
    <Router>
      <AppWrap>
        <GlobalStyle />
        <CartProvider>
          <SoupProvider>
            <Header />
            <Switch>
              <Route exact path="/" component={SoupList} />
              <Route path="/menu" component={SoupList} />
              <Route path="/cart" component={Cart} />
              <Route path="/support" component={Support} />
              <Route path="/order" component={Order} />
              <Route path="/deliveryInfo" component={DeliveryInfo} />
              <Route path="/ingredients" component={Ingredients} />
              <Route path="/orderConfirmation" component={OrderConfirmation} />
              <Route path="/receipt" component={Receipt} />
              <Route path="/thankyou" component={Thankyou} />
              <Route path="/landing" component={Landing} />
            </Switch>
            <Navigation />
          </SoupProvider>
        </CartProvider>
      </AppWrap>
    </Router>
  );
}


export default App;
