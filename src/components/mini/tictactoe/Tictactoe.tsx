"use client";
import { useState } from "react";
import TictacCss from "./tittac.module.css";
function Tictactoe() {
  const [isX, setIsX] = useState(false);
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);
  const [winner, setWinner] = useState<null | string>(null);
  const currentState = history[history.length - 1];
  const handleClick = (id: number) => {
    let newPattern = history[history.length - 1].slice(0);
    if (newPattern[id] || winner) {
      return;
    }
    if (isX) {
      newPattern[id] = "X";
      setIsX(false);
    } else {
      newPattern[id] = "O";
      setIsX(true);
    }

    setHistory([...history, [...newPattern]]);
    let newWinner = winningArr(newPattern);
    console.log(newWinner);
    if (newWinner) {
      setWinner(newWinner);
    }
  };
  const jumpTo = (idx: number) => {
    const newHistory = history.slice(0, idx);
    setHistory([...newHistory]);
    if (idx == 1) {
      setIsX(false);
    }
  };
  const restart = () => {
    setHistory([Array(9).fill(null)]);
    setWinner(null);
    setIsX(false);
  };
  return (
    <div className="flex gap-2 border border-white flex-col   p-3 justify-center items-center rounded-lg ">
      <div className="w-full justify-center flex">
        <button
          className="border bg-white   border-black rounded-lg text-black p-1"
          onClick={() => restart()}
        >
          Restart
        </button>
      </div>
      <div className="flex flex-col">
        {winner ? <p className="text-white">Winner is {winner}</p> : null}
        {history.length === 9 && !winner && <p>Its a tie</p>}
        <div className="grid grid-cols-3 grid-rows-3 gap-2">
          {currentState.map((item, idx) => {
            return (
              <button
                onClick={() => {
                  handleClick(idx);
                }}
                key={`$aab${idx}`}
                className="border text-white border-white h-8 w-8 rounded-xl"
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div
        className={`flex flex-col ${TictacCss["hide-scrollbar"]}  overflow-hidden h-[100px] overflow-y-scroll justify-center items-center`}
      >
        {history.map((item, idx) => {
          if (idx == 0) {
            return;
          }
          return (
            <button onClick={() => jumpTo(idx)} key={`aab2${idx}`}>
              hop to {idx}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default Tictactoe;

const winningArr = (input: (string | null)[]) => {
  const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  for (let i = 0; i < winningCombo.length; i++) {
    let [a, b, c] = winningCombo[i];
    if (input[a] && input[a] == input[b] && input[b] == input[c]) {
      return input[a];
    }
  }
};
