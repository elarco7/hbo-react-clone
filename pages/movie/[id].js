import { AuthCheck } from "../../components/AuthCheck";
import MainLayout from "../../components/Layouts/MainLayout";
import { CastInfo } from "../../components/UI/CastInfo/CastInfo";
import { FeatureMedia } from "../../components/UI/Featured-Media/FeatureMedia";
import { MediaRow } from "../../components/UI/MediaRow/MediaRow";
import _ from "../../utilities/constants";
import { useState, useEffect } from "react";
import axios from "axios";
import { MovieModel } from "../../components/Models/MovieModel";
import { Placeholder } from "../../components/UI/ImagePlaceholder/Placeholder";
import LazyLoad from "react-lazyload";
import { useStateContext } from "../../components/HBOProvider";
import PageByMediaId from "../../components/UI/PageByMediaId/PageByMediaId";
import PageByGenreId from "../../components/UI/PageByGenreId/PageByGenreId";

export default function SingleMediaPage(props) {
  const state = useStateContext();
  const [movie, setMovie] = useState([]);
  const [isPageById, setIsPageById] = useState(false);

  // keep state of previous props.query.id to use in useEffect
  const [mediaId, setMediaId] = useState(props.query.id);
  console.log(props, "PROPS QUERY ID: ", props.query.id);

  const checkIsNum = (val) => {
    return !isNaN(parseInt(val));
  };

  // Update mediaId when the id prop changes
  useEffect(() => {
    setMediaId(props.query.id);
    if (checkIsNum(props.query.id)) {
      setIsPageById(true);
    } else {
      setIsPageById(false);
    }
  }, [props.query.id]);

  useEffect(() => {
    let id = parseInt(mediaId);
    const fetchMovieData = async () => {
      console.log(id, "PageByID ID");

      let response;
      try {
        response = await axios.get(
          `${_.MOVIE_DETAIL_URL}${id}?language=en-US&api_key=${_.API_KEY}`
        );

        console.log(response.data, "Response in ID.js Page");
        let movieData = new MovieModel(response.data);
        setMovie(movieData);
      } catch (error) {
        console.log("ERROR USEEFECT");
        console.log(error, "Error in Id.js");
      }
    };
    if (isPageById) {
      fetchMovieData();
    }
  }, [isPageById, mediaId]);

  return AuthCheck(
    <MainLayout>
      {movie && isPageById && (
        <PageByMediaId mediaType="movie" mediaId={mediaId} movie={movie} />
      )}
      {movie && !isPageById && (
        <PageByGenreId mediaId={mediaId} mediaType="movie" />
      )}
    </MainLayout>
  );
}

export async function getServerSideProps({ query }) {
  // context value contains the query params

  return {
    props: {
      query: query,
    },
  };
}
