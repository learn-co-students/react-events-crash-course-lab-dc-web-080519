import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (e) => { //debugger
    console.log('x = ' + e.clientX + '  |  ' + 'y = ' + e.clientY)
    drawChromeBoiAtCoords(e.clientX, e.clientY)
  }

  handleClick = (e) => toggleCycling()

  handleKeyPress = (e) => {//debugger
    e.key === 'a' ? resize('+') : ''
    e.key === 's' ? resize('-') : ''

    }


  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={ this.handleClick }
        onKeyPress={ this.handleKeyPress }
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
