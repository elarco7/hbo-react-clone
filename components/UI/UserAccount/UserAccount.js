import React from "react";

export const UserAccount = () => {
  const loopComp = (component, iter) => {
    const thumbnails = [];
    for (let i = 0; i < iter; i++) {
      thumbnails.push(component);
    }
    return thumbnails;
  };

  const thumbnailLayout = (
    <div className="account__watch-video">
      <img
        src="https://m.media-amazon.com/images/M/MV5BNDZlNzJiMzQtNzhjZi00MDMyLWFhZDUtNjc5NDhmMDdhYTAwXkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_FMjpg_UX1000_.jpg"
        alt=""
      />
      <div className="account__watch-overlay">
        <div className="account__watch-buttons">
          <div className="account__watch-circle">
            <i className="fas fa-play" />
          </div>
          <div className="account__watch-circle">
            <i className="fas fa-times" />
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="account ">
      <div className="account__details">
        <div className="account__title">My List</div>
        <div className="account__watch-list">
          {loopComp(thumbnailLayout, 4)}
        </div>
      </div>
      <div className="account__menu">
        <ul className="account__main">
          <li>
            <a href="/" className="active">
              My List
            </a>
          </li>
        </ul>
        <div className="side-nav__divider" />
        <ul className="account__main">
          <li>
            <a href="/">Account</a>
          </li>
          <li>
            <a href="/">Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
