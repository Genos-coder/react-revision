import Wrapper from "@/components/Wrapper";
import { useEffect, useRef } from "react";

function FocusedInput() {
  const refContainer = useRef<HTMLInputElement>(null);
  useEffect(() => {
    refContainer.current?.focus();
  }, []);
  return (
    <Wrapper>
      <input
        type="text"
        ref={refContainer}
        className="bg-white border-black p-2 text-black  rounded-lg"
      />
    </Wrapper>
  );
}
export default FocusedInput;
