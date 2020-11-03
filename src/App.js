import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './pages/Routes';
import GlobalStyle from './globalStyles';
import { AppWrap } from './appStyles';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import { CartProvider } from './pages/CartContext';
import { SoupProvider } from './components/Soups/SoupContext';

function App() {
  // const [showPopup, setShowPopup] = useState(false);

  // const openPopup = () => {
  //   setShowPopup(prev => !prev);
  // };
  // const history = useHistory();

  return (
    <Router>
      <GlobalStyle />
      <AppWrap>
        <CartProvider>
          <SoupProvider>
            <Header />
            <Routes />
            <Navigation />
          </SoupProvider>
        </CartProvider>
      </AppWrap>
    </Router>
  );
}


export default App;
