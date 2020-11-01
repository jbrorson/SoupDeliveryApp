import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Soup from './Soup';
import uuid from 'react-uuid';
import Tomat from '../../images/tomatsoppa.jpg';
import Skargard from '../../images/skargardssoppa.jpg';
import Purjo from '../../images/potatispurjosoppa.jpg';
import Linser from '../../images/linssoppa.jpg';

const SoupList = () => {
  const location = useLocation();
  useEffect(() => {
    // const currentPath = location.name;
    // const searchParams = new URLSearchParams(location.search);
  }, [location]);
  // const history = useHistory();
  // const goSoupList = () => {
  //   props.history.push






  const database = [

    {
      name: "Tomatsoppa",
      price: 80,
      info: "Ät dig i form med våran supertomatsoppa! 100% god!",
      time: "Leveranstid: 30 min",
      id: uuid(),
      image: Tomat
    },
    {
      name: "Skärgårdssoppa",
      price: 85,
      info: "Krämig, smakrik soppa med smak av havet.",
      time: "Leveranstid: 20 min",
      id: uuid(),
      image: Skargard
    },
    {
      name: "Purjolökssoppa",
      price: 95,
      info: "För den jordnära. Mmmm potatis.",
      time: "Leveranstid: 20 min",
      id: uuid(),
      image: Purjo
    },
    {
      name: "Linssoppa",
      price: 90,
      info: "För den som tar soppa på allvar. Surpla på!",
      time: "Leveranstid: 30 min",
      id: uuid(),
      image: Linser
    },
  ]
  return (
    <div>
      {
        database.map(item => (
          <Soup name={item.name} price={item.price} info={item.info} time={item.time} key={item.id} image={item.image} />
        ))
      }
    </div>
  )
}

export default SoupList;
