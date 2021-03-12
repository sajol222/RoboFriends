import React, {Component} from 'react'
import {robots} from './robots'
import CardList from './CardList'
import SearchBox from './SearchBox'


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots :robots,
            searchFiend : ''
        }
    }
onSearchChange =(event)=> {  
        this.setState({searchFiend : event.target.value})
        
    }
render(){
        const filterdRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchFiend.toLowerCase());
        })
        
        return(
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filterdRobots}/>
            </div>
            
        );
    }
}
export default App;                                                                                                                             