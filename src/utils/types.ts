export type TweetCard = {
  id: number,
  owner: {
    name: string,
    username: string,
    profilePicture: string,
  },
  commentsCount: number,
  tweet: string,
  retweetsCount: number,
  likesCount: number,
};

export type Users = {
  id: number,
  name: string,
  username: string,
  profilePicture: string,
  backgroundPicture: string,
  tweetsId: number[],
  following: number,
  followers: number,
  bio: string,
};
