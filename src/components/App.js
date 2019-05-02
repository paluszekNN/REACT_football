import React from 'react';
import APIfootball from '../APIs/APIfootball'
import TeamList from './TeamList'

class App extends React.Component{
  state = {teams: []}
  componentDidMount(){
    this.team_list()
  }
  team_list = async term=>{
    const response = await APIfootball.get('v2.0/standings/season/12963')
    this.setState({teams : response.data[1].standings.data})
  }
  
  
  render(){
    return (
      <div className="ui container">
          <table className="ui celled table">
            <thead>
              <tr>
                <th>position</th>
                <th>name</th>
                <th>games</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>points</th>
                <th>goals</th>
                <th>conceded</th>
                <th>goal difference</th>
              </tr>
            </thead>
            <TeamList teams= {this.state.teams}></TeamList>
          </table>
      </div>
    )
  }
}

export default App