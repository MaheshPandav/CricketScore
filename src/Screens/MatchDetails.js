import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Screens/MatchDetails.scss";

const MatchDetails = () => {
  const [data, setScore] = useState([]);
  const [player, setPlayer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  console.log(id);

  const SCORED_API = `https://apiv2.cricket.com.au/web/views/scorecard?FixtureId=${id}&jsconfig=eccn:true`;
  const Score = () => {
    axios.get(SCORED_API).then((res) => {
      setScore(res.data.fixture);
      setPlayer(res.data.players);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    Score();
  }, []);

  return (
    <div className="matchdetails">
      <div className="match-header-details">
        {!isLoading ? (
          !data.length > 0 ? (
            <div className="match-data">
              <p className="match-type">{data.name}</p>
              <div className="match-details-section">
                <div
                  className={
                    data.isLive || data.isCompleted
                      ? "match-middle"
                      : "preview-match"
                  }
                >
                  <div className="left-team">
                    <div className="top-view">
                      <img
                        src={data.homeTeam.logoUrl}
                        alt="live-img"
                        className="hometeam-logo"
                      />

                      <p className="team-name">{data.homeTeam.name}</p>
                    </div>
                    {data.isLive || data.isCompleted ? (
                      <div className="scored-section-team-a">
                        <div className="scored">
                          {data.isLive || data.isCompleted ? (
                            data.innings[0] ? (
                              data.homeTeamId ===
                              data.innings[0].battingTeamId ? (
                                <p>{data.innings[0].runsScored}/</p>
                              ) : data.innings[1] ? (
                                data.homeTeamId ===
                                  data.innings[1].battingTeamId && (
                                  <p>{data.innings[1].runsScored}/</p>
                                )
                              ) : (
                                <p style={{ color: "#aaa" }}>Yet to Bat</p>
                              )
                            ) : (
                              <p>{data.homeTeam.shortName}</p>
                            )
                          ) : (
                            ""
                          )}
                          {data.innings[0] ? (
                            data.homeTeamId ===
                            data.innings[0].battingTeamId ? (
                              <p>{data.innings[0].numberOfWicketsFallen}</p>
                            ) : data.innings[1] ? (
                              data.homeTeamId ===
                                data.innings[1].battingTeamId && (
                                <p>{data.innings[1].numberOfWicketsFallen}</p>
                              )
                            ) : null
                          ) : null}
                        </div>
                        <div>
                          {data.innings[0] ? (
                            data.homeTeamId ===
                            data.innings[0].battingTeamId ? (
                              <p className="over-text">
                                {data.innings[0].oversBowled} overs
                              </p>
                            ) : data.innings[1] ? (
                              data.homeTeamId ===
                                data.innings[1].battingTeamId && (
                                <p className="over-text">
                                  {data.innings[1].oversBowled} overs
                                </p>
                              )
                            ) : null
                          ) : null}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="middle">
                    <div className="middle-line" />
                    <p>V</p>
                  </div>
                  <div className="right-team">
                    <div className="top-view">
                      <p className="team-name">{data.awayTeam.name}</p>

                      <img
                        src={data.awayTeam.logoUrl}
                        alt="live-img"
                        className="hometeam-logo"
                      />
                    </div>
                    {data.isLive || data.isCompleted ? (
                      <div className="scored-section-team-b">
                        <div className="scored">
                          {data.isLive || data.isCompleted ? (
                            data.innings[0] ? (
                              data.awayTeamId ===
                              data.innings[0].battingTeamId ? (
                                <p>{data.innings[0].runsScored}/</p>
                              ) : data.innings[1] ? (
                                data.awayTeamId ===
                                  data.innings[1].battingTeamId && (
                                  <p>{data.innings[1].runsScored}/</p>
                                )
                              ) : (
                                <p style={{ color: "#aaa" }}>Yet to Bat</p>
                              )
                            ) : (
                              <p>{data.awayTeam.shortName}</p>
                            )
                          ) : (
                            ""
                          )}
                          {data.innings[0] ? (
                            data.awayTeamId ===
                            data.innings[0].battingTeamId ? (
                              <p>{data.innings[0].numberOfWicketsFallen}</p>
                            ) : data.innings[1] ? (
                              data.awayTeamId ===
                              data.innings[1].battingTeamId ? (
                                <p>{data.innings[1].numberOfWicketsFallen}</p>
                              ) : (
                                <p>0</p>
                              )
                            ) : null
                          ) : null}
                        </div>
                        <div>
                          {data.innings[0] ? (
                            data.awayTeamId ===
                            data.innings[0].battingTeamId ? (
                              <p className="over-text">
                                {data.innings[0].oversBowled} overs
                              </p>
                            ) : data.innings[1] ? (
                              data.awayTeamId ===
                                data.innings[1].battingTeamId && (
                                <p className="over-text">
                                  {data.innings[1].oversBowled} overs
                                </p>
                              )
                            ) : null
                          ) : null}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="result-text">
                <p className="result-text">{data.resultText}</p>
              </div>
            </div>
          ) : (
            <p>No data found</p>
          )
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
};

export default MatchDetails;
