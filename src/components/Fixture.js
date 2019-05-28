import React from 'react'

const Fixture = ({fixture, teams}) =>{
    if (teams != null){
        var tab_fixture = ['','']
        teams.forEach(team => {
            if (fixture.localteam_id === team.team_id){
                
                tab_fixture[0] = team.team_name
            }
            if (fixture.visitorteam_id === team.team_id){
                tab_fixture[1]=team.team_name
            }
        })
    }
    return(
        <tr>
            <td>{fixture.time.starting_at.date_time}</td>
            <td>{tab_fixture[0]}</td>
            <td style={{width:50}}>{fixture.scores.localteam_score+'-'+fixture.scores.visitorteam_score}</td>
            <td>{tab_fixture[1]}</td>
        </tr>
    )
}

export default Fixture