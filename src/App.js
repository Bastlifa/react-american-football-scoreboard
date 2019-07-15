//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import BoardTeam from "./components/BoardTeam/BoardTeam"

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [lionsScore, setLionsScore] = useState(0);
  const [tigersScore, setTigersScore] = useState(0);

  let scoreHandler = (teamName, scoreIncrease) => 
  {
    teamName === "Lions" ? setLionsScore(lionsScore + scoreIncrease) : setTigersScore(tigersScore + scoreIncrease);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
        
          <BoardTeam isHome={true} teamName="Lions" teamScore={lionsScore} />
          <div className="timer">00:03</div>
          <BoardTeam isHome={false} teamName="Tigers" teamScore={tigersScore} />

        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={_ => scoreHandler("Lions", 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={_ => scoreHandler("Lions", 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={_ => scoreHandler("Tigers", 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={_ => scoreHandler("Tigers", 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
