import React from 'react';

import styles from '../sass/productSelect.scss';
import dropdown from '../img/arrow_dropdown.svg';
import logo from '../img/crimson_logo.png';

class ProductSelect extends React.Component{
  render(){
    return(
      <div id="productSelectContainer">
       	<img id="logo" src={logo} />
      	<h4 id="product">{this.props.product}</h4>
      	<img id="productArrow" src={dropdown} />
      </div>
  )
  }
}


export default ProductSelect;