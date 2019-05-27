import React from 'react'

const TeamInfo = ({team}) =>{
    if (team == null){
        return(
            <div></div>

        )
    }
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
            </div>
        </div>
        
    )
}

export default TeamInfo