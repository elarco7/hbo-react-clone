import { AuthCheck } from "../../AuthCheck";
import { CastInfo } from "../../UI/CastInfo/CastInfo";
import { FeatureMedia } from "../../UI/Featured-Media/FeatureMedia";
import { MediaRow } from "../../UI/MediaRow/MediaRow";
import _ from "../../../utilities/constants";
import { useState, useEffect } from "react";
import axios from "axios";
import { MovieModel } from "../../../components/Models/MovieModel";
import { Placeholder } from "../../../components/UI/ImagePlaceholder/Placeholder";
import LazyLoad from "react-lazyload";
import { useStateContext } from "../../../components/HBOProvider";
import randomData from "../../../utilities/randomData";
import { GenreNav } from "../GenreNav/GenreNav";

export default function PageByGenreId(props) {
  const state = useStateContext();
  const [movie, setMovie] = useState([]);
  const [movieIDs, setMovieIDs] = useState({});
  const [tvIDs, setTvIDs] = useState({});
  const [genreId, setGenreId] = useState(0);

  // get genreList from state
  const [tvGenreList, setTvGenreList] = useState(state.hboProvider.tvGenreList);
  const [movieGenreList, setMovieGenreList] = useState(
    state.hboProvider.movieGenreList
  );

  // keep state of previous props.query.id to use in useEffect
  const [mediaId, setMediaId] = useState(props.mediaId);
  console.log(props, "PageByGenre ID PROPS: ", props.mediaId);
  console.log(tvGenreList, "TVGENRELIST");

  const getGenreId = (id, medidaType) => {
    let genreId;
    if (medidaType === "movie") {
      //   console.log(movieIDs[id], "ID RETURNED");
      //   console.log(movieIDs, "MOVIEIDS HBOPROVIDER");
      genreId = movieIDs[id];
    } else {
      //   console.log(tvIDs[id], "ID RETURNED");
      //   console.log(tvIDs, "MOVIEIDS HBOPROVIDER");

      genreId = tvIDs[id];
    }
    return genreId;
  };

  useEffect(() => {
    setTvGenreList(state.hboProvider.tvGenreList);
  }, [state.hboProvider.tvGenreList]);

  useEffect(() => {
    setMovieGenreList(state.hboProvider.movieGenreList);
  }, [state.hboProvider.movieGenreList]);

  useEffect(() => {
    setMovieIDs(state.hboProvider.movieIDs);
  }, [state.hboProvider.movieIDs]);

  useEffect(() => {
    setTvIDs(state.hboProvider.tvIDs);
  }, [state.hboProvider.tvIDs]);

  // Update mediaId when the id prop changes
  useEffect(() => {
    setMediaId(props.mediaId);
  }, [props.mediaId]);

  useEffect(() => {
    const fetchMovieData = async () => {
      let response;
      try {
        let id = getGenreId(props.mediaId, props.mediaType);
        setGenreId(id);
        response = await axios.get(
          `${_.DISCOVER_MEDIATYPE_URL}${props.mediaType}?with_genres=${id}&sort_by=popularity.desc&primary_release=2023&api_key=${_.API_KEY}`
        );

        console.log(response.data, "Response in PageByGenre.js Page");
        let movieData = new MovieModel(randomData(response.data.results));
        setMovie(movieData);
      } catch (error) {
        console.log(error, "Error in PageByGenre.js");
      }
    };

    if (Object.keys(movieIDs).length > 0 && Object.keys(tvIDs).length > 0) {
      fetchMovieData();
    }
  }, [mediaId, movieIDs, tvIDs]);

  const showRandomMedia = () => {
    return Object.keys(movieIDs).map((key, index) => {
      return (
        <LazyLoad
          offset={-200}
          placeholder={
            <Placeholder title="Adeventure Movies" type={"large-v"} num={7} />
          }
          key={index}
        >
          <MediaRow
            title={key.name}
            type="small-v"
            mediaType={props.mediaType}
            db={{
              url: `${_.DISCOVER_MEDIATYPE_URL}${
                props.mediaType
              }?with_genres=${genreId}&sort_by=popularity.desc&primary_release=2023&page=${
                index + 1
              }&api_key=${_.API_KEY}`,
            }}
          />
        </LazyLoad>
      );
    });
  };

  return (
    <>
      {movie && (
        <FeatureMedia
          mediaUrl={
            movie.poster_url ? `${_.BASE_POSTER_URL}${movie.poster_url}` : ""
          }
          title={movie.title}
          location="In theaters and on HBO MAX. Streaming throughout May 23rd."
          linkUrl={`/${props.mediaType}/${movie.id}`}
          type="single"
        />
      )}

      {(tvGenreList || movieGenreList) && (
        <GenreNav
          mediaType={props.mediaType}
          genresData={
            props.mediaType === "movie" ? movieGenreList : tvGenreList
          }
        />
      )}

      {movieIDs && showRandomMedia()}
    </>
  );
}
