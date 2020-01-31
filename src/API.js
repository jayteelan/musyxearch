import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const discogs = {
  api_key: process.env.REACT_APP_DISCOGS_API_KEY,
  api_secret: process.env.REACT_APP_DISCOGS_API_SECRET
};

const URL = "https://api.discogs.com/";

/* ---------- SEARCH FOR AN ARTIST AND RETRIEVE PROFILE INFO ---------- */
// with assistance from (https://stackoverflow.com/questions/47343225/making-2-sequential-requests-with-axios-second-request-depends-on-the-response)

export const searchArtist = async query => {
  // this first API call searches the Discogs database for artists who match the search string and, more importantly, provides a unique ID number for each one
  const artistId = `${URL}database/search?q=${query}&type=artist&key=${discogs.api_key}&secret=${discogs.api_secret}`;
  const res = await axios.get(artistId);
  try {
    // there's some other good info in there too, so let's hold onto it
    const allInfo = [];
    allInfo.push(res.data.results[0]);
    // now that we have the ID number for the artist who best matches the search string, let's use that to pull up their profile...
    const retrievedId = res.data.results[0].id;
    if (retrievedId) {
      const artistData = `${URL}artists/${retrievedId}`;
      const res2 = await axios.get(artistData);
      try {
        // ...and add that data to the info we got before
        allInfo.push(res2.data);
        return allInfo;
      } catch (err) {
        alert("error", err);
      }
    }
  } catch (err) {
    alert("error", err);
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
    alert("error", err);
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
    alert("error", err);
  }
};
