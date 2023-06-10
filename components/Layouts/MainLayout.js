import React, { useEffect } from "react";
import { Header } from "../UI/Header/Header";
import { SideNav } from "../UI/SideNav/SideNav";
import { useStateContext } from "../HBOProvider";
import { GenreNav } from "../UI/GenreNav/GenreNav";

export default function MainLayout(props) {
  const state = useStateContext();
  let isScrolling;

  useEffect(() => {
    const handleScroll = () => {
      window.addEventListener(
        "scroll",
        (e) => {
          state.hboProvider.setUserScrolling(true);

          clearTimeout(isScrolling);

          isScrolling = setTimeout(() => {
            console.log("scrolling has stopped");
            state.hboProvider.setUserScrolling(false);
          }, 150);
        },
        false
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
      clearTimeout(isScrolling);
    };
  }, []);

  const closeModals = () => {
    let isSideNavOpen = state.isSideNavOpen;
    let isAccountOpen = state.isAccountOpen;

    if (isAccountOpen) {
      state.hboProvider.toggleAccount();
    }
    if (isSideNavOpen) {
      state.hboProvider.toggleSideNav();
    }
  };

  return (
    <div
      style={{
        background: `linear-gradient(
        135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1) 100%
    )`,
        minHeight: "100vh",
        width: "100%",
        position: "absolute",
        overflow: "hidden",
      }}
    >
      <SideNav />
      <Header />
      <section className="content-container" onClick={closeModals}>
        {props.children}
      </section>
    </div>
  );
}
