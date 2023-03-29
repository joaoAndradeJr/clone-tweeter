export const fetchUsers = async () => {
  const response = await fetch('https://public-apis-2iz2ghzso-felipemuller20.vercel.app/api/twitter-users');
  const data = await response.json()
  return data;
}

export const fetchTweets = async () => {
  const response = await fetch('https://public-apis-2iz2ghzso-felipemuller20.vercel.app/api/tweets');
  const data = await response.json()
  return data;
}
