import React from 'react'
import Button from '../Button/Button';

function Buttons(props)
{
    return (
        <section className="buttons">
            <div className="homeButtons">
                <Button cb={_ => props.scoreCB(true, 7)} className="homeButtons__touchdown" textContent="Home Touchdown" />
                <Button cb={_ => props.scoreCB(true, 3)} className="homeButtons__fieldGoal" textContent="Home Field Goal" />
            </div>
            <div className="awayButtons">
                <Button cb={_ => props.scoreCB(false, 7)} className="awayButtons__touchdown" textContent="Away Touchdown" />
                <Button cb={_ => props.scoreCB(false, 3)} className="awayButtons__fieldGoal" textContent="Away Field Goal" />
            </div>
            <div className="timeButtons">
                <Button cb={_ => {props.setTime(900); props.setTimerToggle(false); props.quarterCB(props.quarter >= 4 ? 1 : props.quarter + 1)}} className="timeButtons__quarter" textContent="Next Quarter" />
                <Button cb={_ => props.setTimerToggle(!props.timerToggle)} className="timeButtons__timer" textContent="Toggle Timer" />
            </div>
        </section>
    )
}

export default Buttons