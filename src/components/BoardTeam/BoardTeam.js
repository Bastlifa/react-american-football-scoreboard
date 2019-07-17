import React from 'react'

function BoardTeam(props)
{
    let homeAway = props.isHome ? "home" : "away"
    return (
        <div className={homeAway}>
            <h2 className={`${homeAway}__name`}>{props.teamName}</h2>
            <div className={`${homeAway}__score`}>{props.teamScore}</div>
        </div>
    )
}

export default BoardTeam