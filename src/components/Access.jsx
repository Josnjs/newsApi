import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import getNotices from "../services/app";

import "../styles/notice.css";

export default function Access() {
  const [topic, setTopic] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const getTopics = async () => {
      const resTopics = await getNotices();
      setTopic(resTopics);
    };
    getTopics();
    setLoad(false);
  }, []);

  if (load) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="aside">
      <h2>
        <i>Topics</i>
      </h2>
      {topic.map((item, index) => (
        <div key={index}>
          <Link to={`${item.url}`} target="_blank">
            <div className="card">
              <p>{item?.title.slice(0, 32) + "..."}</p>
              <spam>
                <i>{item?.description}</i>
              </spam>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
