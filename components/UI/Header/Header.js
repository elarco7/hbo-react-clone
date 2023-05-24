import React from "react";
import { UserAccount } from "../UserAccount/UserAccount";
import { SearchModal } from "../SearchModal/SearchModal";
import Image from "next/image";

export const Header = () => {
  return (
    <>
      <header className="top-header">
        <div className="top-header__left-side">
          <div className="top-header__menu-btn">
            <i className="fas fa-bars" />
          </div>
          <div className="top-header__search-btn">
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="top-header__logo"></div>
        <div className="top-header__account">
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
