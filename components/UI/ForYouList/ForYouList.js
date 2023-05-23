import Image from "next/image";
import React from "react";

export const ForYouList = () => {
  const loopComp = (component, iter) => {
    const thumbnails = [];
    for (let i = 0; i < iter; i++) {
      thumbnails.push(component);
    }
    return thumbnails;
  };

  const thumbnailLayout = (
    <div className="foryou-list__thumbnail">
      <Image
        src="https://m.media-amazon.com/images/M/MV5BNDZlNzJiMzQtNzhjZi00MDMyLWFhZDUtNjc5NDhmMDdhYTAwXkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_FMjpg_UX1000_.jpg"
        alt="seiya"
      />
      <div className="foryou-list__top-layer">
        <i className="fas fa-play" />
      </div>
    </div>
  );
  return (
    <div>
      <div className="foryou-list">
        <h3 className="foryou-list__title">For You</h3>
        <div className="foryou-list__thumbnails">
          {loopComp(thumbnailLayout, 10)}
        </div>
      </div>
    </div>
  );
};
