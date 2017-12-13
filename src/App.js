import './App.scss'
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }

    this.increase = this.increase.bind(this)
    this.reset = this.reset.bind(this)
  }

  increase() {
    this.setState(state => {return {count: state.count + 1}})
  }

  reset() {
    this.setState({count: 0})
  }

  render () {
    return (
      <div>
        <div className="digit">{this.state.count}</div>
        <button onClick={this.increase}>inc</button>
        <button onClick={this.reset}>res</button>
      </div>
    )
  }
}

export default App