import { useState } from "react";
import Counter from "./Counter";
import Wrapper from "@/components/Wrapper";

function COunterProblem() {
  const [show, setShow] = useState(false);
  return (
    <Wrapper classname="flex  flex-col bg-white h-[100px] w-[100px]">
      <button
        className="bg-black text-white p-1
       rounded-lg"
        onClick={() => setShow(!show)}
      >
        {show ? "hide" : "show"}
      </button>
      {show && <Counter />}
    </Wrapper>
  );
}
export default COunterProblem;
