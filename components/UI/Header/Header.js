import React, { useEffect, useState } from "react";
import { UserAccount } from "../UserAccount/UserAccount";
import { SearchModal } from "../SearchModal/SearchModal";
import Image from "next/image";
import { useStateContext } from "../../HBOProvider";
import Link from "next/link";
import ls from "local-storage";

export const Header = () => {
  const state = useStateContext();
  const [loggedInUser, setLoggedInUser] = useState(state.loggedUserInfo.name);
  const [isUserScrolling, setIsUserScrolling] = useState(state.isUserScrolling);

  useEffect(() => {
    setLoggedInUser(state.loggedUserInfo.name);
  }, [state.loggedUserInfo]);

  useEffect(() => {
    setIsUserScrolling(state.isUserScrolling);
  }, [state.isUserScrolling]);

  const closeModal = () => {
    let isSideNavOpen = state.isSideNavOpen;
    let isAccountOpen = state.isAccountOpen;
    if (isAccountOpen) {
      state.hboProvider.toggleAccount();
    }
    if (isSideNavOpen) {
      state.hboProvider.toggleSideNav();
    }
  };

  return (
    <>
      <header
        className={`top-header ${
          (state.isSideNavOpen || state.isAccountOpen || isUserScrolling) &&
          "top-header__menu-open"
        }`}
        onClick={closeModal}
      >
        <div className="top-header__left-side">
          <div
            className="top-header__menu-btn"
            onClick={state.hboProvider.toggleSideNav}
          >
            <i className="fas fa-bars" />
          </div>
          <div
            className="top-header__search-btn"
            onClick={state.hboProvider.toggleSearch}
          >
            <i className="fas fa-search"></i>
          </div>
        </div>
        <Link href="/">
          <div className="top-header__logo"></div>
        </Link>
        <div
          className="top-header__account"
          onClick={state.hboProvider.toggleAccount}
        >
          <div className="top-header__account-img">
            <Image
              src="https://randomuser.me/api/portraits/women/57.jpg"
              alt="user image"
              className="top-header__user-img"
              layout="fill"
            />
          </div>

          <div className="top-header__user-name">
            {loggedInUser ? loggedInUser : ""}
          </div>
        </div>
      </header>
      <UserAccount />

      <SearchModal />
    </>
  );
};
