import Head from "next/head";
import Image from "next/image";

export default function CreateUser() {
  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo" />
          <span className="create-user__title">Who Is Watching?</span>
        </div>
        <div className="create-user__form">
          <Image
            src="https://randomuser.me/api/portraits/women/57.jpg"
            alt="user pic"
            className="create-user__user-img"
          />
          <div className="create-user__input-group">
            <label htmlFor="userName">Name</label>
            <input
              type="text"
              className="create-user__inputText"
              id="userName"
            />
            <div className="create-user__colors">
              <div
                className="create-user__color create-user__color--active"
                style={{
                  background: "rgb(2,27,64)",
                  background: `linear-gradient(
                            135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1) 100%
                        )`,
                }}
              />
              <div
                className="create-user__color create-user__color--active"
                style={{
                  background: "rgb(2,27,64)",
                  background: `linear-gradient(
                            135deg, rgba(2,27,64,1) 11%, rgba(249,12,125,1) 100%
                        )`,
                }}
              />
              <div
                className="create-user__color create-user__color--active"
                style={{
                  background: "rgb(1,27,15)",
                  background: `linear-gradient(
                            135deg, rgba(1,27,15,1) 11%, rgba(2,2,25,1) 100%
                        )`,
                }}
              />
              <div
                className="create-user__color create-user__color--active"
                style={{
                  background: "rgb(2,34,64)",
                  background: `linear-gradient(
                            135deg, rgba(2,34,64,1) 11%, rgba(27,30,25,1) 100%
                        )`,
                }}
              />
              <div
                className="create-user__color create-user__color--active"
                style={{
                  background: "rgb(2,27,2)",
                  background: `linear-gradient(
                            135deg, rgba(2,27,2,1) 11%, rgba(34,30,135,1) 100%
                        )`,
                }}
              />
            </div>
          </div>
        </div>
        <div className="create-user__buttons">
          <button className="create-user__cancel">Cancel</button>
          <button className="create-user__save">Save</button>
        </div>
      </div>
    </div>
  );
}
