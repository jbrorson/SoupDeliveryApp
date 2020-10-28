import React from 'react';
import Soup from '../components/Soups/Soup';

const Menu = () => (
  <div>
    <Soup name="Tomatsoppa" price="80 kr" info="Ät dig i form med våran supertomatsoppa! 100% god!" time="Leveranstid: 30 min" />
    <Soup name="Skärgårdssoppa" price="85 kr" info="Krämig, smakrik soppa med smak av havet." time="Leveranstid: 20 min" />
    <Soup name="Purjolökssoppa" price="95 kr" info="För den jordnära. Mmmm potatis." time="Leveranstid: 20 min" />
    <Soup name="Linssoppa" price="90 kr" info="För den som tar soppa på allvar. Surpla på!" time="Leveranstid: 30 min" />
  </div>
);

export default Menu;