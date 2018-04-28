import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {}
      ]
    };
  }

  addTweet = (tweet) => {
    this.setState({
      tweets: this.state.tweets.concat(tweet)
    });
  }

  schedule = (e) => {
    e.preventDefault();
  }

  render() {
    let tweetRows = this.state.tweets.map((tweet, i) => {
      let id = `tweet-${i}`;
      return (
        <div key={i}>
          <label htmlFor={id}>Tweet</label>
          <textarea id={id}></textarea>
        </div>
      );
    });

    return (
      <div className="App">
        <header>
          <h1>Tweet Scheduler</h1>
        </header>
        <main>
          <form onSubmit={this.schedule}>
            {tweetRows}
            <button type="button" className="btn btn-blue" onClick={this.addTweet}>Add another tweet</button>

            <div>
              <label htmlFor="interval">Interval</label>
              <input type="number" id="interval" />
            </div>
            <button type="submit" className="btn btn-blue">Schedule</button>
          </form>
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
