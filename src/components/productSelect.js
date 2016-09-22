import React from 'react';
;
import styles from '../sass/productSelect.scss';
import logo from '../img/crimson_logo.png';

class ProductSelect extends React.Component{
  renderProducts( product ){
    if(product.selected == true){return}
      else{
    return(
        <h4 className="productList" onClick={(event)=>this.props.productClickUpdate(product.key)}>{product.name}</h4>
      )
  }
  }

  render(){
    return(
      <div id={this.props.productContainer} onClick={this.props.handleProductClick}>
       	<img id="logo" src={logo} />
      	<h4 id="product">{this.props.product}</h4>
      	<img id="productArrow" src={this.props.productArrow} />
        <hr id={this.props.showProducts}/>
      	<div id={this.props.showProducts}>
      	   {this.props.products.map(this.renderProducts, this)}
      	</div>
      </div>
  )
  }
}


export default ProductSelect;