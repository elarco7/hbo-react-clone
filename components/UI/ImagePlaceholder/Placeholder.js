import React from "react";

export const Placeholder = (props) => {
  console.log("Placeholder rendering");
  const LoadingLayout = () => {
    return (
      <div className={`media-row__thumbnail-ctr ${props.type} `}>
        <div className="media-row__thumbnail-skeleton">
          <div className="media-row__thumbnail-skeleton-img"></div>
        </div>
      </div>
    );
  };

  const generatePlaceholder = (Component) => {
    const thumbnails = [];
    for (let i = 0; i < props.num; i++) {
      thumbnails.push(<Component key={i} />);
    }
    return thumbnails;
  };

  return (
    <div className="media-row">
      <h3 className="media-row__title">{props.title}</h3>
      <div className="media-row__thumbnails">
        {generatePlaceholder(LoadingLayout)}
      </div>
    </div>
  );
};
