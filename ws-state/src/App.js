import React, { Component } from 'react'
import Person from './component/Person'
import "./App.css"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: false
            };
  }
  handleClick = () => this.setState({show : !this.state.show})

  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Toggle</button>
        {this.state.show? <Person/> : (<h2> Oups cliquer sur le boutton pour afficher </h2>)}


      </div>
    )
  }
}
