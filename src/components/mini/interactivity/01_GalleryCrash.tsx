import { useState } from "react";
import { sculptureList } from "@/data/galleryCrash";
import Wrapper from "@/components/Wrapper";
function GalleryCrash() {
  const [count, setCount] = useState(0);
  const handleNext = () => {
    if (count === sculptureList.length) {
      return;
    } else {
      setCount(count + 1);
    }
  };
  const handlePrevious = () => {
    if (count == 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };
  const currentSculpture = sculptureList[count];
  return (
    <Wrapper>
      <div className="flex flex-col text-black ">
        <picture>
          <img src={currentSculpture.url} alt={currentSculpture.name} />
        </picture>
        <h2>{currentSculpture.name}</h2>
        <p>{currentSculpture.description}</p>
        <div
          className="flex justify-between bg-black p-2
         text-white"
        >
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </Wrapper>
  );
}
export default GalleryCrash;
