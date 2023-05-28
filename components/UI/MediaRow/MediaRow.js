import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import _ from "../../../utilities/constants";
import { MovieModel } from "../../Models/MovieModel";
import shuffleArray from "../../../utilities/ShuffleArray";
export const MediaRow = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setLoadingData(false);
    axios
      .get(props.db.url)
      .then(function (response) {
        // handle success
        movies = response.data.results.map((movie) => {
          return new MovieModel(movie);
        });
        setMovies(movies);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const loopComp = (component, iter) => {
    const thumbnails = [];
    for (let i = 0; i < iter; i++) {
      thumbnails.push(component);
    }
    return thumbnails;
  };

  const ThumbnailLayout = () => {
    return movies.map((movie) => {
      return (
        <div className="media-row__thumbnail " key={movie.id}>
          <div className={`media-row__thumbnail-ctr ${props.dimensions} `}>
            <Image
              src={`${_.BASE_IMG_URL}${movie.img_url}`}
              alt="seiya"
              layout="fill"
            />
          </div>

          <div className="media-row__top-layer">
            <i className="fas fa-play" />
          </div>
        </div>
      );
    });
  };
  const LoadingLayout = () => {
    return (
      <div className={`media-row__thumbnail-ctr ${props.dimensions} `}>
        <div className="media-row__thumbnail-skeleton">
          <div className="media-row__thumbnail-skeleton-img"></div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="media-row">
        <h3 className="media-row__title">{props.title}</h3>
        <div className="media-row__thumbnails">
          {loadingData
            ? loopComp(<LoadingLayout />, 10)
            : loopComp(<ThumbnailLayout />, movies.length)}
        </div>
      </div>
    </div>
  );
};
