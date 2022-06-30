import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Detail.css";

const Detail = () => {
  const params = useParams();
  const [info, setInfo] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getInfo() {
      const request = await fetch(`https://otakudesu-api.herokuapp.com/api/anime/${params.id}`);
      if (!request.ok) {
        return setError(true);
      }

      const data = await request.json();
      setInfo(data);
    }

    getInfo();
  });

  if (error) {
    return <h1>Data ksoong</h1>;
  }

  return (
    <section className="section">
      <div className="back">
        <Link to="/cari">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>

      <div className="informations">
        <div className="img-info">
          <img src={info.thumb} alt={info.title} />
        </div>

        <div className="information-desc">
          <div className="top">
            <h1>{info.title}</h1>
            <p>{info.score}</p>
          </div>

          <div className="maker">
            <p>Release on {info.release_date}</p>
            <p>{info.studio}</p>
          </div>

          {info.status === "Ongoing" ? <p className="ongoing-anime">{info.status}</p> : <p className="complete">{info.status}</p>}
          <p>{info.synopsis}</p>
          <h5>{info.producer}</h5>
        </div>
      </div>
    </section>
  );
};

export default Detail;
