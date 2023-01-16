import React, { useEffect, useState } from "react";
import "../Screens/Home.scss";
import Slider from "../Components/Slider/Slider";
import axios from "axios";
import { API_URL, News_API_URL } from "../Api.js";

const Home = () => {
  const [match, setMatch] = useState([]);
  const [filter, setFilter] = useState(match);
  const [isLoading, setisLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [select, setSelect] = useState(1);

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
      // console.log(allMatches);
      setMatch(allMatches);
      setFilter(allMatches);
      setisLoading(false);
      setSelect(1);
    });
  };
  const NewsAPi = () => {
    axios.get(News_API_URL).then((res) => {
      setNews(res.data.news);
    });
  };

  // console.log(news);

  useEffect(() => {
    allMatche();
    NewsAPi();
  }, []);

  const filterProduct = (cat, num) => {
    const updatedList = match.filter((x) => x.IsCompleted === cat);
    // console.log(updatedList);
    setFilter(updatedList);
    setSelect(num);
  };

  const filterProductlive = (cat, num) => {
    const updatedList = match.filter((x) => x.IsLive === cat);
    // console.log(updatedList);
    setFilter(updatedList);
    setSelect(num);
  };
  return (
    <div className="main-container">
      <div className="fillter-container">
        <button
          style={{
            backgroundColor: select === 1 ? "#fff" : "#000",
            color: select === 1 ? "#000" : "#fff",
          }}
          className="button"
          onClick={() => filterProduct(match === filter, 1)}
        >
          All
        </button>
        <button
          style={{
            backgroundColor: select === 2 ? "#fff" : "#000",
            color: select === 2 ? "#000" : "#fff",
          }}
          className="button"
          onClick={() => filterProductlive(true, 2)}
        >
          Live
        </button>
        <button
          style={{
            backgroundColor: select === 3 ? "#fff" : "#000",
            color: select === 3 ? "#000" : "#fff",
          }}
          className="button"
          onClick={() => filterProduct(false, 3)}
        >
          Upcoming
        </button>
        <button
          style={{
            backgroundColor: select === 4 ? "#fff" : "#000",
            color: select === 4 ? "#000" : "#fff",
          }}
          className="button"
          onClick={() => filterProduct(true, 4)}
        >
          Complated
        </button>
      </div>
      <Slider data={filter} isLoading={isLoading} />
      <div className="bottomm-section">
        <div className="first-section">
          <p>Content</p>
        </div>
        <div className="news-section">
          <p className="latest-news">Latest News</p>

          {news.map((item, index) => (
            <div key={index}>
              <img src={item.imageUrl} alt="live-img" className="news-image" />
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
