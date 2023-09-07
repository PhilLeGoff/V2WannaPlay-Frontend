import { UserData } from "@/interfaces/UserData";
import { Textarea } from "@nextui-org/react";
import React from "react";
import Input from "../../Input";
import Birthday from "./Birthday";
import Genres from "./Genres";
import Instruments from "./Instruments";

type Props = {
  userData: UserData;
  step: number;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
};

export default function SignUpForm({ userData, setUserData, step }: Props) {
  const handleStateChange = (fieldName: string, fieldValue: string) => {
    setUserData((prevUserData: any) => ({
      ...prevUserData,
      [fieldName]: fieldValue,
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1: {
        return (
          <div className="flex flex-col justify-around items-center md:pt-16 md:w-[600] md:h-[300px] h-[250px] md:flex-grow">
            <Input
              value={userData.username}
              setState={(value: string) => handleStateChange("username", value)}
              type="text"
              placeholder="username"
            />
            <Input
              value={userData.email}
              setState={(value: string) => handleStateChange("email", value)}
              type="email"
              placeholder="email"
            />
            <Input
              value={userData.password}
              setState={(value: string) => handleStateChange("password", value)}
              type="password"
              placeholder="password"
            />
          </div>
        );
      }
      case 2: {
        return (
          <div className="flex flex-col md:justify-around justify-start items-center md:pt-10 md:w-[600] h-full">
            <div className="flex md:flex-row md:h-auto flex-col md:pb-0  my-9 h-[150px] w-full items-center justify-around">
              <Input
                value={userData.firstName}
                setState={(value: string) =>
                  handleStateChange("firstName", value)
                }
                type="text"
                placeholder="firstname"
              />
              <Input
                value={userData.lastName}
                setState={(value: string) =>
                  handleStateChange("lastName", value)
                }
                type="text"
                placeholder="lastname"
              />
            </div>
            <div className="flex flex-col w-full md:h-[100px] items-center text-white md:pb-16">
              <p className="md:pb-3 pb-1">Date of birth</p>
              <Birthday userData={userData} setUserData={setUserData} />
            </div>
          </div>
        );
      }
      case 3: {
        return (
          <div className="flex flex-col self-center justify-around items-center md:pt-2 md:w-[600px] md:h-[300px]">
            <Instruments userData={userData} setUserData={setUserData} />
            <Genres userData={userData} setUserData={setUserData} />
          </div>
        );
      }
      case 4: {
        return (
          <div className="flex justify-center items-center w-full md:h-[300px]">
            <textarea
              className="md:w-[500px] md:h-[200px] w-[300px] h-[300px] md:bg-opacity-5 bg-opacity-90 p-2 bg-black 
              md:bg-white text-white outline-none text-center"
              placeholder="Write a small description about yourself"
              value={userData.description}
              onChange={(event) =>
                handleStateChange("description", event.target.value)
              }
            />
          </div>
        );
      }
    }
  };
  return renderStep();
}
