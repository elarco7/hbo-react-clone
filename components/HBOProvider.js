import React, { useContext, useState } from "react";

export const StateContext = React.createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function HBOProvider({ children }) {
  const [user, setUser] = useState("");
  const [isSideNavOpen, setSideNav] = useState(false);
  const [isAccountOpen, setAccount] = useState(false);
  const [isSearchOpen, setSearch] = useState(false);

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

  const hboProvider = {
    createUser: createUserAction,
    toggleSideNav: setSideNavStatus,
    toggleAccount: setAccountStatus,
    toggleSearch: setSearchStatus,
  };
  return (
    <StateContext.Provider
      value={{ user, isSideNavOpen, isAccountOpen, isSearchOpen, hboProvider }}
    >
      {children}
    </StateContext.Provider>
  );
}
