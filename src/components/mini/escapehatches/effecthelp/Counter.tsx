import { useState, useEffect, useRef } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const refContainer = useRef<NodeJS.Timeout>(null);
  useEffect(() => {
    function onTick() {
      setCount((c) => c + 1);
    }

    refContainer.current = setInterval(onTick, 1000);
    return () => {
      if (refContainer.current) {
        clearInterval(refContainer?.current);
      }
    };
  }, []);

  return <h1>{count}</h1>;
}
