import Wrapper from "@/components/Wrapper";
import { useRef, useState } from "react";
import CustomCss from "./00_req.module.css";
function ImageScroller() {
  const [count, setCount] = useState<number>(1);
  const refContainer = useRef<HTMLUListElement>(null);
  const scrollerImage = () => {
    const listElem = refContainer.current;
    const singleNode = listElem?.querySelectorAll("li")[count - 1];
    if (singleNode) {
      singleNode.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };
  return (
    <Wrapper classname="flex flex-col overflow-hidden">
      <div className="h-1/3 grow p-2 bg-blue-500">
        <div className="flex justify-center items-center gap-7">
          <div className="flex justify-center items-center gap-7">
            <button
              onClick={() =>
                setCount((prev) => {
                  if (prev === 3) {
                    return prev;
                  } else {
                    return prev + 1;
                  }
                })
              }
              className="bg-black text-white p-2 rounded-lg"
            >
              +
            </button>
            <h3>{count}</h3>
            <button
              onClick={() =>
                setCount((prev) => {
                  if (prev === 0) {
                    return prev;
                  } else {
                    return prev - 1;
                  }
                })
              }
              className="bg-black text-white p-2 rounded-lg"
            >
              -
            </button>
          </div>
          <button
            className="bg-black text-white p-2 rounded-lg"
            onClick={scrollerImage}
          >
            Scroll
          </button>
        </div>
      </div>
      <ul
        ref={refContainer}
        className={`flex h-[200px] w-[300px] flex-col ${CustomCss["hide-scrollbar"]} overflow-y-scroll overflow-hidden `}
      >
        <li className="w-[300px] h-[200px]">
          <img
            className="h-full w-full"
            src="https://placecats.com/neo/300/200"
            alt="Neo"
          />
        </li>
        <li className="w-[300px] h-[200px]">
          <img
            className="h-full w-full"
            src="https://placecats.com/millie/200/200"
            alt="Millie"
          />
        </li>
        <li className="w-[300px] h-[200px]">
          <img
            className="h-full w-full"
            src="https://placecats.com/bella/199/200"
            alt="Bella"
          />
        </li>
      </ul>
    </Wrapper>
  );
}
export default ImageScroller;
