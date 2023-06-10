import { useStateContext } from "../components/HBOProvider";
import MainLayout from "../components/Layouts/MainLayout";
import { FeatureMedia } from "../components/UI/Featured-Media/FeatureMedia";
import { AuthCheck } from "../components/AuthCheck";
import { MediaRow } from "../components/UI/MediaRow/MediaRow";
import _ from "../utilities/constants";
import LazyLoad from "react-lazyload";
import { Placeholder } from "../components/UI/ImagePlaceholder/Placeholder";
import { useEffect, useState } from "react";
import randomData from "../utilities/randomData";
import axios from "axios";
import { MovieModel } from "../components/Models/MovieModel";

export default function Home({}) {
  const state = useStateContext();
  const [nowPlaying, setNowPlaying] = useState([]);
  const [mediaUrl, setMediaUrl] = useState("NOT SET"); // State variable for mediaUrl

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(_.NOW_PLAYING_URL);
        // handle success
        let movies = response.data.results.map((movie) => {
          return new MovieModel(movie);
        });
        setNowPlaying(randomData(movies));
      } catch (error) {
        // handle error
        console.log(error, "Error in Index.js");
      }
    };
    fetchMovieData();
  }, []);

  useEffect(() => {
    // Perform actions that rely on the updated nowPlaying state here
    if (nowPlaying && nowPlaying.poster_url) {
      const updatedMediaUrl = !nowPlaying.isVideo
        ? `${_.BASE_POSTER_URL}${nowPlaying.poster_url || nowPlaying.img_url}`
        : "https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&loop=1&start=16";

      // Update any other state or perform additional logic based on the updated nowPlaying state
      console.log(updatedMediaUrl, "Updated UseEffect");
      setMediaUrl(updatedMediaUrl); // Update the mediaUrl state variable
    }
  }, [nowPlaying]);

  // TODO:
  // dinamically get youtube embed links for each nowPlaying movie
  // in the meantime just display its poster image

  return AuthCheck(
    <MainLayout>
      <FeatureMedia
        mediaUrl={mediaUrl}
        title={nowPlaying.title}
        location="In theaters and on HBO MAX. Streaming throughout May 23rd."
        linkUrl={`/movie/${nowPlaying.id}`}
        type="front-img"
      />
      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholder title="Adeventure Movies" type={"large-v"} num={7} />
        }
      >
        <MediaRow
          title="Adventure Movies"
          type={"large-v"}
          mediaType="movie"
          db={{
            url: `${_.DISCOVER_MOVIE_URL}with_genres=${_.ADVENTURE_ID}&primary_release_year=2023&api_key=${_.API_KEY}`,
          }}
        />
      </LazyLoad>

      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholder title="Popular Series" type={"small-h"} num={7} />
        }
      >
        <MediaRow
          title="Popular Series"
          type={"small-h"}
          mediaType="tv"
          db={{
            url: `${_.POPULAR_TV_URL}&api_key=${_.API_KEY}`,
          }}
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholder title="Action Movies" type={"small-v"} num={7} />
        }
      >
        <MediaRow
          title="Action Movies"
          type={"small-v"}
          mediaType="movie"
          db={{
            url: `${_.DISCOVER_MOVIE_URL}with_genres=${_.ACTION_ID}&primary_release_year=2023&api_key=${_.API_KEY}`,
          }}
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholder title="Sci-fi Movies" type={"large-h"} num={7} />
        }
      >
        <MediaRow
          title="Sci-fi Movies"
          type={"large-h"}
          mediaType="movie"
          db={{
            url: `${_.DISCOVER_MOVIE_URL}with_genres=${_.SCI_FI_ID}&primary_release_year=2023&api_key=${_.API_KEY}`,
          }}
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholder title="Horror Movies" type={"large-v"} num={7} />
        }
      >
        <MediaRow
          title="Horror Movies"
          type={"large-v"}
          mediaType="movie"
          db={{
            url: `${_.DISCOVER_MOVIE_URL}with_genres=${_.HORROR_ID}&primary_release_year=2023&api_key=${_.API_KEY}`,
          }}
        />
      </LazyLoad>
    </MainLayout>
  );
}
