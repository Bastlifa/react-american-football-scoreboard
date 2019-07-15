//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import BoardTeam from "./components/BoardTeam/BoardTeam"
import Buttons from "./components/Buttons/Buttons";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);
  const [time, setTime] = useState(900);
  const [timerToggle, setTimerToggle] = useState(false);

  let scoreHandler = (isHome, scoreIncrease) => 
  {
    isHome ? setHomeScore(homeScore + scoreIncrease) : setAwayScore(awayScore + scoreIncrease);
  }

  let timeString = (time) =>
  {
    let tempSeconds = time;
    let minutes = Math.floor(tempSeconds/60)
    let seconds = tempSeconds%60
    if (minutes < 10) minutes = "0" + minutes
    if (seconds < 10) seconds = "0" + seconds
    return `${minutes}:${seconds}`
  }

  useEffect(() =>
  {
      let timer = setInterval(() => {
        if (timerToggle) setTime(time - 1);
      }, 1000);
      return function cleanup()
      {
          clearInterval(timer)
      }
  })


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">    
          <BoardTeam isHome={true} teamName="Lions" teamScore={homeScore} />
          <div className="timer">{timeString(time)}</div>
          <BoardTeam isHome={false} teamName="Tigers" teamScore={awayScore} />
        </div>
        <BottomRow quarter={quarter}/>
      </section>
      <Buttons scoreCB={scoreHandler} quarterCB={setQuarter} quarter={quarter} timerToggle={timerToggle} setTimerToggle={setTimerToggle} setTime={setTime}/>
    </div>
  );
}

export default App;
