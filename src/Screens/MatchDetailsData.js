import React, { useState } from "react";
import "../../src/Screens/MatchDetailsData.scss";
import moment from "moment/moment";
import GoogleMapReact from "google-map-react";
import Players from "../Components/Players/Players";
import Commentry from "../Components/Commentry/Commentry";
import { BsChevronDown } from "react-icons/bs";
import { SlArrowUp } from "react-icons/sl";
// import { MdSportsCricket } from "react-icons/gi";
import { IoIosTennisball } from "react-icons/io";
import { MdSportsCricket } from "react-icons/md";
// import { IoIosTennisball } from "react-icons/io";



const MatchDetailsData = (props) => {
  const [team, setTeam] = useState(0);
  const [option, setOption] = useState(true);
  const [optionb, setOptionb] = useState(false);
  const [showWicket, setShowWicket] = useState(true);

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
                <div
                  className="team-a"
                  onClick={() => setOption(!option)}
                  style={{
                    backgroundColor: option ? "grey" : "",
                    borderRadius: 5,
                  }}
                >
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
                <div
                  className="team-b"
                  onClick={() => setOptionb(!optionb)}
                  style={{
                    backgroundColor: optionb ? "grey" : "",
                    borderRadius: 5,
                  }}
                >
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
                    <MdSportsCricket size={20} className="icon" />
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
                                <MdSportsCricket
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
                                <p className="status-out">Not Out</p>
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
                      <div className="line"></div>
                      {option && (
                        <div className="score-info">
                          <div>
                            EXTRAS: {props.data.innings[team].totalExtras} (
                            {props.data.innings[team].wideBalls}Wd,{" "}
                            {props.data.innings[team].noBalls}NB,{" "}
                            {props.data.innings[team].legByesRuns}LB,{" "}
                            {props.data.innings[team].byesRuns}B)
                          </div>
                          <div className="run-score">
                            TOTAL:{" "}
                            {props.data.innings[team].numberOfWicketsFallen}-
                            {props.data.innings[team].runsScored} (
                            {props.data.innings[team].oversBowled} Overs)
                          </div>

                          <div>
                            <div className="fall-wickets">
                              <span>FALL OF WICKETS</span>
                              <BsChevronDown
                                size={20}
                                onClick={() => setShowWicket(!showWicket)}
                                className="icon"
                              />
                            </div>
                            {!showWicket && (
                              <div className="wickets-records">
                                {props.data.innings[team].wickets.length > 0
                                  ? props.data.innings[team].wickets.map(
                                      (data, index) => {
                                        return (
                                          <div className="wickets-rec">
                                            <p>
                                              {data.order}-{data.runs} (
                                              {data.overBallDisplay}) {""}
                                              {
                                                props.player.find(
                                                  (res) =>
                                                    res.id === data.playerId
                                                ).displayName
                                              }{" "}
                                            </p>
                                          </div>
                                        );
                                      }
                                    )
                                  : null}
                              </div>
                            )}
                          </div>
                          <div className="score-head">
                            <div className="score-header">
                              <IoIosTennisball size={20} className="icon" />
                              <h3 className="batting">Bowling</h3>
                            </div>
                            <h3 className="data">O</h3>
                            <h3 className="data">M</h3>
                            <h3 className="data">R</h3>
                            <h3 className="data">W</h3>
                            <h3 className="strike-rate">Eco</h3>
                          </div>
                          {props.data.innings[team].bowlers.map(
                            (res, index) => (
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
                                  <p className="player">
                                    {
                                      props.player.find(
                                        (data) => data.id === res.playerId
                                      ).displayName
                                    }
                                    {res.isOnStrike ? (
                                      <IoIosTennisball
                                        size={18}
                                        color={"green"}
                                        style={{ marginLeft: 10 }}
                                      />
                                    ) : null}
                                  </p>
                                </div>
                                <div className="scored">
                                  {res.oversBowled ? (
                                    res.isOnStrike ? (
                                      res.ballsBowled ? (
                                        <p className="runs">
                                          {res.oversBowled}.{res.ballsBowled}
                                        </p>
                                      ) : (
                                        <p className="runs">
                                          {res.oversBowled}*
                                        </p>
                                      )
                                    ) : (
                                      <p className="runs">{res.oversBowled}</p>
                                    )
                                  ) : res.oversBowled === 0 ? (
                                    res.isOnStrike ? (
                                      res.ballsBowled ? (
                                        <p className="runs">
                                          {res.oversBowled}.{res.ballsBowled}
                                        </p>
                                      ) : (
                                        <p className="runs">
                                          {res.oversBowled}*
                                        </p>
                                      )
                                    ) : (
                                      <p className="runs">{res.oversBowled}*</p>
                                    )
                                  ) : (
                                    <p className="runs">-</p>
                                  )}
                                  <p className="runs">
                                    {res.maidensBowled ||
                                    res.maidensBowled === 0 ? (
                                      res.maidensBowled
                                    ) : (
                                      <p className="runs">-</p>
                                    )}
                                  </p>
                                  <p className="runs">
                                    {res.runsConceded ||
                                    res.runsConceded === 0 ? (
                                      res.runsConceded
                                    ) : (
                                      <p className="runs">-</p>
                                    )}
                                  </p>
                                  <p className="runs">
                                    {res.wicketsTaken ||
                                    res.wicketsTaken === 0 ? (
                                      res.wicketsTaken
                                    ) : (
                                      <p className="runs">-</p>
                                    )}
                                  </p>
                                  <p className="runs">
                                    {res.economy || res.economy === 0 ? (
                                      res.economy
                                    ) : (
                                      <p className="runs">-</p>
                                    )}
                                  </p>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      )}
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
                                <MdSportsCricket
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
                                <p className="status-out">Not Out</p>
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
                  <div className="line"></div>
                  {optionb && (
                    <div className="score-info">
                      <div>
                        EXTRAS: {props.data.innings[1].totalExtras} (
                        {props.data.innings[1].wideBalls}Wd,{" "}
                        {props.data.innings[1].noBalls}NB,{" "}
                        {props.data.innings[1].legByesRuns}LB,{" "}
                        {props.data.innings[1].byesRuns}B)
                      </div>
                      <div className="run-score">
                        TOTAL: {props.data.innings[1].numberOfWicketsFallen}-
                        {props.data.innings[1].runsScored} (
                        {props.data.innings[1].oversBowled} Overs)
                      </div>

                      <div>
                        <div className="fall-wickets">
                          <span>FALL OF WICKETS</span>
                          <BsChevronDown
                            size={20}
                            onClick={() => setShowWicket(!showWicket)}
                            className="icon"
                          />
                        </div>
                        {!showWicket && (
                          <div className="wickets-records">
                            {props.data.innings[1].wickets.length > 0
                              ? props.data.innings[1].wickets.map(
                                  (data, index) => {
                                    return (
                                      <div className="wickets-rec">
                                        <p>
                                          {data.order}-{data.runs} (
                                          {data.overBallDisplay}) {""}
                                          {
                                            props.player.find(
                                              (res) => res.id === data.playerId
                                            ).displayName
                                          }{" "}
                                        </p>
                                      </div>
                                    );
                                  }
                                )
                              : null}
                          </div>
                        )}
                      </div>
                      <div className="score-head">
                        <div className="score-header">
                          <IoIosTennisball size={20} className="icon" />
                          <h3 className="batting">Bowling</h3>
                        </div>
                        <h3 className="data">O</h3>
                        <h3 className="data">M</h3>
                        <h3 className="data">R</h3>
                        <h3 className="data">W</h3>
                        <h3 className="strike-rate">Eco</h3>
                      </div>
                      {props.data.innings[1].bowlers.map((res, index) => (
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
                            <p className="player">
                              {
                                props.player.find(
                                  (data) => data.id === res.playerId
                                ).displayName
                              }
                              {res.isOnStrike ? (
                                <IoIosTennisball
                                  size={18}
                                  color={"green"}
                                  style={{ marginLeft: 10 }}
                                />
                              ) : null}
                            </p>
                          </div>
                          <div className="scored">
                            {res.oversBowled ? (
                              res.isOnStrike ? (
                                res.ballsBowled ? (
                                  <p className="runs">
                                    {res.oversBowled}.{res.ballsBowled}
                                  </p>
                                ) : (
                                  <p className="runs">{res.oversBowled}*</p>
                                )
                              ) : (
                                <p className="runs">{res.oversBowled}</p>
                              )
                            ) : res.oversBowled === 0 ? (
                              res.isOnStrike ? (
                                res.ballsBowled ? (
                                  <p className="runs">
                                    {res.oversBowled}.{res.ballsBowled}
                                  </p>
                                ) : (
                                  <p className="runs">{res.oversBowled}*</p>
                                )
                              ) : (
                                <p className="runs">{res.oversBowled}*</p>
                              )
                            ) : (
                              <p className="runs">-</p>
                            )}
                            <p className="runs">
                              {res.maidensBowled || res.maidensBowled === 0 ? (
                                res.maidensBowled
                              ) : (
                                <p className="runs">-</p>
                              )}
                            </p>
                            <p className="runs">
                              {res.runsConceded || res.runsConceded === 0 ? (
                                res.runsConceded
                              ) : (
                                <p className="runs">-</p>
                              )}
                            </p>
                            <p className="runs">
                              {res.wicketsTaken || res.wicketsTaken === 0 ? (
                                res.wicketsTaken
                              ) : (
                                <p className="runs">-</p>
                              )}
                            </p>
                            <p className="runs">
                              {res.economy || res.economy === 0 ? (
                                res.economy
                              ) : (
                                <p className="runs">-</p>
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
            <p>March is Not started</p>
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
