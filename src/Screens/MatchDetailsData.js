import React from "react";
import "../../src/Screens/MatchDetailsData.scss";
import moment from "moment/moment";
import GoogleMapReact from 'google-map-react';
import Players from "../Components/Players/Players";
import Commentry from "../Components/Commentry/Commentry";
const MatchDetailsData = (props) => {
  // console.log(props.tab);
  // console.log(props.player);
  // console.log(props.data)
  // console.log(props.Commentry)
  return (
    <div className="MatchDetailsData">
      <div className="main-details">
        {props.tab === "MatchInfo" ? (
          <div className="matchinfo-page">
            <div className="data-section">
           <p className="matchinfo-title">Match Info</p>
            </div>
            <div className="data-section">
            <p className="match-option">Match-Result: </p>
            <p className="matchinfo-data">{props.data.isCompleted ? props.data.resultText : 'Match is In Progress'}</p>
            </div>
            <div className="data-section">
            <p className="match-option">Toss : </p>
            <p className="matchinfo-data">{props.data.tossResult}</p>
            </div>
            <div className="data-section">
            <p  className="match-option">Venue :</p>
            {props.data.venue &&
            <p className="matchinfo-data">{props.data.venue.name}</p>}
            </div>
            <div className="data-section">
            <p  className="match-option">Date :</p>
            <p className="matchinfo-data"> 
            {new Date(props.data.startDateTime).toDateString() +
             "," +
             moment(props.data.startDateTime).format("LT")}{" "}</p>
            </div>
            <div className="data-section">
            <p className="match-option">Match-Status: </p>
            <p className="matchinfo-data">{props.data.isCompleted ? '✅ Complated' : props.data.isLive ? '🔴 Live' : '🕒 Feautured'}</p>
            </div>
          </div>
        ) : props.tab === "Scorecard" ? (
          <div className="Scorecard-page">
            <p>Scorecard</p>
          </div>
        ) : props.tab === "Commentry" ? (
          <div className="Commentry-page">
            <Commentry Commentry={props.Commentry}/>
          </div>
        ) : props.tab === "Player" ? (
          <div className="Player-page">
            <Players
             players={props.player}
             homeId={props.data.homeTeam.id}
             awayId={props.data.awayTeam.id}
             homeTeamName={props.data.homeTeam.name}
             awayTeamName={props.data.awayTeam.name}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MatchDetailsData;
