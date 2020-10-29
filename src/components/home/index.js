import React from "react";
import Navigation from "../navigation";

// Will not make any requests until the end
// Or make requests with each question?

// Leaderboard always get request on mounting

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="hero">
        <div className="hero-left">
          <h1 className="hero-title">Tandem Trivia Game</h1>
          <p className="hero-subtitle">
            Welcome to the Tandem's pop quiz, where you'll be able to learn more
            about the origins of Tandem
          </p>
          <p className="hero-subtitle">Enter your name to get started</p>
        </div>
        <div className="hero-right">
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Home;
