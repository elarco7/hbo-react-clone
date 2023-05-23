import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="login-user">
        <div className="login-user__top">
          <div className="login-user__logo" />
          <span className="login-user__title">Who Is Watching?</span>
        </div>
        <div className="login-user__form">
          <div className="login-user__user-box">
            <img
              src="https://randomuser.me/api/portraits/women/57.jpg"
              alt="user pic"
              className="login-user__user-img"
            />
            <div className="login-user__user-name">Kelly</div>
          </div>
        </div>
        <div className="login-user__buttons">
          <button className="login-user__adult">Add Adult</button>
          <button className="login-user__kid">Add Kid</button>
        </div>
      </div>
    </div>
  );
}
