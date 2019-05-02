import React from 'react'

const Team = ({team}) =>{
    return(
        <tr>
            <td>{team.position}</td>
            <td>{team.team_name}</td>
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