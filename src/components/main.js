import React from 'react';

import HeadContainer from './HeadContainer';


class Main extends React.Component {
  constructor(props) {
    super(props);
	this.state = {product: 'Forsight', team: 'Nike A Team'};

  }
	render() {
		return <div>
			<HeadContainer product={this.state.product} team={this.state.team} />
		</div>	
	}
};

export default Main;