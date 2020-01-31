import React, { Component } from "react";

// create your App component here

class App extends Component {
  state = {
    spacePeople: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(json => {
      this.setState({
        spacePeople: json.people
      })
    })
  }


  render() {
    return(
    <h1>{this.state.spacePeople.map((person, id) => <h1 key={id}>{person.name}</h1>)}</h1>
    )
  }
}

export default App