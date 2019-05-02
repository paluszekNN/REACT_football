import React from 'react'
import Team from './Team'

const TeamList = ({teams}) => {
    const renderedList = teams.map((team)=>{
        console.log(team.team_id)
        return <Team key={team.team_id} team={team}/>
    })
    return <tbody>{renderedList}</tbody> 
}

export default TeamList
