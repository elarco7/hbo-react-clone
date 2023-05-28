import React from "react";
import { Header } from "../UI/Header/Header";
import { SideNav } from "../UI/SideNav/SideNav";
import { useStateContext } from "../HBOProvider";

export default function MainLayout(props) {
  const state = useStateContext();

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
