import { useEffect, useState } from "react";

const Complete = () => {
  const [complete, setComplete] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getComplete() {
      const request = await fetch("https://otakudesu-api.herokuapp.com/api/complete");
      const data = await request.json();
      setComplete(data.animeList);
      setLoading(false);
    }

    getComplete();
  }, []);

  return (
    <section className="section">
      <div className="title">
        <h2>Anime Complete</h2>
      </div>

      {!loading ? (
        <div className="cards">
          {complete.map(anime => {
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

export default Complete;
