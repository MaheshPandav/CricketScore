import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slider.scss";
import { Link } from "react-router-dom";
import moment from "moment/moment";

export default function Home(props) {
  console.log(props.data);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {props.isLoading ? (
        <div>
          <p>Loading....</p>
        </div>
      ) : (
        <Slider {...settings} className="slider-container">
          {props.data.map((item, index) => (
            <Link to={`/matchDetails/${item.Id}`} key={index}>
              <div>
                <div className="slider-box">
                  <div className="top-section">
                    <p className="match-number">
                      {item.Name ? item.Name : "Match"}
                    </p>
                    <div>
                      {item.IsLive ? (
                        <div className="live-view">
                          <p className="live-text">Live</p>
                        </div>
                      ) : item.IsCompleted ? (
                        <div className="complated-view">
                          <p className="complated-text">Complated</p>
                        </div>
                      ) : (
                        <div className="preview-view">
                          <p className="preview-text">Preview</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    className={
                      item.IsLive || item.IsCompleted
                        ? "middle-section"
                        : "preview-section"
                    }
                  >
                    {/* team a */}
                    <div className="left-team">
                      <div className="top-view">
                        <img
                          src={item.HomeTeam.LogoUrl}
                          alt="live-img"
                          className="hometeam-logo"
                        />
                        <p style={{ color: "black" }}>
                          {item.HomeTeam.ShortName}
                        </p>
                      </div>
                      {item.IsLive || item.IsCompleted ? (
                        <div
                          className={
                            item.IsLive || item.IsCompleted
                              ? "scored-section-team-a"
                              : ""
                          }
                        >
                          <div>
                            <p>169/5</p>
                          </div>
                          <div className="over">
                            <p>Over(19.6)</p>
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
                    {/* team b */}
                    <div className="right-team">
                      <div className="right-section">
                        <p style={{ color: "black" }}>
                          {item.AwayTeam.ShortName}
                        </p>
                        <img
                          src={item.AwayTeam.LogoUrl}
                          alt="live-img"
                          className="hometeam-logo"
                        />
                      </div>
                      {item.IsLive || item.IsCompleted ? (
                        <div
                          className={
                            item.IsLive || item.IsCompleted
                              ? "scored-section-team-b"
                              : ""
                          }
                        >
                          <div>
                            <p className="scored">169/5</p>
                          </div>
                          <div className="over">
                            <p>Over(19.6)</p>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="bottom-section">
                    {item.IsLive || item.IsCompleted ? (
                      <p className="result-text">{item.ResultText}</p>
                    ) : (
                      <p className="result-text">
                        {new Date(item.StartDateTime).toDateString() +
                          "," +
                          moment(item.StartDateTime).format("LT")}{" "}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      )}
    </>
  );
}
