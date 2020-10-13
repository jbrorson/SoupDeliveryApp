import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyle from './globalStyles';

import { AppWrap } from './appStyles';
import Header from './components/header/header';
import Content from './components/content/content';
import Navigation from './components/navigation/navigation';
// import Shop from './components/shop/shop';
import {CartBox, } from './appStyles';
import { NavIcon } from './components/header/headerStyles';
import SoupCard from './components/content/soupCard';


function App() {
  return (
    <Router>
    {/* <Shop /> */}
     <GlobalStyle />
        <AppWrap>
          {/* <CartBox>
                <ul className="HeaderLinks">
                  <NavIcon />
                  <li><a href="/">Kundvagn</a></li>
                </ul>
              </CartBox> */}
            <Header />
          <Content>
          <SoupCard />
          </Content>
        <Navigation />
      </AppWrap>
    </Router>
  );
}

export default App;
