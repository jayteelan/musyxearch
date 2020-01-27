import dotenv from "dotenv";
dotenv.config();

const discogs = {
  api_key: process.env.REACT_APP_DISCOGS_API_KEY,
  api_secret: process.env.REACT_APP_DISCOGS_API_SECRET
};

const URL = "https://api.discogs.com/";

export const fetchDiscography = async query => {
  const res = await axios.get(
    `${URL}database/search?artist=${query}&type=master&format=single&sort=year&sort_order=asc&key=${discogs.api_key}&secret=${discogs.api_secret}`
  );
  return res.data;
};
