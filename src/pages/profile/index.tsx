import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Tweet from '../../components/tweet';
import { fetchTweets, fetchUsers } from '../../utils/fetch';
import { Users, TweetCard } from '../../utils/types';
import './profile.css';

function Profile() {
  const [user, setUser] = useState<Users | null>(null);
  const [tweets, setTweets] = useState<TweetCard[] | []>([]);
  const [loading, setLoading] = useState(true);

  const { username } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const usersResponse = await fetchUsers();
      const findUser = usersResponse.find((actualUser: Users) => (
        actualUser.username === username
      ));

      if (findUser) {
        const getTweets = await fetchTweets();
        const tweetsIds = findUser.tweetsId;

        let newTweets: TweetCard[] = [];

        tweetsIds.forEach((id: number) => {
          const findTweet = getTweets.find((tweet: TweetCard) => tweet.id === id);
          newTweets = [...newTweets, findTweet];
        });
        setTweets(newTweets);
        setUser(findUser);
      }

      setLoading(false);
    };

    fetchData();
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

  if (!user) {
    return (
      <div className="profile-page">
        <h1>Usuário não encontrado</h1>
        <Link to="/">Voltar para a página inicial</Link>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <img
          className="cover-profile"
          src={ user.backgroundPicture }
          alt={ `${user.username} background` }
        />
        <img
          className="avatar-profile"
          src={ user.profilePicture }
          alt={ user.username }
        />
        <div className="bio-container">
          <h2>{ user.name }</h2>
          <span className="span-bio">{ `@${user.username}`}</span>
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
              likes={ tweet.likesCount }
              retweets={ tweet.retweetsCount }
            />
          ))
        }
      </div>
    </div>
  );
}

export default Profile;
