import { useEffect, useState } from "react";
import "./Homepage.css";

const Homepage = () => {
  const [onGoing, setOngoing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Home";
    async function getAnime() {
      const request = await fetch("https://otakudesu-api.herokuapp.com/api/home");
      const response = await request.json();
      const ongoing = response.home.on_going;
      setOngoing(ongoing);
      setLoading(false);
    }
    getAnime();
  }, []);

  return (
    <section className="section">
      <div className="title">
        <h2>Anime Ongoing</h2>
      </div>

      {!loading ? (
        <div className="cards">
          {onGoing.map(anime => {
            return (
              <div className="card" key={anime.id}>
                <img className="img-anime" src={anime.thumb} alt={anime.title} />

                <div className="content">
                  <div className="head">
                    <h4 className="judul-anime">{anime.title}</h4>
                    <p className="realease">
                      Realease On <span>{anime.uploaded_on}</span>
                    </p>
                    <p className="epesode">{anime.episode}</p>
                  </div>

                  <div className="bottom">
                    <h5>
                      <a href={anime.link} target="_blank" rel="noreferrer">
                        Watch here
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default Homepage;
