import React, { Component } from "react";
import api from "./api";
import RandomFlashCard from "./RandomFlashCard";

export default class HomePage extends Component {
  state = { cards: [], index: 0, isQuestion: true, rightAnswers: 0 };
  getData = async () => {
    const dataFromApi = await api.get();
    this.setState({ cards: dataFromApi.data });
  };

  componentDidMount = async () => {
    await this.getData();
    this.setState(() => {
      this.shuffle();
    });
  };

  shuffle = () => {
    const shuffledCards = this.state.cards
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffledCards;
  };

  randomCardRender = () => {
    if (this.state.cards.length && this.state.isQuestion) {
      return (
        <RandomFlashCard
          question={this.state.cards[this.state.index].question}
          //   key={this.state.cards[this.state.index].id}
          //   id={this.state.cards[this.state.index].id}
        ></RandomFlashCard>
      );
    } else if (this.state.cards.length) {
      return (
        <>
          <RandomFlashCard
            answer={this.state.cards[this.state.index].answer}
            //   key={this.state.cards[this.state.index].id}
            //   id={this.state.cards[this.state.index].id}
          ></RandomFlashCard>
          <button onClick={this.handleRightAnswerFunc}>
            did you get it right?
          </button>
        </>
      );
    }
  };

  handleNewCardFunc = () => {
    this.handleRevealAnswerFunc();
    this.setState((prev) => {
      return { index: prev.index + 1 };
    });
  };

  handleRevealAnswerFunc = () => {
    this.setState((prev) => {
      return { isQuestion: !prev.isQuestion };
    });
  };

  handleRightAnswerFunc = () => {
    this.setState((prev) => {
      return { rightAnswers: prev.rightAnswers + 1 };
    });
  };

  render() {
    return (
      <div className="home-container">
        <div className="rightAnswer-counter">
          <h5>right answers:{this.state.rightAnswers}</h5>
        </div>
        {this.randomCardRender()}
        <button onClick={this.handleNewCardFunc}>new card</button>
        <button onClick={this.handleRevealAnswerFunc}>reveal answer</button>
      </div>
    );
  }
}
