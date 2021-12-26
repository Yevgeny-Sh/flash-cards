import React from "react";

import "./style.css";
class randomFlashCard extends React.Component {
  state = { id: "", question: "", answer: "", rightAnswers: 0 };

  render() {
    return (
      <div className="card-container">
        <div>{this.props.question}</div>
        <div>{this.props.answer}</div>
      </div>
    );
  }
}

export default randomFlashCard;
