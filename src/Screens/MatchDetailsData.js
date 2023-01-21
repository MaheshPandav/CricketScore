import React, { useState } from "react";
import "../../src/Screens/MatchDetailsData.scss";
import moment from "moment/moment";
import GoogleMapReact from "google-map-react";
import Players from "../Components/Players/Players";
import Commentry from "../Components/Commentry/Commentry";
import { BsChevronDown } from "react-icons/bs";
import { SlArrowUp } from "react-icons/sl";
import { GiCricketBat } from "react-icons/gi";
import { FaBaseballBall } from "react-icons/fa";

const MatchDetailsData = (props) => {
  const [team, setTeam] = useState(0);
  const [option, setOption] = useState(true);
  const [optionb, setOptionb] = useState(false);

  console.log(props.data);
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
              <p className="matchinfo-data">
                {props.data.isCompleted
                  ? props.data.resultText
                  : "Match is In Progress"}
              </p>
            </div>
            <div className="data-section">
              <p className="match-option">Toss : </p>
              <p className="matchinfo-data">{props.data.tossResult}</p>
            </div>
            <div className="data-section">
              <p className="match-option">Venue :</p>
              {props.data.venue && (
                <p className="matchinfo-data">{props.data.venue.name}</p>
              )}
            </div>
            <div className="data-section">
              <p className="match-option">Date :</p>
              <p className="matchinfo-data">
                {new Date(props.data.startDateTime).toDateString() +
                  "," +
                  moment(props.data.startDateTime).format("LT")}{" "}
              </p>
            </div>
            <div className="data-section">
              <p className="match-option">Match-Status: </p>
              <p className="matchinfo-data">
                {props.data.isCompleted
                  ? "✅ Complated"
                  : props.data.isLive
                  ? "🔴 Live"
                  : "🕒 Feautured"}
              </p>
            </div>
          </div>
        ) : props.tab === "Scorecard" ? (
          props.data.isLive || props.data.isCompleted ? (
            <div className="Scorecard-page">
              <div className="team-option">
                <div className="team-a" onClick={() => setOption(!option)} style={{backgroundColor:option ? 'pink' : ''}}>
                {/* onClick={() => setOption(!option) */}
                  {props.data.innings[0].battingTeamId && (
                    <p
                      style={{ color: "#fff" }}
                      className={team === 0 ? "team-name active" : "team-name"}
                      onClick={() => setTeam(0)}
                    >
                      {props.data.innings[0].battingTeamId ===
                      props.data.homeTeam.id
                        ? props.data.homeTeam.shortName
                        : props.data.awayTeam.shortName}
                      <span>
                        {props.data.innings[0].runsScored}-
                        {props.data.innings[0].numberOfWicketsFallen}(
                        {props.data.innings[0].oversBowled})
                      </span>
                    </p>
                  )}
                  {option ? (
                    <BsChevronDown
                      color="#fff"
                      size="20"
                      onClick={() => setOption(!option)}
                    />
                  ) : (
                    <SlArrowUp
                      color="#fff"
                      size="20"
                      onClick={() => setOption(!option)}
                    />
                  )}
                </div>
                <div className="team-b" onClick={() => setOptionb(!optionb)} style={{backgroundColor: optionb ? 'pink' : ''}}>
                  {props.data.innings[1] &&
                    props.data.innings[0].battingTeamId && (
                      <p
                        style={{ color: "#fff" }}
                        className={
                          team === 1 ? "team-name active" : "team-name"
                        }
                        onClick={() => setTeam(1)}
                      >
                        {props.data.innings[1].battingTeamId ===
                        props.data.homeTeam.id
                          ? props.data.homeTeam.shortName
                          : props.data.awayTeam.shortName}
                        <span>
                          {props.data.innings[1].runsScored}-
                          {props.data.innings[1].numberOfWicketsFallen}(
                          {props.data.innings[1].oversBowled})
                        </span>
                      </p>
                    )}

                  {optionb ? (
                    <BsChevronDown
                      color="#fff"
                      size="20"
                      onClick={() => setOptionb(!optionb)}
                    />
                  ) : (
                    <SlArrowUp
                      color="#fff"
                      size="20"
                      onClick={() => setOptionb(!optionb)}
                    />
                  )}
                </div>
                <div className="score-head">
                  <div className="score-header">
                    <GiCricketBat size={20} className="icon" />
                    <h3 className="batting">Batting</h3>
                  </div>
                  <h3 className="data">R</h3>
                  <h3 className="data">B</h3>
                  <h3 className="data">4s</h3>
                  <h3 className="data">6s</h3>
                  <h3 className="strike-rate">SR</h3>
                </div>
                <div className="scored-section">
                  {option && (
                    <div>
                      {props.data.innings[team].batsmen.map((res, index) => (
                        <div className="player-image">
                          <div className="player-name">
                            <img
                              src={
                                props.player.find(
                                  (data) => data.id === res.playerId
                                ).imageUrl
                                  ? props.player.find(
                                      (data) => data.id === res.playerId
                                    ).imageUrl
                                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrNp5xmRAAnjGHuHgHWBjdBGwTWF2RFHnQQ&usqp=CAU"
                              }
                              alt="profile"
                              className="cursor-pointer"
                            />
                            <div className="player">
                              {
                                props.player.find(
                                  (data) => data.id === res.playerId
                                ).displayName
                              }
                              {res.isOnStrike ? (
                                <GiCricketBat
                                  size={18}
                                  color={"green"}
                                  style={{ marginLeft: 10 }}
                                />
                              ) : null}
                              {res.isOut ? (
                                <p className="status-out">
                                  {res.dismissalText}
                                </p>
                              ) : res.isBatting ? (
                                <p>Not Out</p>
                              ) : null}
                            </div>
                          </div>
                          <div className="scored">
                            {res.runsScored ? (
                              res.isOut ? (
                                <p className="runs font-bold">
                                  {res.runsScored}
                                </p>
                              ) : (
                                <p className="runs font-bold">
                                  {res.runsScored}*
                                </p>
                              )
                            ) : res.runsScored === 0 ? (
                              res.isOut ? (
                                <p className="runs font-extrabold">
                                  {res.runsScored}
                                </p>
                              ) : (
                                <p className="runs font-extrabold">
                                  {res.runsScored}*
                                </p>
                              )
                            ) : (
                              <p className="runs font-semibold">-</p>
                            )}
                            <p className="runs font-semibold">
                              {res.ballsFaced ? (
                                res.ballsFaced
                              ) : (
                                <p className="runs font-semibold">-</p>
                              )}
                            </p>
                            <p className="runs font-semibold">
                              {res.foursScored || res.foursScored === 0 ? (
                                res.foursScored
                              ) : (
                                <p className="runs font-semibold">-</p>
                              )}
                            </p>
                            <p className="runs font-semibold">
                              {res.sixesScored || res.sixesScored === 0 ? (
                                res.sixesScored
                              ) : (
                                <p className="runs font-semibold">-</p>
                              )}
                            </p>
                            <p className="runs font-semibold">
                              {res.strikeRate || res.strikeRate === 0 ? (
                                res.strikeRate
                              ) : (
                                <p className="runs font-semibold">-</p>
                              )}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="scored-section">
                  {optionb && (
                    <div>
                      {props.data.innings[1].batsmen.map((res, index) => (
                        <div className="player-image">
                          <div className="player-name">
                            <img
                              src={
                                props.player.find(
                                  (data) => data.id === res.playerId
                                ).imageUrl
                                  ? props.player.find(
                                      (data) => data.id === res.playerId
                                    ).imageUrl
                                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrNp5xmRAAnjGHuHgHWBjdBGwTWF2RFHnQQ&usqp=CAU"
                              }
                              alt="profile"
                              className="cursor-pointer"
                            />
                            <div className="player">
                              {
                                props.player.find(
                                  (data) => data.id === res.playerId
                                ).displayName
                              }
                              {res.isOnStrike ? (
                                <GiCricketBat
                                  size={18}
                                  color={"green"}
                                  style={{ marginLeft: 10 }}
                                />
                              ) : null}
                              {res.isOut ? (
                                <p className="status-out">
                                  {res.dismissalText}
                                </p>
                              ) : res.isBatting ? (
                                <p>Not Out</p>
                              ) : null}
                            </div>
                          </div>
                          <div className="scored">
                            {res.runsScored ? (
                              res.isOut ? (
                                <p className="runs font-bold">
                                  {res.runsScored}
                                </p>
                              ) : (
                                <p className="runs font-bold">
                                  {res.runsScored}*
                                </p>
                              )
                            ) : res.runsScored === 0 ? (
                              res.isOut ? (
                                <p className="runs font-extrabold">
                                  {res.runsScored}
                                </p>
                              ) : (
                                <p className="runs font-extrabold">
                                  {res.runsScored}*
                                </p>
                              )
                            ) : (
                              <p className="runs font-semibold">-</p>
                            )}
                            <p className="runs font-semibold">
                              {res.ballsFaced ? (
                                res.ballsFaced
                              ) : (
                                <p className="runs font-semibold">-</p>
                              )}
                            </p>
                            <p className="runs font-semibold">
                              {res.foursScored || res.foursScored === 0 ? (
                                res.foursScored
                              ) : (
                                <p className="runs font-semibold">-</p>
                              )}
                            </p>
                            <p className="runs font-semibold">
                              {res.sixesScored || res.sixesScored === 0 ? (
                                res.sixesScored
                              ) : (
                                <p className="runs font-semibold">-</p>
                              )}
                            </p>
                            <p className="runs font-semibold">
                              {res.strikeRate || res.strikeRate === 0 ? (
                                res.strikeRate
                              ) : (
                                <p className="runs font-semibold">-</p>
                              )}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        ) : props.tab === "Commentry" ? (
          <div className="Commentry-page">
            <Commentry Commentry={props.Commentry} />
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
