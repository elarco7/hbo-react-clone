import Image from "next/image";
import { useStateContext } from "../components/HBOProvider";
import ls from "local-storage";
import { v4 } from "uuid";
import { useRouter } from "next/router";
import Login from "../components/UI/Login/Login";

export default function LoginPage() {
  const state = useStateContext();
  const router = useRouter();

  // console.log(state);
  return <Login />;
}
