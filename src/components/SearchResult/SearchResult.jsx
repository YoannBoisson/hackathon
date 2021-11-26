import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiGetSearchAlbum } from "../../api/apiSearchAlbum";
import { apiGetSearchArtist } from "../../api/apiSearchArtist";
import { apiGetSearchTrack } from "../../api/apiSearchTrack";
import ThemeContext from "../../contexts/ThemeContext";
import "./search-result.css";

function SearchResult(props) {
  const { search } = props;
  const dispatch = useDispatch();
  const searchAlbum = useSelector((state) => state.searchAlbum);
  const searchArtist = useSelector((state) => state.searchArtist);
  const searchTrack = useSelector((state) => state.searchTrack);

  React.useEffect(() => {
    dispatch(apiGetSearchAlbum(search));
    dispatch(apiGetSearchArtist(search));
    dispatch(apiGetSearchTrack(search));
  }, [dispatch, search]);


  const { theme } = useContext(ThemeContext);

  return (
    <div id="hint-container" style={theme}>
      <section>
        <h3>Album</h3>
        {searchAlbum.albumFound.map((album) => (
          // <Link
          //   to={`/album/${album.id}`}
          //   style={{
          //     textDecoration: 'none',
          //     color: 'white',
          //   }}
          // >
          <div className="item-result">
            <img
              className="picture-result"
              src={album.cover_small}
              alt={album.id}
            />
            <p className="display-result">{album.title}</p>
          </div>
          // </Link>
        ))}
      </section>
      <section>
        <h3>Artiste</h3>
        {searchArtist.artistFound.map((artiste) => (
          // <Link
          //   to={`/artist/${artiste.id}`}
          //   style={{
          //     textDecoration: 'none',
          //     color: 'white',
          //   }}
          // >
          <div className="item-result">
            <img
              className="picture-result"
              src={artiste.picture_small}
              alt={artiste.id}
            />
            <p className="display-result">{artiste.name}</p>
          </div>
          // </Link>
        ))}
      </section>
      <section>
        <h3>Titre</h3>
        {searchTrack.trackFound.map((track) => (
          // <Link
          //   to={`/track/${track.id}`}
          //   style={{
          //     textDecoration: 'none',
          //     color: 'white',
          //   }}
          // >
          <div className="item-result">
            <img
              className="picture-result"
              src={track.album.cover_small}
              alt={track.id}
            />
            <p className="display-result">{track.title}</p>
          </div>
          // </Link>
        ))}
      </section>
    </div>
  );
}

export default SearchResult;
