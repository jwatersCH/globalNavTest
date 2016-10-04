import React from 'react';

import HeadContainer from './HeadContainer';
import Drawer from './drawer';
import BarChart from './barChartTwo';
import Card from './card';
import Slider from 'material-ui/Slider';

import dropup from '../img/arrow_dropup.svg';
import dropdown from '../img/arrow_dropdown.svg';

import products from '../stores/products';
import teams from '../stores/teams';

import fonts from '../sass/fonts.scss';


class Main extends React.Component {
  constructor(props) {
    super(props);
	this.state = {
            product: 'Forsight', 
            listedProducts: products, 
            team: 'Team A', 
            listedTeams: teams, 
            open: 'drawerClosed', 
            productArrow: dropdown, 
            teamArrow: dropdown, 
            showProducts: 'otherProductsHide', 
            showTeams: 'otherTeamsHide', 
            showTeamsSettings: 'teamListInSettingsHide', 
            productContainer: 'productSelectContainer', 
            teamContainer: 'teamSelectContainer', 
            showProfile: 'profileHidden',
            primaryColorOne: '#eeeeee',
            secondaryColorOne: '#dddddd'
          };
	this.handleBurgerClick = this.handleBurgerClick.bind(this);
  this.handleProductClick = this.handleProductClick.bind(this);
  this.handleTeamClick = this.handleTeamClick.bind(this);
  this.handleInitialsClick = this.handleInitialsClick.bind(this);
  this.closeAll = this.closeAll.bind(this);
  this.productClickUpdate = this.productClickUpdate.bind(this);
  this.teamClickUpdate = this.teamClickUpdate.bind(this);
  this.teamInSettingsClickUpdate = this.teamInSettingsClickUpdate.bind(this);
  this.handleTeamInSettingsClick = this.handleTeamInSettingsClick.bind(this);
  this.capture = this.capture.bind(this);
  this.captureSecondary = this.captureSecondary.bind(this);
  }

  handleBurgerClick(){
  	if(this.state.open === 'drawerClosed'){
  		this.setState({open: 'drawerOpen'})
      this.setState({productArrow: dropdown})
      this.setState({showProducts: 'otherProductsHide'})
      this.setState({productContainer: 'productSelectContainer'})
      this.setState({teamContainer: 'teamSelectContainer'})
      this.setState({teamArrow: dropdown})
      this.setState({showTeams: 'otherTeamsHide'})
      this.setState({showProfile: 'profileHidden'})
      this.setState({showTeamsSettings: 'teamListInSettingsHide'})
  	}
  	else{this.setState({open: 'drawerClosed'})}
  }

  handleProductClick(){
    if(this.state.productArrow == dropdown){
      this.setState({productArrow: dropup})
      this.setState({showProducts: 'otherProducts'})
      this.setState({productContainer: 'productSelectContainerOpen'})
      this.setState({open: 'drawerClosed'})
      this.setState({teamContainer: 'teamSelectContainer'})
      this.setState({teamArrow: dropdown})
      this.setState({showTeams: 'otherTeamsHide'})
      this.setState({showProfile: 'profileHidden'})
      this.setState({showTeamsSettings: 'teamListInSettingsHide'})
    }
    else{
      this.setState({productArrow: dropdown})
      this.setState({showProducts: 'otherProductsHide'})
      this.setState({productContainer: 'productSelectContainer'})
    }
  }

  productClickUpdate( item ){
    for(var i=0; i < this.state.listedProducts.length; i++){
      if(this.state.listedProducts[i].key == item){
        this.state.listedProducts[i].selected = true
        this.setState({product: this.state.listedProducts[i].name})
      }
      else{this.state.listedProducts[i].selected = false}
    }
  }


  handleTeamClick(){
    if(this.state.teamArrow == dropdown){
      this.setState({teamArrow: dropup})
      this.setState({showTeams: 'otherTeams'})
      this.setState({teamContainer: 'teamSelectContainerOpen'})
      this.setState({open: 'drawerClosed'})
      this.setState({showProfile: 'profileHidden'})
      this.setState({productArrow: dropdown})
      this.setState({showProducts: 'otherProductsHide'})
      this.setState({productContainer: 'productSelectContainer'})
    }
    else{
      this.setState({teamArrow: dropdown})
      this.setState({showTeams: 'otherTeamsHide'})
      this.setState({teamContainer: 'teamSelectContainer'})

    }
  }

  handleTeamInSettingsClick(){
    if(this.state.showTeamsSettings == 'teamListInSettingsHide'){
    this.setState({showTeamsSettings: 'teamListInSettings'})
    }
    else{this.setState({showTeamsSettings: 'teamListInSettingsHide'})}
  }

  teamClickUpdate( item ){
    for(var i=0; i < this.state.listedTeams.length; i++){
      if(this.state.listedTeams[i].key == item){
        this.state.listedTeams[i].selected = true
        this.setState({team: this.state.listedTeams[i].name})
      }
      else{this.state.listedTeams[i].selected = false}
    }
  }

    teamInSettingsClickUpdate( item ){
    for(var i=0; i < this.state.listedTeams.length; i++){
      if(this.state.listedTeams[i].key == item){
        this.state.listedTeams[i].selected = true
        this.setState({team: this.state.listedTeams[i].name})
      }
      else{this.state.listedTeams[i].selected = false}
    }
  }


  handleInitialsClick(){
    if(this.state.showProfile == 'profileHidden'){
      this.setState({showProfile: 'profile'})
      this.setState({teamArrow: dropdown})
      this.setState({showTeams: 'otherTeamsHide'})
      this.setState({teamContainer: 'teamSelectContainer'})
      this.setState({open: 'drawerClosed'})
      this.setState({productArrow: dropdown})
      this.setState({showProducts: 'otherProductsHide'})
      this.setState({productContainer: 'productSelectContainer'})
      this.setState({showTeamsSettings: 'teamListInSettingsHide'})

    }
    else{
      this.setState({showProfile: 'profileHidden'})
    }
  }

  closeAll(){
    this.setState({
              showProfile: 'profileHidden', 
              showTeams: 'otherTeamsHide', 
              showProducts: 'otherProductsHide', 
              open: 'drawerClosed', 
              teamArrow: dropdown, 
              productArrow: dropdown, 
              productContainer: 'productSelectContainer', 
              teamContainer: 'teamSelectContainer'
            })
  }

  getColorContrast(hexcolor){
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white';
  }

  capture(e){
    console.log('hi')
      if(e.keyCode == 13) {
          var newText=document.getElementById('primaryTextOne').value
          e.preventDefault()
          this.setState({primaryColorOne: newText})
          this.setSecondaryColor(newText)
      }

    }

     captureSecondary(e){
      if(e.keyCode == 13) {
          var newText=document.getElementById('secondaryTextOne').value
          e.preventDefault()
          this.setState({secondaryColorOne: newText})
      }

    }

    setSecondaryColor(primary){
      var newSecondaryColor = '#'
      var arr = []
      arr.push(primary.slice(1,2) - 2)
      arr.push(primary.slice(2,3) - 2)
      arr.push(primary.slice(3,4) - 2)
      arr.push(primary.slice(4,5) - 2)
      arr.push(primary.slice(5,6) - 2)
      arr.push(primary.slice(6,7) - 2)
      for(var i=0; i< arr.length; i++){
        if(arr[i] < 0){
          newSecondaryColor = newSecondaryColor + '0'
        }
        else{
        newSecondaryColor = newSecondaryColor + arr[i]
      }
      }
      this.setState({secondaryColorOne: newSecondaryColor})
    } 



	render() {
		return <div>
			<HeadContainer 
        product={this.state.product} 
        team={this.state.team} 
        handleBurgerClick={this.handleBurgerClick} 
        handleProductClick={this.handleProductClick} 
        productArrow={this.state.productArrow} 
        showProducts={this.state.showProducts}
        productContainer={this.state.productContainer}
        teamArrow={this.state.teamArrow}
        handleTeamClick={this.handleTeamClick}
        showTeams={this.state.showTeams}
        teamContainer={this.state.teamContainer}
        handleInitialsClick={this.handleInitialsClick}
        showProfile={this.state.showProfile}
        products={this.state.listedProducts}
        productClickUpdate={this.productClickUpdate}
        teams={this.state.listedTeams}
        teamClickUpdate={this.teamClickUpdate}
        teamInSettingsClickUpdate={this.teamClickUpdate}
        handleTeamInSettingsClick={this.handleTeamInSettingsClick}
        showTeamsSettings={this.state.showTeamsSettings}
      />
			<Drawer open={this.state.open}/>
      <div style={{width: '100vw', height: '100vh'}}  onClick={this.closeAll}>
        <BarChart 
          primaryColor={this.state.primaryColorOne} 
          primaryHex={this.state.primaryColorOne}
          secondaryColor={this.state.secondaryColorOne}
          textColor={this.getColorContrast(this.state.primaryColorOne.slice(1,6))} 
          colorId='primaryColorOne' 
          capture={this.capture}
          captureSecondary={this.captureSecondary}
        />
      </div>
		</div>	
	}
};

export default Main;