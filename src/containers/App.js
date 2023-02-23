import React, { Component } from "react";
import CardList from '../components/CardList'
import { robots } from "../robots";
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            SearchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ SearchField: event.target.value })
    }

    render() {
        const { robots, SearchField } = this.state;
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.SearchField.toLowerCase())
        })

        return !robots.length ?
            <h1>Loading...</h1> :
            (
                <div className="tc" >
                    <h1>Robo-Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
    }
}

export default App;