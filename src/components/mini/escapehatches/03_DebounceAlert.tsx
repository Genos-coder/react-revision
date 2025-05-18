import Wrapper from "@/components/Wrapper";
import { useRef } from "react";
function DebounceAlert() {
  const refContainer = useRef<NodeJS.Timeout>(null);
  const handleTransaction = () => {
    if (refContainer.current) {
      clearTimeout(refContainer.current);
    }
    refContainer.current = setTimeout(() => {
      alert("Done with transaction");
    }, 2000);
  };
  return (
    <Wrapper>
      <button
        className="bg-black text-white border-white border p-3 text-3xl font-bold"
        onClick={handleTransaction}
      >
        Do Transaction
      </button>
    </Wrapper>
  );
}
export default DebounceAlert;
