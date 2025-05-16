import Wrapper from "@/components/Wrapper";

function SimpleProfile() {
  return (
    <Wrapper>
      <Profile />
      <Profile />
      <Profile />
    </Wrapper>
  );
}
export default SimpleProfile;

const Profile = () => {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
};
