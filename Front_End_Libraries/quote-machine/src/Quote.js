import React from 'react';
import quotesData from './quotesData';
import Button from 'react-bootstrap/Button';
import {Twitter} from 'react-bootstrap-icons';

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
      <div id="quote-box">
        <p id="text"><span>"</span>{quotesData[this.state.number].quote}<span>"</span></p>
        <p id="author">{quotesData[this.state.number].author}</p>
        <Button id="new-quote" onClick={this.handleClick}variant="outline-primary" style={{float: "right"}}>
          New quote
        </Button>
        <Button  style={{marginRight: '5px', float: 'left'}}>
          <a id="tweet-quote" variant="outline-primary" href="twitter.com/intent/tweet" target="_blank">
            <Twitter />
          </a>
        </Button>
      </div>
    );
  }
};

export default Quote;