import { Link } from "react-router-dom";
import getNotices from "../services/app";

import "../styles/news.css";

import { useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const fetchedNews = await getNotices();
      setNews(fetchedNews);
    };

    fetchNews();
    setLoad(false);
  }, []);
  if (load) {
    return (
      <>
        <h1>Carregando...</h1>
      </>
    );
  }
  return (
    <>
      <h1 style={{ textAlign: "center", padding: "2rem" }}>
        Welcome to the NEWS
      </h1>
      <div className="content">
        {news.map((item, id) => (
          <div key={id}>
            <h2>{item.title}</h2>
            <div>
              <p>{item.description}</p>
              <img src={item.urlToImage} alt={item.title} />
            </div>
            <p>{item.publishedAt.slice(0, 10)}</p>
            <p className="seeMore">
              <Link to={`notice/${id}`}>See more</Link>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
