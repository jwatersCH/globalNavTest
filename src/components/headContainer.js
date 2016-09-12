import React from 'react';

import styles from '../sass/headContainer.scss';
import burger from '../img/Menu.svg';
import logo from '../img/crimson_logo.png';
import ProductSelect from './productSelect.js';
import TeamSelect from './teamSelect.js';
import InitialIcon from './initialIcon.js';

class HeadContainer extends React.Component{
  render(){
    return(
      <div id="container">
        <img id="burger" src={burger} />
        <img id="logo" src={logo} />
        <ProductSelect product={this.props.product}/>
         <InitialIcon />
        <TeamSelect team={this.props.team} />
       
      </div>
  )
  }
}


export default HeadContainer;