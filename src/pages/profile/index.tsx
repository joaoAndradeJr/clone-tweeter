import { useParams } from 'react-router-dom';
import './profile.css';
import { useEffect, useState } from 'react';
import { TweetType, User } from '../../utils/types';
import Loading from '../../components/loading';
import Tweet from '../../components/tweet';

function Profile() {
  const params = useParams();
  const [user, setUser] = useState({} as User);
  const [isLoading, setIsLoading] = useState(true);
  const [tweets, setTweets] = useState<TweetType[]>([]);

  useEffect(() => {
    const result = Promise.all([
      fetch('https://tweets-api-olive.vercel.app/api/twitter-users')
        .then((response) => response.json())
        .then((data) => data),
      fetch('https://tweets-api-olive.vercel.app/api/tweets')
        .then((response) => response.json())
        .then((data) => data)]
    );

    result.then((data) => {
      const [users, tweets] = data;
      const user = users.find((user: User) => user.username === params.username);
      const userTweets = user.tweetsId.map((tweetId: number) => tweets.find((tweet: TweetType) => tweet.id === tweetId));
      setUser(user);
      setTweets(userTweets);
    })
    .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <img className="avatar-profile" src={ user.profilePicture } alt="Profile" />
        <img className="cover-profile" src={ user.backgroundPicture } alt="Background" />
        <div className="bio-container">
          <h2>{ user.name }</h2>
          <h3 className="span-bio">@{ user.username }</h3>
          <p>{ user.bio }</p>
        </div>
      </div>
      <div className="tweet-list">
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
    </div>
  );
}

export default Profile;
