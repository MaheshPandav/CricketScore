import React, { useEffect, useState } from "react";
import "../Screens/Home.scss";
import Slider from "../Components/Slider/Slider";
import axios from "axios";
import { API_URL } from "../Api.js";

const Home = () => {
  const [match, setMatch] = useState([]);

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
    });
  };

  useEffect(() => {
    allMatche();
  }, []);
  return (
    <div className="main-container">
      <Slider data={match} />
    </div>
  );
};

export default Home;
