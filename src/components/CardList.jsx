import React, { Component } from "react";
import api from "./api";
import FlashCard from "./FlashCard";
import "./style.css";
export default class CardList extends Component {
  state = { cards: [] };

  getData = async () => {
    const dataFromApi = await api.get();
    this.setState({ cards: dataFromApi.data });
  };

  componentDidMount() {
    this.getData();
  }
  delCardFunc = async (id) => {
    await api.delete(`/${id}`);
    this.getData();
  };

  updateCardFunc = async () => {
    await api.put(this.props.id, this.state);
    this.getData();
  };

  cardRender = () => {
    console.log(this.props);
    const CardList = this.props.cards.map((elem) => {
      // console.log(elem);
      return (
        <FlashCard
          question={elem.question}
          answer={elem.answer}
          getDatafunc={this.getData}
          key={elem.id}
          id={elem.id}
          delCardFunc={this.delCardFunc}
          updateCardFunc={this.updateCardFunc}
        />
      );
    });
    return CardList;
  };

  render() {
    return (
      <div className="card-list-container">
        <div className="card-render-container">{this.cardRender()}</div>
      </div>
    );
  }
}
