import { useEffect, useState } from "react";
import "./Homepage.css";

const Homepage = () => {
  const [onGoing, setOngoing] = useState([]);
  const [complete, setComplete] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAnime() {
      const request = await fetch("https://otakudesu-api.herokuapp.com/api/home");
      const response = await request.json();

      const ongoing = response.home.on_going;
      const complete = response.home.complete;

      setOngoing(ongoing);
      setComplete(complete);
      setLoading(false);
    }
    getAnime();
  }, []);

  return (
    <section className="section">
      <div className="anime-homepage">
        <h1 className="title">Home</h1>

        <h3 className="title-status">OnGoing Anime</h3>
        {!loading ? (
          <div className="ongoing-anime-list">
            {onGoing.map(anime => {
              return (
                <div className="card-ongoing">
                  <img src={anime.thumb} alt={anime.title} className="anime-image" />
                  <h4 key={anime.id} className="anime-title">
                    {anime.title}
                  </h4>
                  <p>{anime.episode}</p>
                  <span>
                    <a href={anime.link} target="_blank">
                      watch Here
                    </a>
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          <h1>Loading...</h1>
        )}

        <h3 className="title-status">Complete Anime</h3>
        {!loading ? (
          <div className="ongoing-anime-list">
            {complete.map(anime => {
              return (
                <div className="card-ongoing">
                  <img src={anime.thumb} alt={anime.title} className="anime-image" />
                  <h4 key={anime.id} className="anime-title">
                    {anime.title}
                  </h4>
                  <p>{anime.episode}</p>
                  <span>
                    <a href={anime.link} target="_blank">
                      watch Here
                    </a>
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </section>
  );
};

export default Homepage;
