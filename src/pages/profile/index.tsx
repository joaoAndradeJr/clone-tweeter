import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tweet from "../../components/tweet";
import { fetchTweets, fetchUsers } from "../../utils/fetch";
import { Users, TweetCard } from "../../utils/types";

function Profile() {
  const [user, setUser] = useState<Users | null>(null);
  const [tweets, setTweets] = useState<TweetCard[] | []>([])
  const [loading, setLoading] = useState(true);

  const { username } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const getUsers = await fetchUsers();
      const findUser = getUsers.find((user: Users) => user.username === username)

      const getTweets = await fetchTweets();
      const tweetsIds = findUser.tweetsId;

      let newTweets: TweetCard[] = []

      tweetsIds.forEach((id: number) => {
        const findTweet = getTweets.find((tweet: TweetCard) => tweet.id === id);
        newTweets = [...newTweets, findTweet]
      })

      setTweets(newTweets);
      setLoading(false);
      setUser(findUser);
    }

    fetchData();
  }, [])

  if (loading) return (
    <h1>Carregando...</h1>
  )

  return (
    <div className="profile-page">
      <div>
        <img src={user?.backgroundPicture} alt="background profile image" />
        <img src={user?.profilePicture} alt={user?.username} />
        <span>{user?.name}</span>
        <span>{`@${user?.username}`}</span>
        {/* <p>{bio}</p> */}
      </div>
      <div className="tweet-list">
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
    </div>

  )
}

export default Profile;
