import React from "react";

export const Placeholder = (props) => {
  const LoadingLayout = () => {
    return (
      <div className={`media-row__thumbnail-ctr ${props.type} `}>
        <div className="media-row__thumbnail-skeleton">
          <div className="media-row__thumbnail-skeleton-img"></div>
        </div>
      </div>
    );
  };

  const loopComp = (component) => {
    let components = [];
    for (let i = 0; i < props.num; i++) {
      components.push(component);
    }
    // console.log(components.length, "num of componenets");
    return components;
  };

  return (
    <div className="media-row">
      <h3 className="media-row__title">{props.title}</h3>
      <div className="media-row__thumbnails">{loopComp(<LoadingLayout />)}</div>
    </div>
  );
};
