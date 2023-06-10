import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import _ from "../../../utilities/constants";
import { MovieModel } from "../../Models/MovieModel";
import shuffleData from "../../../utilities/shuffleData";
import Link from "next/link";

export const MediaRow = (props) => {
  const [loadingData, setLoadingData] = useState(false);
  const [movies, setMovies] = useState([]);
  console.log("Props data in MediaRow.js");

  useEffect(() => {
    console.log("Props data in MediaRow.js");

    setLoadingData(true);
    axios
      .get(props.db.url)
      .then(function (response) {
        console.log(response, "RESPONSE in MediaRow.js");
        // handle success
        const movieData = response.data.results.map((movie) => {
          return new MovieModel(movie);
        });
        setMovies(movieData);
        setLoadingData(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error, "Error in MediaRow.js");
      });
  }, [props.db.url]);

  const imgWidth = (imgType) => {
    switch (imgType) {
      case "large-v":
        return "400";
      case "large-h":
        return "500";
      case "small-v":
        return "185";
      case "small-h":
        return "342";
    }
  };

  const generateThumbnails = (Component, iter) => {
    const thumbnails = [];
    for (let i = 0; i < iter; i++) {
      thumbnails.push(<Component key={i} />);
    }
    return thumbnails;
  };

  const ThumbnailLayout = () => {
    return movies.map((movie) => {
      return (
        <Link href={`/${props.mediaType}/${movie.id}`} key={movie.id}>
          <div className="media-row__thumbnail " data={movie.id}>
            <div className={`media-row__thumbnail-ctr ${props.type} `}>
              <Image
                src={`${_.BASE_IMG_URL}${imgWidth(props.type)}${movie.img_url}`}
                alt="seiya"
                layout="fill"
              />
            </div>

            <div className="media-row__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>
        </Link>
      );
    });
  };
  const LoadingLayout = () => {
    return (
      <div className={`media-row__thumbnail-ctr ${props.type} `}>
        <div className="media-row__thumbnail-skeleton">
          <div className="media-row__thumbnail-skeleton-img"></div>
        </div>
      </div>
    );
  };
  return (
    <div className="media-row ">
      <h3 className="media-row__title">{props.title}</h3>
      <div className="media-row__thumbnails">
        {loadingData
          ? generateThumbnails(LoadingLayout, movies.length)
          : generateThumbnails(ThumbnailLayout, movies.length)}
      </div>
    </div>
  );
};
