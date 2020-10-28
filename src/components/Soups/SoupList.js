import React from 'react';
import Soup from './Soup';

const SoupList = () => {

  const database = [

    {
      name: "Tomatsoppa",
      price: 80,
      info: "Ät dig i form med våran supertomatsoppa! 100% god!",
      time: "Leveranstid: 30 min"
    },
    {
      name: "Skärgårdssoppa",
      price: 85,
      info: "Krämig, smakrik soppa med smak av havet.",
      time: "Leveranstid: 20 min"
    },
    {
      name: "Purjolökssoppa",
      price: 95,
      info: "För den jordnära. Mmmm potatis.",
      time: "Leveranstid: 20 min"
    },
    {
      name: "Linssoppa",
      price: 90,
      info: "För den som tar soppa på allvar. Surpla på!",
      time: "Leveranstid: 30 min"
    },
  ]
  return (
    <div>
      {
        database.map(item => (
          <Soup name={item.name} price={item.price} info={item.info} time={item.time} key={item.id} />
        ))
      }
    </div>
  )
}

// const SoupList = () => {
//   const value = useContext(SoupContext);
//   return (
//     <div>
//       <Soup />
//       <h1>{value}</h1>
//       {soups.map(soup => (
//         <Soup name={soup.name} price={soup.price} key={soup.id} />
//       ))}
//     </div>
//   );
// }

export default SoupList;
