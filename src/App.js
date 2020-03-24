import React from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import './App.css';
import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      quote: {
        author: '',
        content: ''
      }
    };
    this.loadQuotes = this.loadQuotes.bind(this);
    this.pickRandomQuote = this.pickRandomQuote.bind(this);
  }

  componentDidMount() {
    // Load quotes then pick random quote
    this.loadQuotes()
      .then(() => {
        this.pickRandomQuote();
      })
  }

  pickRandomQuote() {
    const randomIndex = parseInt(Math.random() * this.state.quotes.length);
    this.setState({
      quote: this.state.quotes[randomIndex]
    });
  }

  loadQuotes() {
    return new Promise((resolve, reject) => {
      axios({
        method:"GET",
        url:"https://quotesondesign.com/wp-json/wp/v2/posts",
        params:{
          "orderby": "rand",
          "per_page": 50
        }
      })
      .then((response)=>{
        const quotes = response.data.map(quote => ({
          author: quote.title.rendered,
          content: quote.content.rendered
        }));
  
        this.setState({
          quotes: quotes
        });
        resolve();
      })
      .catch((error)=>{
        reject(error)
      })
    })
  }

  render() {
    return (
      <div id="quote-box" className="container-fluid">
        <Quote
          content={ ReactHtmlParser(this.state.quote.content) }
          author={this.state.quote.author} />

        <div id="new-quote" onClick={this.pickRandomQuote} className="btn btn-primary">
          <i className="fas fa-plus"></i> New quote
        </div>
        <a href="https://tweeter.com" id="tweet-quote">
          Tweet quote
        </a>
      </div>
    );
  }
}

export default App;
