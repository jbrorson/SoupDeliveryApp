import React from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

import GlobalStyle from './globalStyles';
import { AppWrap } from './appStyles';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import Menu from './pages/Menu';
import Support from './pages/Support';
import { Cart } from './pages/Cart';
import Order from './pages/Order';
// import Soup from './components/Soups/Soup';
import { CartProvider } from './pages/CartContext';
import { SoupProvider } from './components/Soups/SoupContext';
import SoupList from './components/Soups/SoupList';
import Ingredients from './components/content/ingredients';
import DeliveryInfo from './components/delivery/deliveryInfo';
import OrderConfirmation from './components/confirmation/orderConfirmation';

function App() {
  // const history = useHistory();

  // const handleClick = name => {
  //   history.push(`"/ingredients"`);
  // };
  // return (
  //   <div>
  //     <h1>hello</h1>
  //     <h2>denna skiten suger så jävla hårt</h2>
  //     <button onClick={() => handleClick("Denna component bör flyttas")}>To about</button>
  //   </div>);

  return (
    <Router>
      <AppWrap>
        <GlobalStyle />
        <CartProvider>
          <SoupProvider>
            <Header />
            {/* <SoupList /> */}
            <Switch>
              <Route path="/menu" component={SoupList} />
              <Route path="/cart" component={Cart} />
              <Route path="/support" component={Support} />
              <Route path="/order" component={Order} />
            </Switch>
            <Navigation />
          </SoupProvider>
        </CartProvider>
      </AppWrap>
    </Router>

    // <OrderConfirmation />
  );
}


export default App;
