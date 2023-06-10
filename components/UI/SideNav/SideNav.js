import Link from "next/link";
import React, { useEffect } from "react";
import { useStateContext } from "../../HBOProvider";

export const SideNav = () => {
  const state = useStateContext();
  // check if user is able to scroll y axis if sidenav window is open

  useEffect(() => {
    if (state.isSideNavOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [state.isSideNavOpen]);

  return (
    <div className={`side-nav  ${state.isSideNavOpen && "side-nav--active"}`}>
      <div
        className="side-nav__close-btn"
        onClick={state.hboProvider.toggleSideNav}
      >
        <i className="fas fa-times"></i>
      </div>
      <ul className="side-nav__main">
        <li onClick={state.hboProvider.toggleSideNav}>
          <Link href="/">Home</Link>
        </li>
        <li onClick={state.hboProvider.toggleSideNav}>
          <Link href="/tv">Series</Link>
        </li>
        <li onClick={state.hboProvider.toggleSideNav}>
          <Link href="/movie">Movies</Link>
        </li>
      </ul>
    </div>
  );
};
