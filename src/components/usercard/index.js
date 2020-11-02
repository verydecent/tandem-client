import React from "react";
import { connect } from "react-redux";

const UserCard = ({ username, points }) => {
  return (
    <div className="usercard">
      {/* <div className="timer">
        <Timer />
      </div> */}
      <h1 className="usercard-name oj">{username}</h1>
      <h1 className="usercard-points">
        <span className="underline">{points}</span> Points
      </h1>
    </div>
  );
};

const mapState = (state) => ({
  username: state.username,
  points: state.points,
});

export default connect(mapState)(UserCard);
