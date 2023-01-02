import React, { useEffect, useState } from "react";
import "../Screens/Home.scss";
import Slider from "../Components/Slider/Slider";
import axios from "axios";
import { API_URL } from "../Api.js";

const Home = () => {
  const [match, setMatch] = useState([]);
  const [filter, setFilter] = useState(match);

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
    });
  };

  useEffect(() => {
    allMatche();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = match.filter((x) => x.IsCompleted === cat );
    console.log(updatedList);
    setFilter(updatedList);
  };

  const filterProductlive = (cat) => {
    const updatedList = match.filter((x) => x.IsLive === cat );
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
      <Slider data={filter} />
      <div className="bottom-section">
        <div className="first-section">
          <p>Content</p>
        </div>
        <div className="middle-section">
          <p>Content</p>
        </div>
        <div className="last-section">
          <p>Content</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
