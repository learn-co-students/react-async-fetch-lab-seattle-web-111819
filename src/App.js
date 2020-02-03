// create your App component here
import React, { Component } from 'react'

class App extends Component {

    constructor() {
        super()
        this.state = {
            astronauts: []
        }
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        // .then(json => console.log(json))
        // .then(json => console.log(json.people))
        .then(json => this.setState({
            astronauts: json.people
        }))
    }

    listAstronauts = () => {
        return this.state.astronauts.map((person, id) => <h1 key={id}>{person.name}</h1>)
    }

    render() {
        return (
            <div>
            {this.listAstronauts()}
            </div>
        )
    }


}
export default App