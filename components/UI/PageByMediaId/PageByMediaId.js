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

export default function PageByMediaId(props) {
  console.log(props, "PageByMediaId URL");
  return (
    <>
      {props.movie && (
        <FeatureMedia
          mediaUrl={
            props.movie.poster_url
              ? `${_.BASE_POSTER_URL}${props.movie.poster_url}`
              : ""
          }
          title={props.movie.title}
          location="In theaters and on HBO MAX. Streaming throughout May 23rd."
          linkUrl={`/${props.mediaType}/${props.movie.id}`}
          type="single"
        />
      )}

      {props.movie && (
        <MediaRow
          title="More Like This"
          type="small-v"
          mediaType={props.mediaType}
          db={{
            url: `${
              props.mediaType === "movie"
                ? _.MOVIE_DETAIL_URL
                : _.SERIES_DETAIL_URL
            }${props.mediaId}/similar?api_key=${_.API_KEY}`,
          }}
        />
      )}

      {props.movie && (
        <CastInfo
          db={{
            url: `${
              props.mediaType === "movie"
                ? _.MOVIE_DETAIL_URL
                : _.SERIES_DETAIL_URL
            }${props.mediaId}/credits?api_key=${_.API_KEY}`,
          }}
        />
      )}
    </>
  );
}
