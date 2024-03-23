import axios from "axios";

const keyvalue = import.meta.env.VITE_REACT_APP_API_KEY;

const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${keyvalue}`;

const getNotices = async () => {
  try {
    const response = await axios.get(URL);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export default getNotices;
