import React from "react";
import "./style.css";
class FlashCard extends React.Component {
  state = { id: "", question: "", answer: "" };

  render() {
    return (
      <div className="card-container">
        <div>{this.props.question}</div>
        <div>{this.props.answer}</div>
        <button onClick={() => this.props.delCardFunc(this.props.id)}>
          delete
        </button>
        <button onClick={this.props.updateCardFunc}>edit</button>
      </div>
    );
  }
}

export default FlashCard;
