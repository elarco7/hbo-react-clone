import React from "react";

export const SearchModal = () => {
  const loopComp = (component, iter) => {
    const thumbnails = [];
    for (let i = 0; i < iter; i++) {
      thumbnails.push(component);
    }
    return thumbnails;
  };

  const thumbnailLayout = (
    <div className="search-modal__thumbnail">
      <img
        src="https://m.media-amazon.com/images/M/MV5BMWUyZTg2YTEtYmY4ZS00MGRiLTk0YzctYmM4NzEwNjAwY2U2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
        alt="seiya"
      />
      <div className="search-modal__top-layer">
        <i className="fas fa-play" />
      </div>
    </div>
  );
  return (
    <div>
      <div className="search-modal ">
        <div className="search-modal__input-group">
          <input
            type="text"
            placeholder="Search for a title"
            value=""
            className="search-modal__input"
          />
          <div className="search-modal__close-btn">
            <i className="fas fa-times" />
          </div>
        </div>
        <h3 className="search-modal__title">Popular Searches</h3>
        <div className="search-modal__thumbnails">
          {loopComp(thumbnailLayout, 10)}
        </div>
      </div>
    </div>
  );
};
