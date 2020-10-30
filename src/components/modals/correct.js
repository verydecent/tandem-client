import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { closeModals } from "../../redux/actionCreators";

const Correct = ({
  // Values
  history,
  match,
  // Methods
  closeModals,
}) => {
  const lastQ = "21";
  const id = parseInt(match.params.id);
  const dynamicURL =
    id === lastQ ? "/leaderboard" : `/trivia/${parseInt(id) + 1}`;
  const nextQuestion = () => {
    closeModals();
    history.push(dynamicURL);
  };

  return (
    <div className="modal">
      <div className="modal-overlay" onClick={nextQuestion}></div>
      <div className="modal-content">
        <h1>Correct</h1>
        <button onClick={nextQuestion}>Next Question</button>
      </div>
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  closeModals: () => dispatch(closeModals()),
});

const CorrectWithRouter = withRouter(Correct);

export default connect(null, mapDispatch)(CorrectWithRouter);
