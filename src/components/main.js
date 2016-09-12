import React from 'react';

import HeadContainer from './HeadContainer';
import Drawer from './drawer';


class Main extends React.Component {
  constructor(props) {
    super(props);
	this.state = {product: 'Forsight', team: 'Nike A Team', open: 'drawerClosed'};
	this.handleBurgerClick = this.handleBurgerClick.bind(this);
  }

  handleBurgerClick(){
  	if(this.state.open === 'drawerClosed'){
  		this.setState({open: 'drawerOpen'})
  	}
  	else{this.setState({open: 'drawerClosed'})}
  }

	render() {
		return <div>
			<HeadContainer product={this.state.product} team={this.state.team} handleBurgerClick={this.handleBurgerClick}/>
			<Drawer open={this.state.open}/>
		</div>	
	}
};

export default Main;