import Wrapper from "@/components/Wrapper";

function Conditional() {
  return (
    <Wrapper>
      <Drink name="tea" />
      <Drink name="coffee" />
    </Wrapper>
  );
}
export default Conditional;

function Drink({ name }: { name: string }) {
  let part, caffeine, age;
  if (name == "tea") {
    (part = "leaf"), (caffeine = "15–70 mg/cup");
    age = "4,000+ years";
  } else if (name === "coffee") {
    part = "bean";
    caffeine = "80–185 mg/cup";
    age = "1,000+ years";
  }
  return (
    <ul className="text-black">
      <li>Plant part is {part}</li>
      <li>Plant caffeine is {caffeine}</li>
      <li>Plant age is {age}</li>
    </ul>
  );
}
