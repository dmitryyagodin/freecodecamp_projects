import React from 'react';
import quotesData from './quotesData';


class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    let randomNum = Math.floor(Math.random() * quotesData.length);
    this.setState({
      number: randomNum
    });
  }

  render() {
    return (
      <div id="#quote-box">
        <p id="text">{quotesData[this.state.number].quote}</p>
        <p id="author">{quotesData[this.state.number].author}</p>
        <button id="new-quote" onClick={this.handleClick}>New quote</button>
        <button id="tweet-quote">
          <a href="#">Tweet</a>
        </button>
      </div>
    );
  }
};

export default Quote;