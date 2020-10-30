import React from "react";
import Navigation from "../navigation";
import { updateUsername } from "../../redux/actionCreators";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { GET_CARDS } from "../../redux/constants";
import axios from "axios";

// Will not make any requests until the end
// Or make requests with each question?

// Leaderboard always get request on mounting

const getCardsHelper = (dispatch) => {
  return axios
    .get(`${process.env.REACT_APP_DEVELOPMENT_API}/questions`)
    .then((response) => {
      console.log("getCardsHelper ====>", response.data);
      dispatch({
        type: GET_CARDS,
        cards: response.data,
      });
    })
    .catch((error) => console.log("error ====>", error));
};

const Home = ({
  // Values
  username,
  history,
  // Methods
  updateUsername,
  getCards,
}) => {
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!username) {
                console.log("write your username");
              } else {
                getCards();
                history.push("/trivia/1");
              }
            }}
          >
            <input
              onChange={(e) => updateUsername(e.target.value)}
              type="text"
              placeholder="What's your name?"
              value={username}
            />
            <button>Go!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  username: state.username,
});

const mapDispatch = (dispatch) => ({
  updateUsername: (username) => dispatch(updateUsername(username)),
  getCards: () => getCardsHelper(dispatch),
});

const HomeWithRouter = withRouter(Home);

export default connect(mapState, mapDispatch)(HomeWithRouter);
