"use client";
import SimpleProfile from "@/components/mini/describing/01_simpleProfile";
import PureComponent from "@/components/mini/describing/03_PureComponent";
import Conditional from "@/components/mini/describing/04_Conditional";
import ListSplit from "@/components/mini/describing/05_ListSplit";
import Recipe from "@/components/mini/describing/06_Recipe";
import AlternateHr from "@/components/mini/describing/07_AlternateHr";
import BrokenProfile from "@/components/mini/describing/brokenProfile";
import StopWatch from "@/components/mini/escapehatches/01_StopWatch";
import MessageUndo from "@/components/mini/escapehatches/02_MessageUndo";
import GalleryCrash from "@/components/mini/interactivity/01_GalleryCrash";
import ControlledInput from "@/components/mini/interactivity/02_ControlledInput";
import CrashForm from "@/components/mini/interactivity/03_CrashForm";
import TrafficLight from "@/components/mini/interactivity/04_TrafficLight";
import RequestCounter from "@/components/mini/interactivity/05_RequestCounter";
import StateQueue from "@/components/mini/interactivity/06_StateQueue";
import ShoppingCart from "@/components/mini/interactivity/07_ShoppingCart";
import Todo from "@/components/mini/interactivity/08_Todo";
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
    {
      name: "Alternate Hrs",
      component: <AlternateHr />,
    },
    {
      name: "Broken Profile",
      component: <BrokenProfile />,
    },
    {
      name: "Gallery Crash",
      component: <GalleryCrash />,
    },
    {
      name: "Controlled Input",
      component: <ControlledInput />,
    },
    {
      name: "Crash form",
      component: <CrashForm />,
    },
    {
      name: "Traffic Light",
      component: <TrafficLight />,
    },
    {
      name: "RequestCounter",
      component: <RequestCounter />,
    },
    {
      name: "StateQueue",
      component: <StateQueue />,
    },
    {
      name: "Shopping Cart",
      component: <ShoppingCart />,
    },
    {
      name: "Todo App",
      component: <Todo />,
    },
    {
      name: "Stop WAtch",
      component: <StopWatch />,
    },
    {
      name: "Message Undo",
      component: <MessageUndo />,
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
