import React from 'react';

import styles from '../sass/card.scss';


class Card extends React.Component{


  render(){
    return(
      <div id="cardContainer">
        <div id="cardHeader">
          <div id="cardTitle">
            <h2>Label</h2>
          </div>
          <div id="cardSubtitle">
            <h6>Card Subtitle</h6>
          </div>
        </div>
        <div id="graphic">
          <img src="http://media.infragistics.com/community/Release/13.1/XAML/DoughnutChart/XAML_hierarchical_dchart.png" />
        </div>
      </div>
  )
  }
}


export default Card;