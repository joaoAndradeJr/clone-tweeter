import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Tweet from '../../components/tweet';
import { fetchTweets, fetchUsers } from '../../utils/fetch';
import { Users, TweetCard } from '../../utils/types';

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
      <h1>Carregando...</h1>
    );
  }

  if (!user) {
    return (
      <>
        <h1>Usuário não encontrado</h1>
        <Link to="/">Voltar para a página inicial</Link>
      </>
    );
  }

  return (
    <div className="profile-page">
      <div>
        <img src={ user.backgroundPicture } alt={ `${user.username} background` } />
        <img src={ user.profilePicture } alt={ user.username } />
        <span>{ user.name }</span>
        <span>{ `@${user.username}`}</span>
        <p>{ user.bio }</p>
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
            />
          ))
        }
      </div>
    </div>
  );
}

export default Profile;
