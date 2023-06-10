import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ls from "local-storage";

export const FeatureMedia = (props) => {
  console.log("LINK Img FeatureMedia", props);
  const [isInAccountList, setIsInAccountList] = useState(false);

  useEffect(() => {
    let storedData = ls("savedMedia");
    if (storedData) {
      let result = storedData.some((item) => {
        return item.title === props.title;
      });
      setIsInAccountList(result);
    }
  }, [ls("savedMedia")]);

  const router = useRouter();
  const onPlay = () => {
    router.push(props.linkUrl);
  };

  // use local storage to store media by clicking plus on movie
  const onSaveMovie = () => {
    if (isInAccountList) {
      return;
    }
    let media = [];
    let mediaData = {
      title: props.title,
      mediaUrl: props.mediaUrl,
      linkUrl: props.linkUrl,
    };

    if (ls("savedMedia") < 1) {
      media.push(mediaData);
      ls("savedMedia", media);
    } else {
      media = ls("savedMedia");
      media.push(mediaData);
      ls("savedMedia", media);
    }
    setIsInAccountList(true);
  };

  const showMedia = () => {
    if (!props.mediaUrl || props.mediaUrl === undefined) {
      // Render a placeholder or loading state when mediaUrl is undefined
      return <div>Loading...</div>;
    }
    if (props.type === "front") {
      console.log("ShowMedia Frame");

      return (
        <iframe
          className="featured-media__video"
          width="100%"
          height="100%"
          src={props.mediaUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      );
    } else {
      console.log("ShowMedia Img", props.mediaUrl);

      return (
        <img
          src={props.mediaUrl}
          alt={props.title}
          className="featured-media__img"
        />
      );
    }
  };

  return (
    <div
      className={`featured-media ${
        props.type === "single" && "featured-media--single"
      }`}
    >
      {showMedia()}
      <div className="featured-media__bg">
        <div className="featured-media__container">
          <div className="featured-media__title" onClick={onPlay}>
            {props.title}
          </div>
          <div
            className={`featured-media__playing ${
              props.type === "single" && "hide-comp"
            }`}
          >
            NOW PLAYING
          </div>
          <div
            className={`featured-media__location ${
              props.type === "single" && "hide-comp"
            }`}
          >
            {props.location}
          </div>
          <div className="featured-media__buttons">
            <div className="featured-media__play-btn" onClick={onPlay}>
              <i className="fas fa-play" />
            </div>
            <div
              className={`featured-media__add-btn ${
                isInAccountList && "update"
              }`}
              onClick={onSaveMovie}
            >
              <i
                className={`${
                  isInAccountList ? "fas fa-check" : "fas fa-plus"
                }`}
              />
            </div>
            <div
              className={`featured-media__info-btn ${
                props.type === "single" && "hide-comp"
              }`}
              onClick={onPlay}
            >
              MORE INFO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
