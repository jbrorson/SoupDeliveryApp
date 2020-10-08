import React from 'react';
// import SoupCard from './soupCard';
import { ContentWrap } from './contentStyles';

function Content(){
  return (
    <ContentWrap>
      <h3>First soup</h3>
      <div className="boxWrap">
        {/* <SoupCard /> */}
        {/* <SoupCard /> */}
        <div className="img">Here will be a pic</div>
        <div className="cont">some cool content</div>
      </div>
    </ContentWrap>
  )
}

export default Content; 