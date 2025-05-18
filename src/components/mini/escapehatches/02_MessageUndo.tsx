//Create the send and undo functionality using useRef , useState
import Wrapper from "@/components/Wrapper";
import { useRef, useState } from "react";

function MessageUndo() {
  const [isSent, setIsSent] = useState(false);
  const [text, setText] = useState("");
  const refContainer = useRef<NodeJS.Timeout>(null);
  const handleSent = () => {
    setIsSent(true);
    refContainer.current = setTimeout(() => {
      alert(text);
      setIsSent(false);
    }, 4000);
  };
  const handleUndo = () => {
    setIsSent(false);
    if (refContainer.current) {
      clearTimeout(refContainer.current);
    }
  };
  return (
    <Wrapper>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {isSent && (
        <button className="animate-pulse bg-black rounded-lg text-white p-1">
          Sending...
        </button>
      )}
      {isSent ? (
        <button
          className="bg-black p-1 rounded-lg text-white"
          onClick={handleUndo}
        >
          undo
        </button>
      ) : (
        <button
          className="bg-black p-1 rounded-lg text-white"
          onClick={handleSent}
        >
          send
        </button>
      )}
    </Wrapper>
  );
}
export default MessageUndo;
