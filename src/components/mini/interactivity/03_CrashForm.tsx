//Create the component which says thank you when you submit the form with message you send as an alert message

import Wrapper from "@/components/Wrapper";
import { useState } from "react";

function CrashForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");
  const content = isSent ? (
    <h2>Thank you</h2>
  ) : (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        alert(message);
        setMessage("");
        setIsSent(true);
      }}
    >
      <input
        className="border border-black"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        name=""
        id=""
      />
    </form>
  );
  return (
    <Wrapper classname="flex flex-col justify-center items-center text-black">
      {content}
    </Wrapper>
  );
}
export default CrashForm;
