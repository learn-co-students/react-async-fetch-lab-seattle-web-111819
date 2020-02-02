// create your App component here
import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res=> res.json())
    .then(({spaceData}) => this.setState({data: spaceData}))
  }

  render() {
    return(
      <div>Hello</div>

    )
  }


}