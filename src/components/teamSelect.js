import React from 'react';

import styles from '../sass/teamSelect.scss';
import dropdown from '../img/arrow_dropdown.svg';

class TeamSelect extends React.Component{
  render(){
    return(
      <div >
      	<img id="teamArrow" src={dropdown} />
      	<h4 id="team">{this.props.team}</h4>
      </div>
  )
  }
}


export default TeamSelect;