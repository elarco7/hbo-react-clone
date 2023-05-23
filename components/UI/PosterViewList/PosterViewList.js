import Image from "next/image";
import React from "react";

export const PosterViewList = () => {
  const loopComp = (component, iter) => {
    const thumbnails = [];
    for (let i = 0; i < iter; i++) {
      thumbnails.push(component);
    }
    return thumbnails;
  };

  const thumbnailLayout = (
    <div className="poster-view-list__thumbnail">
      <Image
        src="https://m.media-amazon.com/images/M/MV5BMWUyZTg2YTEtYmY4ZS00MGRiLTk0YzctYmM4NzEwNjAwY2U2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
        alt="seiya"
      />
      <div className="poster-view-list__top-layer">
        <i className="fas fa-play" />
      </div>
    </div>
  );
  return (
    <div>
      <div className="poster-view-list">
        <h3 className="poster-view-list__title">Movies</h3>
        <div className="poster-view-list__thumbnails">
          {loopComp(thumbnailLayout, 10)}
        </div>
      </div>
    </div>
  );
};
