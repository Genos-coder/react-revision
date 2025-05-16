"use client";
import SimpleProfile from "@/components/mini/describing/01_simpleProfile";
import MockupProfileCard from "@/components/mini/describing/02_mockupProfileCard";
import PureComponent from "@/components/mini/describing/03_PureComponent";
import Conditional from "@/components/mini/describing/04_Conditional";
import Tictactoe from "@/components/mini/tictactoe/Tictactoe";

function page() {
  const componentArr = [
    {
      name: "TicTacToe",
      component: <Tictactoe />,
    },
    {
      name: "SimpleProfile",
      component: <SimpleProfile />,
    },
    // {
    //   name: "MockUpProfileCArd",
    //   component: <MockupProfileCard />,
    // },
    {
      name: "PureComponent",
      component: <PureComponent />,
    },
    {
      name: "Conditional Render",
      component: <Conditional />,
    },
  ];
  return (
    <div className="h-full  overflow-hidden  w-full flex justify-center items-center flex-col">
      {componentArr.map((item) => {
        return (
          <div
            className="h-screen  w-full  flex justify-center items-center"
            key={`abab${item.name}`}
          >
            {item.component}
          </div>
        );
      })}
    </div>
  );
}
export default page;
