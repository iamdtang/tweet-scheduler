import React, { Component } from 'react';
import Tweet from './components/Tweet';
import './App.css';
import scheduleTweets from './services/schedule-tweets';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: 2,
      tweets: [
        {}
      ]
    };
  }

  addTweet = () => {
    this.setState({
      tweets: this.state.tweets.concat({})
    });
  }

  updateTweet = (index, newTweetBody) => {
    let tweets = [...this.state.tweets];
    tweets[index].body = newTweetBody;
    this.setState({ tweets });
  }

  updateInterval = (e) => {
    this.setState({ interval: e.target.value });
  }

  schedule = (e) => {
    e.preventDefault();
    let { tweets, interval } = this.state;
    console.log(tweets, interval);
    scheduleTweets(tweets, interval);
  }

  render() {
    let tweetRows = this.state.tweets.map((tweet, i) => {
      return (
        <Tweet key={i} index={i} tweet={tweet} onChange={this.updateTweet} />
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
              <input
                type="number"
                id="interval"
                className="block appearance-none border w-full py-2 px-3 text-grey-darker"
                value={this.state.interval}
                onChange={this.updateInterval} />
            </div>
            <button type="submit" className="btn btn-blue">Schedule</button>
          </form>
        </main>
      </div>
    );
  }
}

export default App;
