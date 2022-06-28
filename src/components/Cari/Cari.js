import { useState } from "react";
import "./Cari.css";

const Cari = () => {
  const [anime, setAnime] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function cariAnime() {
    const request = await fetch(`https://otakudesu-api.herokuapp.com/api/search/${anime}`);
    const data = await request.json();
    setLoading(false);
    setAnimeList(data.search_results);
  }

  return (
    <section>
      <div className="pencarian">
        <input className="input" placeholder="cari anime yang anda inginkan" type="text" onChange={eve => setAnime(eve.target.value)} />
        <button className="button" onClick={() => cariAnime()}>
          Cari
        </button>
      </div>

      {!loading ? (
        <div className="cards">
          {animeList.map(anime => {
            return (
              <div className="card" key={anime.id}>
                <img className="img-anime" src={anime.thumb} alt={anime.title} />

                <div className="content">
                  <div className="head">
                    <h4 className="judul-anime">{anime.title}</h4>
                    <p className="realease">
                      Rating <span>{anime.score}</span>
                    </p>
                    <p className="genre">
                      Genre{" "}
                      {anime.genre_list.map(genre => {
                        return <span>{genre.genre_title}, </span>;
                      })}
                    </p>
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
        <p>Sedang mencari...</p>
      )}
    </section>
  );
};

export default Cari;
