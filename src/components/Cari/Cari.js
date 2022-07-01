import { useState } from "react";
import "./Cari.css";
import { Link } from "react-router-dom";

const Cari = () => {
  const [anime, setAnime] = useState("");
  const [animeList, setAnimeList] = useState([]);

  async function cariAnime() {
    if (anime === undefined && anime === "") {
      console.log("error");
    } else {
      const request = await fetch(`https://otakudesu-api.herokuapp.com/api/search/${anime}`);
      const data = await request.json();
      setAnimeList(data.search_results);
    }
  }

  return (
    <section className="section">
      <div className="pencarian">
        <input className="input" placeholder="cari anime yang anda inginkan" type="text" onChange={eve => setAnime(eve.target.value)} />
        <button className="button" onClick={() => cariAnime()}>
          Cari
        </button>
      </div>

      <div className="cards">
        {animeList === undefined && <h5 className="if-Error">Tolong Masukan Nama Anime!!!</h5>}
        {animeList !== undefined &&
          animeList.map(anime => {
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
                        return <span key={genre.genre_id}>{genre.genre_title}, </span>;
                      })}
                    </p>
                  </div>

                  <div className="bottom">
                    <h5>
                      <Link to={`/cari/detail/${anime.id.replace("https://otakudesu.watch/anime/", "")}`}>Detail</Link>
                    </h5>
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
    </section>
  );
};

export default Cari;
