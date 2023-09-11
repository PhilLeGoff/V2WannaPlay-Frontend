import usePostData from "@/hooks/usePostData";
import { UserData } from "@/interfaces/UserData";
import user, { login } from "@/reducers/user";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Button";
import Input from "../../Input";
import SignUpForm from "./SignUpForm";

type Props = { setShowSignUp: React.Dispatch<React.SetStateAction<boolean>> };

export default function SignUp({ setShowSignUp }: Props) {
  const userState = useSelector((state: any) => state.user.value);
  const dispatch = useDispatch();
  const [step, setStep] = useState<number>(1);
  const [userData, setUserData] = useState<UserData>({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    birthday: { day: "Day", month: "Month", year: "Year" },
    instrumentPlayed: [],
    instrumentTaught: [],
    genresPlayed: [],
    genresLiked: [],
    description: "",
    token: "",
    profilePicture: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleFirstPostData(url: string, data: any) {
    const responseData = await usePostData({ url, data });

    if (responseData.result === false) {
      setErrorMessage(responseData.message);
    } else {
      setUserData((prevUserData: any) => ({
        ...prevUserData,
        ["token"]: responseData.token,
      }));
      setErrorMessage("");
      setStep(step + 1);
    }
  }
  async function handleLastPostData(url: string, data: any) {
    await usePostData({ url, data });

    dispatch(
      login({
        username: userData.username,
        token: userData.token,
        profilePicture: userData.profilePicture,
      })
    );
  }

  const handleFields = () => {
    const { username, email, password, firstName, lastName, birthday } =
      userData;
    switch (step) {
      case 1: {
        if (username === "" || email === "" || password === "") {
          setErrorMessage("Please fill in all the fields");
          return false;
        } else return true;
      }
      case 2: {
        if (
          firstName === "" ||
          lastName === "" ||
          birthday.day === "Day" ||
          birthday.month === "Month" ||
          birthday.year === "Year"
        ) {
          setErrorMessage("Please fill in all the fields");
          return false;
        } else return true;
      }
    }
  };

  const handleNextStep = () => {
    if (handleFields() === false) {
      return;
    }
    if (step === 1) {
      handleFirstPostData("http://localhost:3000/log/signup", {
        username: userData.username,
        email: userData.email,
        password: userData.password,
      });
    } else setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 2) {
      setStep(step - 1);
    }
  };

  const handleFinish = () => {
    handleLastPostData("http://localhost:3000/log/signupQuiz", {
      firstname: userData.firstName,
      lastname: userData.lastName,
      birthday: userData.birthday,
      instrumentsPlayed: userData.instrumentPlayed,
      instrumentsTaught: userData.instrumentTaught,
      genresLiked: userData.genresLiked,
      genresPlayed: userData.genresPlayed,
      description: userData.description,
      token: userData.token,
    });
    return;
  };

  useEffect(() => {
    console.log(step);
  }, [step]);

  return (
    <div className="absolute inset-0 z-10 flex justify-center md:items-center md:h-full w-full h-[500px] bg-dark-grey bg-opacity-20">
      <div className="rounded-md md:h-[500px] md:w-[700px] w-full h-[500px] flex flex-col justify-between bg-black bg-opacity-80 md:bg-opacity-95">
        <header className="md:h-[70px] w-full flex justify-center items-center">
          <span className="ml-[70px] flex-grow h-full text-white md:text-xl text-lg flex justify-center items-center md:ml-[70px]">
            Create your account
          </span>
          <div className="h-[70px] w-[70px] flex justify-center items-center">
            <IoClose
              onClick={() => setShowSignUp(false)}
              color="white"
              size="45px"
            />
          </div>
        </header>
        <SignUpForm userData={userData} setUserData={setUserData} step={step} />
        <div className="md:h-[100px] w-full flex justify-around items-center">
          <div
            className="inline-block"
            style={
              step < 3 ? { visibility: "hidden" } : { visibility: "visible" }
            }
          >
            <Button
              buttonName="PREV"
              onClickFunction={handlePrevStep}
              // className={step > 2 ? "" : "hidden"}
            />
            {/* <div className=""></div> */}
          </div>
          <p className="text-lg md:w-[300px] text-red md:self-center flex justify-center place-self-center md:static absolute self-end bottom-28 md:bottom-0">
            {errorMessage}
          </p>
          <Button
            buttonName={step < 4 ? "NEXT" : "FINISH"}
            onClickFunction={step < 4 ? handleNextStep : handleFinish}
          />
        </div>
      </div>
    </div>
  );
}
