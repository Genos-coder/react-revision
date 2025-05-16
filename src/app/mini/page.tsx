"use client";
import SimpleProfile from "@/components/mini/describing/01_simpleProfile";
import PureComponent from "@/components/mini/describing/03_PureComponent";
import Conditional from "@/components/mini/describing/04_Conditional";
import ListSplit from "@/components/mini/describing/05_ListSplit";
import Recipe from "@/components/mini/describing/06_Recipe";
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
    {
      name: "PureComponent",
      component: <PureComponent />,
    },
    {
      name: "Conditional Render",
      component: <Conditional />,
    },
    {
      name: "SplitList",
      component: <ListSplit />,
    },
    {
      name: "Recipe",
      component: <Recipe />,
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
