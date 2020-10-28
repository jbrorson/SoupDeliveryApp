import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Ingredients from './components/content/ingredients';
// import history from './components/History';

// const rootElement = document.getElementById("root");

// const Header = () => {
//   const location = useLocation();
//   const history = useHistory();

//   const handleBackClick = () => {
//     history.goBack();
//   }

//   const atAboutPage = location.pathname.includes("/ingredients");
//   return atAboutPage && <button onClick={handleBackClick}>Back</button>
// };

ReactDOM.render(
  // <Router>
  //   <Header />
  //   <Switch>
  //     <Route exact path="/" component={App} />
  //     <Route path="/ingredients/:name" component={Ingredients} />
  //   </Switch>

  // </Router>
  <App />

  , document.getElementById('root'));
