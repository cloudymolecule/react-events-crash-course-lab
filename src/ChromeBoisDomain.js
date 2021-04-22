import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  
  clicky = () => {toggleCycling()}
   
  pressy = (event) => {
    if (event.key === 'a' || event.key === 'A' ) {
      resize('+')
    } else if (event.key === 's' || event.key === 'S' ) {
      resize('-')
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.clicky}
        onKeyDown={this.pressy}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
