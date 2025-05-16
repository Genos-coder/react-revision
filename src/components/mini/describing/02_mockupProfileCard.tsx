import Wrapper from "@/components/Wrapper";

function MockupProfileCard() {
  const person = {
    name: "Gregorio Y. Zara",
    theme: {
      backgroundColor: "black",
      color: "pink",
    },
  };
  return (
    <Wrapper classname="text-pink-500 justify-between p-0 overflow-hidden flex flex-row bg-black border-white">
      <picture className="w-1/2 ">
        <img
          className="w-full "
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt={person.name}
        />
      </picture>
      <h2 className=" w-1/2 text-5xl flex justify-center items-center">
        {person.name}
      </h2>
    </Wrapper>
  );
}
export default MockupProfileCard;
