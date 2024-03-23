import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getNotices from "../services/app";

import Access from "../components/Access";

import "../styles/notice.css";

export default function Notice() {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const getName = async () => {
      const nameArticle = await getNotices();

      setArticle(nameArticle);
    };
    getName();
    setLoad(false);
  }, []);

  const result = article.find((_, index) => index === parseInt(id));

  if (load) {
    return (
      <>
        <h1>Carregando...</h1>
      </>
    );
  }

  return (
    <div className="container">
      <div className="article">
        <p className="font">
          Author:<spam> {result?.author ? result.author : "No Author"}</spam>
        </p>
        <p className="title">{result?.title}</p>

        <img src={result?.urlToImage} alt={result?.title} />
        <p className="description">
          <i>{result?.content}</i>
        </p>
        <p>
          <Link to={result?.url} target="_blank">
            Link to access
          </Link>
        </p>
      </div>
      <Access />
    </div>
  );
}
