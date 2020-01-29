import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const discogs = {
  api_key: process.env.REACT_APP_DISCOGS_API_KEY,
  api_secret: process.env.REACT_APP_DISCOGS_API_SECRET
};

const URL = "https://api.discogs.com/";

/* ---------- SEARCH FOR AN ARTIST AND RETRIEVE PROFILE INFO ---------- */
export const searchArtist = async query => {
  // with assistance from (https://stackoverflow.com/questions/47343225/making-2-sequential-requests-with-axios-second-request-depends-on-the-response)
  const artistId = `${URL}database/search?q=${query}&type=artist&key=${discogs.api_key}&secret=${discogs.api_secret}`;
  const res = await axios.get(artistId);
  try {
    const allInfo = [];
    allInfo.push(res.data.results[0]);
    const retrievedId = res.data.results[0].id;
    if (retrievedId) {
      const artistData = `${URL}artists/${retrievedId}`;
      const res2 = await axios.get(artistData);
      try {
        allInfo.push(res2.data);
        return allInfo;
      } catch (err) {
        console.log("error", err);
      }
    }
  } catch (err) {
    console.log("error", err);
  }
};

/* ---------- GET AN ARTIST'S RELEASES IN A SPECIFIC CATEGORY ---------- */
export const fetchDiscography = async (query, format) => {
  try {
    const res = await axios.get(
      `${URL}database/search?artist=${query}&type=master&format=${format}&sort=year&sort_order=asc&key=${discogs.api_key}&secret=${discogs.api_secret}`
    );
    return res.data;
  } catch (err) {
    console.log("error", err);
  }
};

/* ---------- GET DETAILED INFORMATION ABOUT A SPECIFIC RELEASE ---------- */
export const fetchRelease = async query => {
  try {
    const res = await axios.get(
      `${URL}masters/${query}?key=${discogs.api_key}&secret=${discogs.api_secret}`
    );
    return res.data;
  } catch (err) {
    console.log("error", err);
  }
};
