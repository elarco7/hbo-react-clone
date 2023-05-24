import Image from "next/image";
import React from "react";

export const JustAddedList = () => {
  const loopComp = (component, iter) => {
    const thumbnails = [];
    for (let i = 0; i < iter; i++) {
      thumbnails.push(component);
    }
    return thumbnails;
  };

  const thumbnailLayout = (
    <div className="just-added-list__thumbnail">
      <div className="just-added-list__thumbnail-ctr">
        <Image
          src="https://m.media-amazon.com/images/M/MV5BMWUyZTg2YTEtYmY4ZS00MGRiLTk0YzctYmM4NzEwNjAwY2U2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
          alt="seiya"
          layout="fill"
        />
      </div>

      <div className="just-added-list__top-layer">
        <i className="fas fa-play" />
      </div>
    </div>
  );
  return (
    <div>
      <div className="just-added-list">
        <h3 className="just-added-list__title">Just Added</h3>
        <div className="just-added-list__thumbnails">
          {loopComp(thumbnailLayout, 10)}
        </div>
      </div>
    </div>
  );
};
