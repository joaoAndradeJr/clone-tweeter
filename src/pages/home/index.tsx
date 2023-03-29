import { useEffect, useState } from 'react';
import { TweetCard } from '../../utils/types';
import { fetchTweets } from '../../utils/fetch';
import Tweet from '../../components/tweet';

function Home() {
  const [tweets, setTweets] = useState<TweetCard[] | []>([])

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTweets();
      setTweets(data)
    }
    getData();
  }, []);

  return (
    <div className="home-page">
      <div>
        <input placeholder="O que está acontecendo?"/>
        <button>Tweetar</button>
      </div>
      {
        tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            image={tweet.owner.profilePicture}
            username={tweet.owner.username}
            name={tweet.owner.name}
            tweet={tweet.tweet}
          />
        ))
      }
    </div>
  )
}

export default Home;
