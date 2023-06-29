import Image from "next/image";
import { useSelector } from "react-redux";
import Welcome from "./Welcome";
import Main from "./Main";

export default function Home() {
  const userData = useSelector((state: any) => state.user.value);

  return userData.token ? <Welcome /> : <Main />;
}
