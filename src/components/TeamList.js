import React from 'react'
import Team from './Team'

const TeamList = ({teams, onTeamSelect}) => {
    // console.log(teams)
    const renderedList = teams.map((team)=>{
        return <Team key={team.team_id} onTeamSelect={onTeamSelect} team={team}/>
    })
    return <tbody>{renderedList}</tbody> 
}

export default TeamList
