import React, { Component } from "react";
import api from "./api";
import CardList from "./CardList";
import "./style.css";
export default class CreateCard extends Component {
  state = { cards: [], id: "", question: "", answer: "" };

  getData = async () => {
    const dataFromApi = await api.get();
    this.setState({ cards: dataFromApi.data });
  };
  componentDidMount = () => {
    this.getData();
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreate = async () => {
    const newItem = this.state;
    await api.post("", newItem);
    this.setState({ id: "", question: "", answer: "" });
    this.getData();
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>create new card</h2>
        <div className="update-window">
          <input
            onChange={this.handleOnChange}
            type="text"
            name="question"
            placeholder="New question"
            value={this.state.question}
          />
          <br />
          <input
            onChange={this.handleOnChange}
            type="text"
            name="answer"
            placeholder="answer"
            value={this.state.answer}
          />
          <br />
          <button onClick={this.handleCreate}>Create</button>
        </div>
        <CardList cards={this.state.cards}></CardList>
      </div>
    );
  }
}
