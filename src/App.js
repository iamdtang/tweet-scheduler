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
        <div key={i} className="mb-4">
          <label htmlFor={id} className="block mb-3">Tweet</label>
          <textarea id={id} placeholder="Write tweet here" className="block border w-full mb-3"></textarea>
        </div>
      );
    });

    return (
      <div>
        <header className="bg-grey-darkest text-white">
          <h1 className="p-4">Tweet Scheduler</h1>
        </header>
        <main className="p-4">
          <form onSubmit={this.schedule}>
            {tweetRows}
            <div>
              <button type="button" className="text-orange underline" onClick={this.addTweet}>
                Add another tweet
              </button>
            </div>
            <div className="mt-4 mb-4">
              <label htmlFor="interval" className="block mb-3">Interval (minutes)</label>
              <input type="number" id="interval" className="block appearance-none border w-full py-2 px-3 text-grey-darker" />
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
