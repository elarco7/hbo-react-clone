import Image from "next/image";
import { useStateContext } from "../../HBOProvider";

export default function Login() {
  const state = useStateContext();
  return (
    <div className="login-user">
      <div className="login-user__top">
        <div className="login-user__logo" />
        <span className="login-user__title">Who Is Watching?</span>
      </div>
      <div className="login-user__form">
        <div className="login-user__user-box">
          <Image
            src="https://randomuser.me/api/portraits/women/57.jpg"
            alt="user pic"
            className="login-user__user-img"
            layout="fill"
          />
        </div>
        <div className="login-user__user-name">Kelly</div>
      </div>
      <div className="login-user__buttons">
        <button className="login-user__adult">Add Adult</button>
        <button className="login-user__kid">Add Kid</button>
      </div>
    </div>
  );
}
