import React from 'react'
import Fixture from './Fixture'

const FixtureInfo = ({team, fixture, teams}) =>{
    var tab_fixture = new Array()
        if (fixture != null){
            fixture.forEach(element => {
                if (element.localteam_id === team.id || element.visitorteam_id === team.id){
                    tab_fixture.push(element)
                }
            })
        }
        const renderedList = tab_fixture.map((match)=>{
            return <Fixture fixture={match} teams={teams}/>
        })
        return <tbody>{renderedList}</tbody> 
    
}

export default FixtureInfo