import { useStateContext } from "../../components/HBOProvider";
import MainLayout from "../../components/Layouts/MainLayout";
import { FeatureMedia } from "../../components/UI/Featured-Media/FeatureMedia";
import { AuthCheck } from "../../components/AuthCheck";
import { MediaRow } from "../../components/UI/MediaRow/MediaRow";
import _ from "../../utilities/constants";
import LazyLoad from "react-lazyload";
import { Placeholder } from "../../components/UI/ImagePlaceholder/Placeholder";
import { useEffect, useState } from "react";
import randomData from "../../utilities/randomData";
import axios from "axios";
import { MovieModel } from "../../components/Models/MovieModel";
import { GenreNav } from "../../components/UI/GenreNav/GenreNav";
import shuffleData from "../../utilities/shuffleData";

export default function MediaTypePage(props) {
  const state = useStateContext();

  const ShowRandomMedia = () => {
    return props.genresData.map((data) => {
      let thumbType = randomData(state.hboProvider.thumbTypes);
      return (
        <LazyLoad
          offset={-200}
          placeholder={
            <Placeholder title={data.name} type={thumbType} num={7} />
          }
          key={data.id}
        >
          <MediaRow
            title={data.name}
            type={thumbType}
            mediaType={props.query.mediaType}
            db={{
              url: `${_.DISCOVER_MEDIATYPE_URL}${props.query.mediaType}?with_genres=${data.id}&primary_release_year=2021&api_key=${_.API_KEY}`,
            }}
          />
        </LazyLoad>
      );
    });
  };

  return AuthCheck(
    <MainLayout>
      <FeatureMedia
        mediaUrl={`${_.BASE_POSTER_URL}${
          props.featuredData.backdrop_path
            ? props.featuredData.backdrop_path
            : props.featuredData.poster_path
        }`}
        title={
          props.query.mediaType === "movie"
            ? props.featuredData.original_title
            : props.featuredData.original_name
        }
        linkUrl={`/${props.query.mediaType}/${props.featuredData.id}`}
        type="single"
      />
      <GenreNav
        mediaType={props.query.mediaType}
        genresData={props.genresData}
      />
      <ShowRandomMedia />
    </MainLayout>
  );
}

export async function getServerSideProps({ query }) {
  let genresData;
  let featuredData;

  try {
    genresData = await axios.get(
      `${_.GENRES_LIST}${query.mediaType}/list?api_key=${_.API_KEY}`
    );
    featuredData = await axios.get(
      `${_.DISCOVER_MEDIATYPE_URL}${query.mediaType}?primary_release_year=2021&api_key=${_.API_KEY}`
    );
    // console.log("GenresData:");
    // console.log(genresData.data);
  } catch (error) {
    // console.log(error, "Error Index.js");
  }
  return {
    props: {
      genresData: genresData.data.genres,
      featuredData: shuffleData(featuredData.data.results)[0],
      query: query,
    },
  };
}
