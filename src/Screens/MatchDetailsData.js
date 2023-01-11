import React from "react";
import "../../src/Screens/MatchDetailsData.scss";

const MatchDetailsData = (props) => {
  console.log(props.tab);
  console.log(props.player);
  return (
    <div className="MatchDetailsData">
      <div className="main-details">
        {props.tab === "MatchInfo" ? (
          <div className="matchinfo-page">
            <p>{props.data.name}</p>
          </div>
        ) : props.tab === "Scorecard" ? (
          <div className="Scorecard-page">
            <p>Scorecard</p>
          </div>
        ) : props.tab === "Commentry" ? (
          <div className="Commentry-page">
            <p>Commentry</p>
          </div>
        ) : props.tab === "Player" ? (
          <div className="Player-page">
            <p>Player</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MatchDetailsData;
