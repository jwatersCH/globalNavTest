import React from 'react';

import styles from '../sass/teamSelect.scss';

class TeamSelect extends React.Component{

  renderTeams( team ){
    if(team.selected == true){return}
      else{
    return(
        <h4 className="teamList" onClick={(event)=>this.props.teamClickUpdate(team.key)}>{team.name}</h4>
      )
    }
  }


  render(){
    return(
      <div id={this.props.teamContainer} onClick={this.props.handleTeamClick}>
      	<img id="teamArrow" src={this.props.teamArrow} />
      	<h4 id="team">{this.props.team}</h4>
        <hr id={this.props.showTeams}/>
      	<div id={this.props.showTeams}>
           {this.props.teams.map(this.renderTeams, this)}
      	</div>
      </div>
  )
  }
}


export default TeamSelect;