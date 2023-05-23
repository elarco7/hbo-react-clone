import React from "react";
import { Header } from "../UI/Header/Header";
import { SideNav } from "../UI/SideNav/SideNav";

export default function MainLayout(props) {
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
      <section className="content-container">{props.children}</section>
    </div>
  );
}
