import { useEffect, useMemo, useState } from "react";
import { useStateContext } from "../../HBOProvider";
import { useRouter } from "next/router";
import ls from "local-storage";

export default function Login() {
  const state = useStateContext();
  const router = useRouter();
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = ls("users");
    setLoadingUsers(true);

    if (storedUsers !== null) {
      setUsers(storedUsers);
      setLoadingUsers(false);
    }
  }, []);

  // useEffect(() => {
  //   console.log("registered users", users);
  // }, [users]);

  const selectUser = (user) => {
    ls("activeUID", user.id);
    state.hboProvider.storeLoginInfo(user);
    router.push({ pathname: "/", query: { userName: user.name } });
  };

  const showUsers = () => {
    if (!loadingUsers) {
      return users.map((user) => {
        return (
          <div
            className="login-user__form"
            key={user.id}
            onClick={() => selectUser(user)}
          >
            <div className="login-user__user-box">
              <img
                src="https://randomuser.me/api/portraits/women/57.jpg"
                alt="user pic"
                className="login-user__user-img"
              />
            </div>
            <div className="login-user__user-name">{user.name}</div>
          </div>
        );
      });
    }
  };

  const createUser = () => {
    router.push("/create");
  };

  return (
    <div className="login-user">
      <div className="login-user__top">
        <div className="login-user__logo" />
        <span className="login-user__title">Who Is Watching?</span>
      </div>
      {/* {typeof window !== "undefined" && showUsers()} */}
      {loadingUsers ? (
        <h1 style={{ color: "white", fontSize: "3rem" }}>LOADING</h1>
      ) : (
        showUsers()
      )}
      <div className="login-user__buttons">
        <button className="login-user__kid" onClick={createUser}>
          Create User
        </button>
      </div>
    </div>
  );
}
