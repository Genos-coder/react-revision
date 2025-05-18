import Wrapper from "@/components/Wrapper";
import { useRef, useState } from "react";

function StopWatch() {
  const [time, setTime] = useState<number>(0);
  const [isStop, setIsStop] = useState(true);
  const refContainer = useRef<NodeJS.Timeout>(null);
  const startFunc = () => {
    let startTime = Date.now();
    setIsStop(false);
    refContainer.current = setInterval(() => {
      let currentTime = Date.now();
      setTime(currentTime - startTime);
    }, 100);
  };
  const stopFunc = () => {
    if (refContainer.current) {
      clearInterval(refContainer.current);
    }
    setIsStop(true);
  };

  function millisecondsFormatter(milliseconds: number) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(totalSeconds % 60)
      .toString()
      .padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }
  return (
    <Wrapper classname="bg-white flex justify-center items-center flex-col gap-1 p-6 ">
      <h2>{millisecondsFormatter(time)}</h2>
      {isStop ? (
        <button
          className="bg-black text-white px-1 rounded-lg"
          onClick={startFunc}
        >
          Start
        </button>
      ) : (
        <button
          className="bg-black text-white px-1 rounded-lg"
          onClick={stopFunc}
        >
          Stop
        </button>
      )}
    </Wrapper>
  );
}
export default StopWatch;
