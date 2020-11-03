import React from 'react';
import { useLocation, Route, Switch, useHistory, Redirect } from 'react-router-dom';

import * as ROUTES from '../components/constants/routes';
import Menu from './Menu'
import Support from './Support';
import Cart from './Cart';
import Order from './Order';
import SoupList from '../components/Soups/SoupList';
import Ingredients from '../components/content/ingredients';
import DeliveryInfo from '../components/delivery/deliveryInfo';
import OrderConfirmation from '../components/confirmation/orderConfirmation';
import Receipt from '../components/confirmation/receipt';
import Thankyou from '../components/confirmation/thankyou';
import Landing from '../components/content/landing';
// import Soup from '../components/Soups/Soup';

const Routing = ({ menu }) => {
  const location = useLocation()
  const history = useHistory()
  // const transitions = useTransition(location, location => location.pathname, ({
  //     from: { opacity: .5, transform: `translate3d(${history.action === 'POP' ? '-100%' : '100%'},0,0`, position: 'absolute' },
  //     enter: { opacity: 1, transform: 'translate3d(0%,0,0', position: 'static' },
  //     leave: { opacity: .5, transform: `translate3d(${history.action === 'POP' ? '100%' : '-100%'},0,0`, position: 'absolute' },
  // }))

  return (
    <>
      {
        // transitions.map(({ item: location, props, key }) => (
        // <div style={props} key={key}>
        <div>
          <Switch location={location}>
            <Route exact path={ROUTES.SOUPLIST} render={() => <Menu menu={SoupList} />} />
            <Route path={ROUTES.SUPPORT} component={Support} />
            <Route path={ROUTES.CART} component={Cart} />
            <Route path={ROUTES.ORDER} component={Order} />
            <Route path={ROUTES.MENU} component={SoupList} />
            <Route path={ROUTES.INGREDIENTS} component={Ingredients} />
            <Route path={ROUTES.DELIVERYINFO} component={DeliveryInfo} />
            <Route path={ROUTES.ORDERCONFIRMATION} component={OrderConfirmation} />
            <Route path={ROUTES.RECEIPT} component={Receipt} />
            <Route path={ROUTES.THANKYOU} component={Thankyou} />
            {/* <Route path={ROUTES.LANDING} component={Landing} /> */}
            <Redirect from={'*'} to={ROUTES.MENU} />
          </Switch>
        </div>
        // ))
      }
    </>
  )
}

export default Routing;