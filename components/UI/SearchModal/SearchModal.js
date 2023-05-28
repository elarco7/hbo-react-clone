import Image from "next/image";
import React from "react";
import { useStateContext } from "../../HBOProvider";

export const SearchModal = () => {
  const state = useStateContext();

  const loopComp = (component, iter) => {
    const thumbnails = [];
    for (let i = 0; i < iter; i++) {
      thumbnails.push(component);
    }
    return thumbnails;
  };

  const thumbnailLayout = (
    <div className="search-modal__thumbnail">
      <div className="search-modal__thumbnail-ctr">
        <Image
          src="https://m.media-amazon.com/images/M/MV5BMWUyZTg2YTEtYmY4ZS00MGRiLTk0YzctYmM4NzEwNjAwY2U2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
          alt="seiya"
          layout="fill"
        />
      </div>

      <div className="search-modal__top-layer">
        <i className="fas fa-play" />
      </div>
    </div>
  );
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
          {loopComp(thumbnailLayout, 10)}
        </div>
      </div>
    </>
  );
};
