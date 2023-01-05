import React, { useEffect, useState } from "react";
import "../Screens/Home.scss";
import Slider from "../Components/Slider/Slider";
import axios from "axios";
import { API_URL, News_API_URL } from "../Api.js";

const Home = () => {
  const [match, setMatch] = useState([]);
  const [filter, setFilter] = useState(match);
  const [isLoading, setisLoading] = useState(true)
  const [news, setNews] = useState([])

  const allMatches = [];

  const allMatche = () => {
    axios.get(API_URL).then((res) => {
      const inprogress = res.data.InProgressFixtures.filter((match) => {
        if (match) {
          return match;
        }
      });
      inprogress.forEach((fixture) => {
        allMatches.push(fixture);
      });

      const complated = res.data.CompletedFixtures.filter((match) => {
        if (match) {
          return match;
        }
      });
      complated.forEach((fixture) => {
        allMatches.push(fixture);
      });
      const upcoming = res.data.UpcomingFixtures.filter((match) => {
        if (match) {
          return match;
        }
      });
      upcoming.forEach((fixture) => {
        allMatches.push(fixture);
      });
      console.log(allMatches);
      setMatch(allMatches);
      setFilter(allMatches);
      setisLoading(false)
    });
  };
  const NewsAPi = () => {
    axios.get(News_API_URL).then((res) => {
      setNews(res.data.news)
    })
  }

  console.log(news)

  useEffect(() => {
    allMatche();
    NewsAPi()
  }, []);

  const filterProduct = (cat) => {
    const updatedList = match.filter((x) => x.IsCompleted === cat);
    console.log(updatedList);
    setFilter(updatedList);
  };

  const filterProductlive = (cat) => {
    const updatedList = match.filter((x) => x.IsLive === cat);
    console.log(updatedList);
    setFilter(updatedList);
  };
  return (
    <div className="main-container">
      <div className="fillter-container">
        <button
          className="button"
          onClick={() => setFilter(match)}
        >
          All
        </button>
        <button
          className="button"
          onClick={() => filterProductlive(true)}
        >
          Live
        </button>
        <button
          className="button"
          onClick={() => filterProduct(false)}
        >
          Upcoming
        </button>
        <button
          className="button"
          onClick={() => filterProduct(true)}
        >
          Complated
        </button>
      </div>
      <Slider data={filter} isLoading={isLoading} />
      <div className="bottomm-section">
        <div className="first-section">
          <p>Content</p>
        </div>
        <div className="middle-section">

          <p className="latest-news">Latest News</p>

          {news.map((item, index) => (
            <div key={index}>

              <img
                src={item.imageUrl}
                alt="live-img"
                className="news-image"
              />
              <div className="match-description">
                <p className="news-description">{item.title}</p>
              </div>
              <div className="match-ref">
                {item.competitions[0] && (
                  <p className="ref-title">{item.competitions[0].name}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="last-section">
          <p>Content</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
