import { useState } from "react";
import Wrapper from "@/components/Wrapper";
function ControlledInput() {
  const [text, setText] = useState("");
  return (
    <Wrapper classname="justify-center items-center p-5">
      <input
        className="text-black border border-black"
        type="text"
        onChange={(e) => setText(e.target.value)}
        name=""
        value={text}
        id=""
        placeholder="write something"
      />
    </Wrapper>
  );
}
export default ControlledInput;
