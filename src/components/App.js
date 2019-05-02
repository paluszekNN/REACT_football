import React from 'react';
import APIfootball from '../APIs/APIfootball'
import TeamList from './TeamList'

var team_list = []
// var team_list = APIfootball.get('v2.0/standings/season/12963').then( function(resp){
//     //resp.data will contain your data
//     //resp.meta will contain the meta informations
//     console.log(resp.data[0].standings.data);
//      return resp.data[0].standings.data
//   });
class App extends React.Component{
  state = {teams: team_list}
  
  render(){
    return (
      <div className="ui container">
          <table className="ui celled table">
            <thead>
              <tr>
                <th>position</th>
                <th>name</th>
                <th>points</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>goals</th>
                <th>conceded</th>
                <th>goal difference</th>
              </tr>
            </thead>
            <TeamList></TeamList>
          </table>
      </div>
    )
  }
}

export default App