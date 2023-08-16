import { Tauri } from "next/font/google";
import Image from "next/image";
import { useSelector } from "react-redux";
import Main from "./Main";
import Welcome from "./Welcome";

const tauri = Tauri({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  const userData = useSelector((state: any) => state.user.value);

  return (
    <body className={tauri.className}>
      {userData.token ? <Main /> : <Welcome />  }
    </body>
  );
}
