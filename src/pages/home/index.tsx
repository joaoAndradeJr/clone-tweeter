import { useEffect, useState } from 'react';
import './home.css';
import Tweet from '../../components/tweet';
import { TweetType } from '../../utils/types';
import Loading from '../../components/loading';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [tweets, setTweets] = useState<TweetType[]>([]);

  useEffect(() => {
    fetch('https://tweets-api-olive.vercel.app/api/tweets')
      .then((response) => response.json())
      .then((data) => {
        setTweets(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="home-page">
      {
        tweets.map((tweet) => (
          <Tweet
            key={ tweet.id }
            image={ tweet.owner.profilePicture }
            username={ tweet.owner.username }
            name={ tweet.owner.name }
            tweet={ tweet.tweet }
            comments={ tweet.commentsCount }
            retweets={ tweet.retweetsCount }
            likes={ tweet.likesCount }
          />
        ))
      }
    </div>
  );
}

export default Home;
