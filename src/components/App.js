import React from 'react';
import APIfootball from '../APIs/APIfootball'
import TeamList from './TeamList'
import TeamInfo from './TeamInfo';

class App extends React.Component{
  state = {teams: [], teamsInfo: null, team: null}
  componentDidMount(){
    this.teamList()
    this.teamInfo()
  }
  teamList = async term=>{
    const response = await APIfootball.get('v2.0/standings/season/12963')
    this.setState({teams : response.data[1].standings.data})
  }

  teamInfo = async term=>{
    const response = await APIfootball.get('v2.0/teams/season/12963')
    this.setState({teamsInfo: response.data})
    this.setState({team: response.data[0]})
  }

  onTeamSelect = teamName =>{
    this.state.teamsInfo.forEach(element => {
      if (element.name === teamName){
        this.setState({team : element})
      }
        
    });
  }
  
  
  render(){
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">       
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
                <TeamList onTeamSelect={this.onTeamSelect}  teams= {this.state.teams}></TeamList>
              </table>
            </div>
            
            <div className="five wide column"> 
              <TeamInfo team = {this.state.team}></TeamInfo>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

export default App