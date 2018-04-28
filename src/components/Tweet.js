import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetBody: this.props.tweet.body
    };
  }

  handleChange = (e) => {
    this.props.onChange(
      this.props.index,
      e.target.value
    );
  }

  render() {
    return (
      <div className="mb-4">
        <textarea
          id={`tweet-${this.props.index}`}
          placeholder="Write tweet here"
          className="block border w-full mb-3"
          value={this.props.tweet.body}
          onChange={this.handleChange}></textarea>
      </div>
    );
  }
}
