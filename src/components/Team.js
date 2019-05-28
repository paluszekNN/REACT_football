import React from 'react'

const Team = ({team, onTeamSelect}) =>{
    return(
        <tr>
            <td>{team.position}</td>
            <td><button style={{width:150}} className="ui button blue" onClick={()=>onTeamSelect(team.team_name)}>{team.team_name}</button></td>
            <td>{team.overall.games_played}</td>
            <td>{team.overall.won}</td>
            <td>{team.overall.draw}</td>
            <td>{team.overall.lost}</td>
            <td>{team.total.points}</td>
            <td>{team.overall.goals_scored}</td>
            <td>{team.overall.goals_against}</td>
            <td>{team.total.goal_difference}</td>
        </tr>
    )
}

export default Team