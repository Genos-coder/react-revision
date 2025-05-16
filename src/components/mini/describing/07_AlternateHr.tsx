import Wrapper from "@/components/Wrapper";
import React from "react";

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

function AlternateHr() {
  const output: React.ReactNode[] = [];
  poem.lines.forEach((item) => {
    output.push(<hr key={`aabb15${item}`} />);
    output.push(<p key={`aabb16${item}`}>{item}</p>);
  });
  output.shift();
  return <Wrapper classname="text-black p-4">{output}</Wrapper>;
}
export default AlternateHr;
