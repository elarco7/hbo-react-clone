import React from "react";
import { UserAccount } from "../UserAccount/UserAccount";
import { SearchModal } from "../SearchModal/SearchModal";
import Image from "next/image";
import { useStateContext } from "../../HBOProvider";

export const Header = () => {
  const state = useStateContext();

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
          (state.isSideNavOpen || state.isAccountOpen) &&
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
        <div className="top-header__logo"></div>
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

          <div className="top-header__user-name">Kelly</div>
        </div>
        <UserAccount />
      </header>
      <SearchModal />
    </>
  );
};
