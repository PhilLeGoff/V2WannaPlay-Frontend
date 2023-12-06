"use client";
import Button from "@/components/Button";
import usePostData from "@/hooks/usePostData";
import { login } from "@/reducers/user";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input";
import { useSession, signIn } from "next-auth/react";
import SignButton from "./signup/SignButton";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import SocialButton from "./signup/SocialButton";

type Props = {
  setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>;
};

interface LoginData {
  username: string;
  password: string;
}

export default function SignIn({ setShowSignIn }: Props) {
  const { data: session } = useSession();
  const [userData, setUserData] = useState<LoginData>({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const dispatch = useDispatch();
  const style = { color: "white", fontSize: "1.5em" };

  async function postSignIn() {
    if (userData.username === "" || userData.password === "") {
      setErrorMessage("Please fill in all the fields");
    } else {
      const responseData = await usePostData({
        url: "http://localhost:3000/log/signin",
        data: { input: userData.username, password: userData.password },
      });
      console.log("REPONSE", responseData);
      if (responseData.result === false) {
        setErrorMessage("Invalid credentials");
        return;
      } else {
        dispatch(
          login({ token: responseData.token, username: responseData.useraname })
        );
      }
    }
  }

  useEffect(() => {
    console.log("errormessage", errorMessage);
    console.log("session", session);
  }, []);

  const handleStateChange = (fieldName: string, fieldValue: string) => {
    setUserData((prevUserData: any) => ({
      ...prevUserData,
      [fieldName]: fieldValue,
    }));
  };

  return (
    <div className="absolute inset-0 z-10 flex justify-center md:items-center md:h-full w-full h-full bg-white bg-opacity-20">
      <div className="rounded-md md:h-[570px] md:w-[450px] w-full h-[570px] flex flex-col justify-start bg-light-black ">
        <header className="h-[60px] w-full flex justify-center items-center mt-3">
          <span className="ml-[70px] flex-grow h-full text-white md:text-2xl text-xl flex justify-center items-center md:ml-[70px]">
            SIGN IN
          </span>
          <div className="h-[70px] w-[70px] flex justify-center items-center">
            <IoClose
              onClick={() => setShowSignIn(false)}
              size="37px"
              className="group-hover:text-[#02FFC2]"
              onMouseOver={(event: any) =>
                ((event.target as HTMLElement).style.color = "#02FFC2")
              }
              onMouseOut={(event: any) =>
                ((event.target as HTMLElement).style.color = "white")
              }
            />
          </div>
        </header>
        <div className="w-full h-[170px] md:h-[170px] flex flex-col justify-around items-center">
          <div>
            <p className={"text-sm"}>Email or username</p>
            <Input
              value={userData.username}
              setState={(value: string) => handleStateChange("username", value)}
              type="text"
              placeholder=""
            />
          </div>
          <div>
            <p className={"text-sm"}>Password</p>
            <Input
              value={userData.password}
              setState={(value: string) => handleStateChange("password", value)}
              type="password"
              placeholder=""
            />
          </div>
        </div>
        <div className="md:h-[120px] w-full h-[120px] flex flex-col justify-around items-center">
          <p className="text-sm md:w-[300px] h-5 text-red md:self-center flex justify-center md:place-self-center md:static bottom-28 md:bottom-0">
            {errorMessage}
          </p>
          <SignButton buttonName="SIGN IN" onClickFunction={postSignIn} />
          <div className="w-full flex justify-around items-center m-3">
            <hr className="md:w-[150px] w-[100px] h-[1px] bg-[#79808c] border-none" />
            <p className="text-sm text-[#79808c]">Or login with</p>
            <hr className="md:w-[150px] w-[100px] h-[1px] bg-[#79808c] border-none" />
          </div>
        </div>
        <div className="flex flex-col justify-around items-center h-[180px]">
          <SocialButton
            buttonName="Sign up with Google"
            onClickFunction={() => signIn("google")}
            Icon={FaGoogle}
          />
          <SocialButton
            buttonName="Sign up with Github"
            onClickFunction={() => signIn("github")}
            Icon={FaGithub}
          />
          <SocialButton
            buttonName="Sign up with Facebook"
            onClickFunction={() => signIn("github")}
            Icon={FaFacebook}
          />
        </div>
      </div>
    </div>
  );
}
