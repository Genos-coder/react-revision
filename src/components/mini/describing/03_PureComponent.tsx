import Wrapper from "@/components/Wrapper";

// let guest = 0; //this is wrong
function PureComponent() {
  let guest = 1;
  return (
    <Wrapper>
      <Cup guest={guest++} />
      <Cup guest={guest++} />
      <Cup guest={guest++} />
      <Cup guest={guest++} />
    </Wrapper>
  );
}
export default PureComponent;

const Cup = (props: { guest: number }) => {
  return <div className="text-black">guest {props.guest}</div>;
};
