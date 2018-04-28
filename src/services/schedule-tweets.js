export default async function scheduleTweets(tweets, interval) {
  await postTweet(tweets, 0, interval);
  console.log('done');
}

async function postTweet(tweets, i, interval) {
  console.log('posting', tweets[i].body);

  if (i < tweets.length - 1) {
    await timeout(interval * 60 * 1000);
    await postTweet(tweets, i + 1, interval);
  }
}

function timeout(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}
