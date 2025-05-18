//create the request counter which updates and get's low with two variable

import Wrapper from "@/components/Wrapper";
import { useState } from "react";

function RequestCounter() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  const handleClick = () => {
    setPending(pending + 1);
    setTimeout(() => {
      setCompleted((prev) => prev + 1);
      setPending((prev) => prev - 1);
    }, 3000);
  };
  return (
    <Wrapper>
      <div>
        <p>pending:{pending}</p>
        <p>Completed:{completed}</p>
      </div>
      <button className="" onClick={handleClick}>
        Add Task
      </button>
    </Wrapper>
  );
}
export default RequestCounter;
