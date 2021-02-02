import './App.css';
import quotesData from './quotesData';
import Quote from './quote-machine/src/Quote';

function App() {
  let randomNumber = Math.floor(Math.random() * quotesData.length);
  let randomQuote = quotesData[randomNumber];
  return (
    <div className="App">
      <header className="App-header" id="quote-box">
        <p id="text">{randomQuote.quote}</p>
        <p id="author">{randomQuote.author}</p>
        <Quote />
      </header>
    </div>
  );
}

export default App;
