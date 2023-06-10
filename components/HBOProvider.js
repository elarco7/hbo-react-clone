import { get } from "local-storage";
import React, { useContext, useMemo, useState } from "react";
import axios from "axios";
import _ from "../utilities/constants";

export const StateContext = React.createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function HBOProvider({ children }) {
  const [user, setUser] = useState("");
  const [loggedUserInfo, setLoggedInUserInfo] = useState({});
  const [isSideNavOpen, setSideNav] = useState(false);
  const [isAccountOpen, setAccount] = useState(false);
  const [isSearchOpen, setSearch] = useState(false);
  const thumbTypes = ["large-v", "small-v", "large-h", "small-h"];
  const [tvIDs, setTvIds] = useState({});
  const [movieIDs, setMovieIds] = useState({});
  const [tvGenreList, setTvGenreList] = useState([]);
  const [movieGenreList, setMovieGenreList] = useState([]);
  const [isUserScrolling, setUserScrollingState] = useState(false);

  useMemo(() => {
    const fetchTvData = async () => {
      console.log("HBOPROVIDER TV DATA");

      try {
        let tvIDsResponse = await axios.get(
          `${_.GENRES_LIST}tv/list?api_key=${_.API_KEY}`
        );
        console.log(tvIDsResponse.data.genres, "IDS FOR TV");
        // genreate map with genre name and id
        let tvIDsMap = Object.assign(
          {},
          ...tvIDsResponse.data.genres.map((item) => {
            return { [item.name.replace(/\s/g, "").toLowerCase()]: item.id };
          })
        );
        setTvIds(tvIDsMap);
        // generate list with genre name only
        let genreList = tvIDsResponse.data.genres.map((item) => {
          return { name: item.name };
        });
        setTvGenreList(genreList);
      } catch (error) {
        console.log(error, "Fetching TV data");
      }
    };
    const fetchMovieData = async () => {
      console.log("HBOPROVIDER MOVIE DATA");

      try {
        let movieIDsResponse = await axios.get(
          `${_.GENRES_LIST}movie/list?api_key=${_.API_KEY}`
        );
        console.log(movieIDsResponse.data.genres, "IDS FOR MOVIE");

        // genreate map with genre name and id
        let movieIDsMap = Object.assign(
          {},
          ...movieIDsResponse.data.genres.map((item) => {
            return { [item.name.replace(/\s/g, "").toLowerCase()]: item.id };
          })
        );
        // generate list with genre name only

        setMovieIds(movieIDsMap);
        // generate list with genre name only
        let genreList = movieIDsResponse.data.genres.map((item) => {
          return { name: item.name };
        });

        setMovieGenreList(genreList);
      } catch (error) {
        console.log(error, "Fetching Movie data");
      }
    };
    // Execute both API calls in parallel
    Promise.all([fetchTvData(), fetchMovieData()]);
  }, []);

  //   // Once isLoading is false, both API calls have completed and you can access the tvData and movieData from the state
  // if (!isLoading) {
  //   // Access the tvData and movieData from the state and use them on the other page
  // }

  const createUserAction = (e) => {
    setUser(e.target.value);
    // console.log(user, "provider");
  };
  const setSideNavStatus = () => {
    setSideNav(!isSideNavOpen);
  };
  const setAccountStatus = () => {
    setAccount(!isAccountOpen);
  };
  const setSearchStatus = () => {
    setSearch(!isSearchOpen);
  };

  const storeLoginInfo = (user) => {
    setLoggedInUserInfo({ id: user.id, name: user.name });
  };

  const setUserScrolling = (val) => {
    setUserScrollingState(val);
  };

  const hboProvider = {
    createUser: createUserAction,
    storeLoginInfo: storeLoginInfo,
    toggleSideNav: setSideNavStatus,
    toggleAccount: setAccountStatus,
    toggleSearch: setSearchStatus,
    setUserScrolling: setUserScrolling,
    thumbTypes: thumbTypes,
    tvIDs: tvIDs,
    movieIDs: movieIDs,
    tvGenreList: tvGenreList,
    movieGenreList: movieGenreList,
  };
  return (
    <StateContext.Provider
      value={{
        user,
        loggedUserInfo,
        isSideNavOpen,
        isAccountOpen,
        isSearchOpen,
        isUserScrolling,
        hboProvider,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
