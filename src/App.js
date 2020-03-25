import React from 'react';
import axios from 'axios';
import './App.css';
import Quote from './components/Quote';
import TweeterShareButton from './components/TweeterShareButton';
import RandomQuoteButton from './components/RandomQuoteButton';
import AppHeader from './components/AppHeader';

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
        const stripHtml = (str) => {
          const temp = document.createElement('DIV');
          temp.innerHTML = str;
          return temp.textContent || temp.innerText;
        };

        const quotes = response.data.map(quote => ({
          author: stripHtml(quote.title.rendered),
          content: stripHtml(quote.content.rendered)
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
    // Generate data for sharing
    const shareData = `"${this.state.quote.content}" - ${this.state.quote.author}`;

    return (
      <div className="container bg-light" style={{ minHeight: '100vh' }}>
        <div id="quote-box">
          <AppHeader />

          <Quote
            content={ this.state.quote.content }
            author={this.state.quote.author} />

          <div className="row">
            <div className="col-md-6">
              <RandomQuoteButton className="btn-block" onClick={this.pickRandomQuote} />
            </div>

            <div className="col-md-6">
              <TweeterShareButton className="btn-block" data={shareData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
