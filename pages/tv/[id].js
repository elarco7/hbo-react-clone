import { AuthCheck } from "../../components/AuthCheck";
import MainLayout from "../../components/Layouts/MainLayout";
import { CastInfo } from "../../components/UI/CastInfo/CastInfo";
import { FeatureMedia } from "../../components/UI/Featured-Media/FeatureMedia";
import { MediaRow } from "../../components/UI/MediaRow/MediaRow";
import _ from "../../utilities/constants";
import { useState, useEffect } from "react";
import axios from "axios";
import { Placeholder } from "../../components/UI/ImagePlaceholder/Placeholder";
import LazyLoad from "react-lazyload";
import { SeriesModel } from "../../components/Models/SeriesModel";
import PageByMediaId from "../../components/UI/PageByMediaId/PageByMediaId";
import PageByGenreId from "../../components/UI/PageByGenreId/PageByGenreId";

//[mediaType]
//  [id].js
// Build a streaming service: Creating a media type route

export default function SingleSeriesMediaPage(props) {
  const [series, setSeries] = useState([]);
  const [isPageById, setIsPageById] = useState(false);

  // keep state of previous props.query.id to use in useEffect
  const [mediaId, setMediaId] = useState(props.query.id);

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
          `${_.SERIES_DETAIL_URL}${id}?language=en-US&api_key=${_.API_KEY}`
        );

        console.log(response.data, "Response in Series ID.js Page");
        let seriesData = new SeriesModel(response.data);
        setSeries(seriesData);
      } catch (error) {
        console.log("ERROR USEEFECT");
        console.log(error, "Error in Id.js");
      }
    };
    if (isPageById) {
      fetchMovieData();
    }
  }, [isPageById, mediaId]);

  // useEffect(() => {
  //   const fetchSeriesData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${_.SERIES_DETAIL_URL}${props.query.id}?language=en-US&api_key=${_.API_KEY}`
  //       );
  //       // handle success
  //       console.log(response.data, "Response in Series ID.js Page");
  //       let seriesData = new SeriesModel(response.data);
  //       setSeries(seriesData);
  //     } catch (error) {
  //       // handle error
  //       console.log(error, "Error in Series Id.js");
  //     }
  //   };
  //   fetchSeriesData();
  // }, [mediaId]);

  return AuthCheck(
    <MainLayout>
      <MainLayout>
        {series && isPageById && (
          <PageByMediaId mediaId={mediaId} mediaType="tv" movie={series} />
        )}
        {series && !isPageById && (
          <PageByGenreId mediaId={mediaId} mediaType="tv" />
        )}
      </MainLayout>
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
