import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ls from "local-storage";

export const AuthCheck = (component) => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [activeUID, setActiveUID] = useState("");

  useEffect(() => {
    const storedUsers = ls("users");
    const activeUID = ls("activeUID");

    if (activeUID === null && storedUsers === null) {
      console.log("create an account first...");
      router.push("/create");
    } else {
      setUsers(storedUsers);
      setActiveUID(activeUID);
      console.log(storedUsers, "stored Users");
    }
  }, []);

  return users.length >= 1 && activeUID !== null ? (
    component
  ) : (
    <h1 style={{ color: "white", fontSize: "3rem", marginTop: "5rem" }}>
      ACTIVE UID IS NULL: {activeUID}
    </h1>
    // <div className="create-user">
    //   <div className="create-user__top">
    //     <div className="create-user__logo">
    //       ACTIVE UID IS NULL?? : {activeUID}
    //     </div>
    //   </div>
    // </div>
  );
};
