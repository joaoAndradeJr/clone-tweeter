import { useEffect, useState } from 'react';
import { TweetCard } from '../../utils/types';
import { fetchTweets } from '../../utils/fetch';
import Tweet from '../../components/tweet';

import './home.css';

function Home() {
  const [tweets, setTweets] = useState<TweetCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTweets();
      setTweets(data);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div className="loading-page">
        <img
          width="100"
          src="https://thumbs.gfycat.com/CorruptOldfashionedGuineapig-max-1mb.gif"
          alt="carregando"
        />
      </div>
    );
  }

  return (
    <div className="home-page">
      <div className="new-tweet-card">
        <input placeholder="O que está acontecendo?" />
        <button>Tweetar</button>
      </div>
      {
        tweets.map((tweet) => (
          <Tweet
            key={ tweet.id }
            image={ tweet.owner.profilePicture }
            username={ tweet.owner.username }
            name={ tweet.owner.name }
            tweet={ tweet.tweet }
            comments={ tweet.commentsCount }
            likes={ tweet.likesCount }
            retweets={ tweet.retweetsCount }
          />
        ))
      }
    </div>
  );
}

export default Home;
