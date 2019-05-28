import React from 'react'
import FixtureInfo from './FixtureInfo'
const TeamInfo = ({team, fixture, teams}) =>{
   
    if (team == null){
        return(
            <div></div>

        )
    }
    else{
        return(
            <div className="ui grid">
                <div className="ui row">
                    <div className="eight wide column">
                    <table className="ui celled table">
                        <tr>
                            <td>Name</td>
                            <td>{team.name}</td>
                        </tr>
                        <tr>
                            <td>Year</td>
                            <td>{team.founded}</td>
                        </tr>
                    </table>
                    </div>
                    <div className="eight wide column">
                        <img src={team.logo_path}></img>
                    </div>
                    <table className="ui celled table">
                        <FixtureInfo team={team} fixture={fixture} teams={teams}></FixtureInfo>
                    </table>
                </div>
            </div>
            
        )
    }
}

export default TeamInfo