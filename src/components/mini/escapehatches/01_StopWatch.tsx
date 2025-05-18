import Wrapper from "@/components/Wrapper";
import { useRef, useState } from "react";

function StopWatch() {
  const [time, setTime] = useState<number>(0);
  const [isStop, setIsStop] = useState(true);
  const refContainer = useRef<NodeJS.Timeout>(null);
  const startFunc = () => {
    const startTime = Date.now();
    setIsStop(false);
    refContainer.current = setInterval(() => {
      const currentTime = Date.now();
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

//Strings

// const str1 = "hey there how it's going";

// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());
// console.log(str1.padStart(str1.length + 2, "0"));
// console.log(str1.startsWith("hey"));
// console.log(str1.endsWith("going"));
// console.log(str1.indexOf("how"));
// console.log(str1.split(" "));
// console.log(str1.replace("there", "ganesh"));
// console.log(str1.includes("it's"));
// const str2 = "  testing string ###";
// console.log(str2.trim());
// console.log(str2.search(/there/));

// console.log(str2.repeat(2));
// console.log(str2.replaceAll("s", "o"));
// console.log(str1.slice(0, -3));
// console.log(str1.substring(0, -3));
