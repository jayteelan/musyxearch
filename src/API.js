import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const discogs = {
  api_key: process.env.REACT_APP_DISCOGS_API_KEY,
  api_secret: process.env.REACT_APP_DISCOGS_API_SECRET
};

const URL = "https://api.discogs.com/";

export const searchArtist = async query => {
  const artistId = `${URL}database/search?q=${query}&type=artist&key=${discogs.api_key}&secret=${discogs.api_secret}`;
  const res = await axios.get(artistId);
  console.log("artist id", res.data.results[0].id);
  const retrievedId = res.data.results[0].id;
  if (retrievedId) {
    const artistData = `${URL}artists/${retrievedId}`;
    const res2 = await axios.get(artistData);
    console.log("artist data", res2.data);
    return res2.data;
  }
};

export const fetchDiscography = async (query, format) => {
  const res = await axios.get(
    `${URL}database/search?artist=${query}&type=master&format=${format}&sort=year&sort_order=asc&key=${discogs.api_key}&secret=${discogs.api_secret}`
  );
  console.log("res", res.data.results);
  return res.data;
};
