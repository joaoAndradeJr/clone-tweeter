import { Link } from 'react-router-dom';
import './tweet.css';

type TweetProps = {
  image: string,
  username: string,
  name: string,
  tweet: string,
};

function Tweet({ image, username, name, tweet }: TweetProps) {
  return (
    <div className="tweet-card">
      <div className="user-img">
        <img src={ image } alt={ username } />
      </div>
      <div className="user-info">
        <span className="info-name">{ name }</span>
        <span><Link to={ `/profile/${username}` }>{ `@${username}` }</Link></span>
        <p>{tweet}</p>
      </div>
    </div>
  );
}

export default Tweet;
