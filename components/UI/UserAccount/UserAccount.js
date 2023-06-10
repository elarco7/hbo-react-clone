import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useStateContext } from "../../HBOProvider";
import { useEffect } from "react";
import ls from "local-storage";
import _ from "../../../utilities/constants";
import { useRouter } from "next/router";

export const UserAccount = () => {
  const state = useStateContext();
  const router = useRouter();
  const [savedMedia, setSavedMedia] = useState(ls("savedMedia"));
  // check if user is able to scroll y axis if account window is open
  useEffect(() => {
    if (state.isAccountOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [state.isAccountOpen]);

  useEffect(() => {
    if (state.isAccountOpen) {
      setSavedMedia(ls("savedMedia"));
    }
  }, [state.isAccountOpen]);

  const onPlayBtn = (linkUrl) => {
    router.push(linkUrl);
    state.hboProvider.toggleAccount();
  };

  const onRemoveFromLS = (title, savedMedia) => {
    let updatedData = savedMedia.filter((item) => {
      return item.title !== title;
    });
    ls("savedMedia", updatedData);
    setSavedMedia(updatedData);
  };

  const onSignOut = () => {
    console.log("removing: ", state.loginKey);
    ls.remove("activeUID");

    router.push("/login");
  };

  const Thumbnail = (props) => {
    return (
      <div className="account__watch-video">
        <Image src={props.media.mediaUrl} alt="" layout="fill" />
        <div className="account__watch-overlay">
          <div className="account__watch-buttons">
            <div
              className="account__watch-circle"
              onClick={() => onPlayBtn(props.media.linkUrl)}
            >
              <i className="fas fa-play" />
            </div>
            <div
              className="account__watch-circle"
              onClick={() => onRemoveFromLS(props.media.title, savedMedia)}
            >
              <i className="fas fa-times" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const generateThumbnails = (Component, media) => {
    const thumbnails = [];
    for (let i = 0; i < media.length; i++) {
      thumbnails.push(<Component media={media[i]} key={i} />);
    }
    return thumbnails;
  };

  return (
    // add account--active
    <div className={`account ${state.isAccountOpen && "account--active"}`}>
      <div className="account__details">
        <div className="account__title">My List</div>
        <div className="account__watch-list">
          {savedMedia && generateThumbnails(Thumbnail, savedMedia)}
        </div>
      </div>
      <div className="account__menu">
        <ul className="account__main">
          <li>
            <Link href="/" className="active">
              My List
            </Link>
          </li>
        </ul>
        <div className="side-nav__divider" />
        <ul className="account__main">
          <li>
            <Link href="/">Account</Link>
          </li>
          <li>
            <a onClick={onSignOut}>Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
