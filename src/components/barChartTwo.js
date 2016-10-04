import React from 'react';

import styles from '../sass/barChart.scss';


class BarChart extends React.Component{


  render(){
    return(
      <div>
        <div id="chartContainer" style={{backgroundColor: this.props.primaryColor}}>
          <h4 id='title' style={{color: this.props.textColor}}>Chart Label</h4>
          <h5 id="subtitle" style={{color: this.props.textColor}}>Chart Subheader</h5>
          <div className="barContainer">
            <p className="barLabel" style={{color: this.props.textColor}}>Label 1</p>
            <div className="bar">
              <div id="topBar" style={{backgroundColor: this.props.secondaryColor}}></div>
            </div>
            <p className="barValue" style={{color: this.props.textColor}}>Value 1</p>
          </div>
          <div className="barContainer">
            <p className="barLabel" style={{color: this.props.textColor}}>Label 2</p>
            <div className="bar">
              <div id="middleBar" style={{backgroundColor: this.props.secondaryColor}}></div>
            </div>
            <p className="barValue" style={{color: this.props.textColor}}>Value 2</p>
          </div>
          <div className="barContainer">
            <p className="barLabel" style={{color: this.props.textColor}}>Label 3</p>
            <div className="bar">
              <div id="bottomBar" style={{backgroundColor: this.props.secondaryColor}}></div>
            </div>
            <p className="barValue" style={{color: this.props.textColor}}>Value 3</p>
          </div>
        </div>
        <div id="colorInputs">
          <p>Primary Color</p>
          <textarea 
              id="primaryTextOne" 
              onClick={this.props.closeMenu} 
              placeholder={this.props.primaryColor} 
              rows='1' 
              onKeyDown={this.props.capture}
            >
            </textarea>
            <p>secondaryColor</p>
            <textarea 
              id="secondaryTextOne" 
              onClick={this.props.closeMenu} 
              placeholder={this.props.secondaryColor} 
              rows='1' 
              onKeyDown={this.props.captureSecondary}
            >
            </textarea>
        </div>
      </div>
  )
  }
}


export default BarChart;