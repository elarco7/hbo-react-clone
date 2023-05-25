import { useEffect } from "react";
import { useStateContext } from "../components/HBOProvider";
import Login from "../components/UI/Login/Login";
import { useRouter } from "next/router";

export default function Home() {
  const state = useStateContext();
  const router = useRouter();

  useEffect(() => {
    const loggedIn = false;
    if (!loggedIn) {
      router.push("/create");
    }
  }, []);

  return (
    <div>
      <Login />
    </div>
  );
}
