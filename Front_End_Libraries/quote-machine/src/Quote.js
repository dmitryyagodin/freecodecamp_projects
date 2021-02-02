import React from 'react';
import quotesData from './quotesData';
import Button from 'react-bootstrap/Button';
import {Twitter} from 'react-bootstrap-icons';
import {Facebook} from 'react-bootstrap-icons';

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
          <p id="author">
            {quotesData[this.state.number].author}
          </p>
          <Button id="new-quote" onClick={this.handleClick} variant="outline-primary">
            New quote
          </Button>
          
          <Button variant="outline-primary"><a id="tweet-quote" href="twitter.com/intent/tweet"><Twitter /></a>
          </Button>
          
          <Button variant="outline-primary">
            <a id="tweet-quote" href="twitter.com/intent/tweet">
              <Facebook />
            </a>
          </Button>
          
      </div>
    );
  }
};

export default Quote;