import Image from "next/image";
import React, { useState } from "react";
import { useStateContext } from "../../HBOProvider";
import { useEffect } from "react";
import axios from "axios";
import _ from "../../../utilities/constants";
import { MovieModel } from "../../Models/MovieModel";
import { SeriesModel } from "../../Models/SeriesModel";
import Link from "next/link";
import LazyLoad from "react-lazyload";
import { Placeholder } from "../ImagePlaceholder/Placeholder";

export const SearchModal = () => {
  const state = useStateContext();
  const [onChangeInput, setOnChangeInput] = useState("");
  const [popularSearches, setPopularSearches] = useState([]);
  const [realTimeSearches, setRealTimeSearches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [movieIDs, setMovieIDs] = useState(state.hboProvider.movieIDs);
  // const [tvIDs, setTvIDs] = useState(state.hboProvider.tvIDs);
  // const [mediId, setMediaId] = useState("");

  // check if user is able to scroll y axis if search window is open
  useEffect(() => {
    if (state.isSearchOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [state.isSearchOpen]);

  // set popular searches
  useEffect(() => {
    const fetPopularData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/all/week?language=en-US&api_key=${_.API_KEY}`
        );
        console.log(response.data, "Popular data");
        let media = response.data.results.map((media) => {
          return new MovieModel(media);
        });
        setPopularSearches(media);
        setIsLoading(false);
      } catch (error) {
        console.log(error, "SearchModal PopularSearch error");
      }
    };
    if (state.isSearchOpen && popularSearches.length === 0) {
      console.log("fetching popular data for first time");
      fetPopularData();
    }
  }, [state.isSearchOpen]);

  // set real time searches
  useEffect(() => {
    const fetRealTimeData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${_.MULTI_QUERY}${onChangeInput}&api_key=${_.API_KEY}`
        );
        let finalResponse = response.data.results.filter((e) => {
          return e.media_type === "movie" || e.media_type === "tv";
        });
        console.log(finalResponse, "Real Time data");
        let media = finalResponse.map((media) => {
          if (media.media_type === "movie") {
            return new MovieModel(media);
          } else {
            return new SeriesModel(media);
          }
        });
        setRealTimeSearches(media);
        setIsLoading(false);
      } catch (error) {}
    };

    // only fetch new data if input is > 2 in length
    if (onChangeInput.length > 2) {
      console.log(onChangeInput, "before executing function");
      fetRealTimeData();
    } else {
      setIsLoading(true);
    }
  }, [onChangeInput]);

  const setNewInput = (e) => {
    console.log(e.target.value, "USER INPUT");
    setOnChangeInput(e.target.value);
  };

  useEffect(() => {
    // check if 0 length to empty real time data
    // so it does not display if another search starts with different letters
    if (onChangeInput.length === 0) {
      setRealTimeSearches([]);
      setIsLoading(false);
    }
  }, [onChangeInput]);

  // // get state objects

  // useEffect(() => {
  //   setMovieIDs(state.hboProvider.movieIDs);
  // }, [state.hboProvider.movieIDs]);

  // useEffect(() => {
  //   setTvIDs(state.hboProvider.tvIDs);
  // }, [state.hboProvider.tvIDs]);

  // // return mediatype by checking and comparing
  // // genreIds with movieIDS and tvIDS object

  // const checkMediaTypeByIds = (idArray) => {
  //   let movieResult = idArray.genre_ids.every((e) => {
  //     return Object.values(movieIDs).includes(e);
  //   });

  //   let tvResult = idArray.genre_ids.every((e) => {
  //     return Object.values(tvIDs).includes(e);
  //   });

  //   console.log(movieResult, tvResult, "IDS RESULT");
  //   return movieResult ? "movie" : "tv";
  // };

  const Thumbnail = (props) => {
    return (
      <Link href={`/${props.media.media_type}/${props.media.id}`}>
        <div
          className="search-modal__thumbnail"
          onClick={state.hboProvider.toggleSearch}
        >
          <div className="search-modal__thumbnail-ctr">
            {popularSearches && (
              <Image
                src={`${_.BASE_POSTER_URL}${props.media.img_url}`}
                alt="seiya"
                layout="fill"
              />
            )}
          </div>

          <div className="search-modal__top-layer">
            <i className="fas fa-play" />
          </div>
        </div>
      </Link>
    );
  };

  const generateThumbnails = (Component, trending) => {
    return trending.map((media) => {
      return (
        // <LazyLoad
        //   placeholder={<Placeholder title="" type="small-v" num={7} />}
        //   key={media.id}
        // >
        <Component media={media} key={media.id} />
      );
    });
  };

  const generatePlaceHolders = () => {
    let placeHolder = [];
    for (let i = 0; i < 20; i++) {
      placeHolder.push(
        <LazyLoad key={i}>
          <Placeholder title="" type="small-v" num={10} />
        </LazyLoad>
      );
    }
    return placeHolder;
  };

  return (
    <>
      <div
        className={`search-modal ${
          state.isSearchOpen && "search-modal--active"
        } `}
      >
        <div className="search-modal__input-group">
          <input
            type="text"
            placeholder="Search for a title"
            className="search-modal__input"
            onChange={setNewInput}
          />
          <div
            className="search-modal__close-btn"
            onClick={state.hboProvider.toggleSearch}
          >
            <i className="fas fa-times" />
          </div>
        </div>

        <h3 className="search-modal__title">Popular Searches</h3>

        <div className="search-modal__thumbnails">
          {isLoading
            ? generatePlaceHolders()
            : realTimeSearches && onChangeInput.length > 0
            ? generateThumbnails(Thumbnail, realTimeSearches)
            : popularSearches && generateThumbnails(Thumbnail, popularSearches)}
        </div>
      </div>
    </>
  );
};
