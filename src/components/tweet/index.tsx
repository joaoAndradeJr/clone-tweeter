import { Link } from 'react-router-dom';
import './tweet.css';

type TweetProps = {
  image: string,
  username: string,
  name: string,
  tweet: string,
}

function Tweet({image, username, name, tweet}: TweetProps) {
  return(
    <div className="tweet-card">
      <img src={image} alt={username} />
      <span>{name}</span>
      <Link to={`/profile/${username}`}>
        <span>{username}</span>
      </Link>
      <p>{tweet}</p>
    </div>
  )
}

export default Tweet;
