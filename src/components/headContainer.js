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
        <img onClick={this.props.handleBurgerClick} id="burger" src={burger} />
        <ProductSelect 
          product={this.props.product} 
          handleProductClick={this.props.handleProductClick} 
          productArrow={this.props.productArrow}
          showProducts={this.props.showProducts}
          productContainer={this.props.productContainer}
          productClickUpdate={this.props.productClickUpdate}
          products={this.props.products}
        />
        <InitialIcon 
          handleInitialsClick={this.props.handleInitialsClick} 
          showProfile={this.props.showProfile}
          team={this.props.team}
          teamArrow={this.props.teamArrow}
          handleTeamClick={this.props.handleTeamClick}
          teamContainer={this.props.teamContainer}
          teams={this.props.teams}
          showTeamsSettings={this.props.showTeamsSettings}
          teamInSettingsClickUpdate={this.props.teamClickUpdate}
          handleTeamInSettingsClick={this.props.handleTeamInSettingsClick}
        />
        <TeamSelect 
          team={this.props.team} 
          teamArrow={this.props.teamArrow}
          handleTeamClick={this.props.handleTeamClick}
          teamContainer={this.props.teamContainer}
          showTeams={this.props.showTeams}
          teamClickUpdate={this.props.teamClickUpdate}
          teams={this.props.teams}
        />
       
      </div>
  )
  }
}


export default HeadContainer;