import React, { useContext, useState } from "react";

export const StateContext = React.createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function HBOProvider({ children }) {
  const [user, setUser] = useState("");

  const createUserAction = (e) => {
    setUser(e.target.value);
    // console.log(user, "provider");
  };
  const instance = {
    createUser: createUserAction,
  };
  return (
    <StateContext.Provider value={{ user, instance }}>
      {children}
    </StateContext.Provider>
  );
}
