import Wrapper from "@/components/Wrapper";
import Profile from "./Profile";

export default function BrokenProfile() {
  return (
    <Wrapper classname="flex-col text-black">
      <Profile
        person={{
          imageId: "lrWQx8l",
          name: "Subrahmanyan Chandrasekhar",
        }}
      />
      <Profile
        person={{
          imageId: "MK3eW3A",
          name: "Creola Katherine Johnson",
        }}
      />
    </Wrapper>
  );
}
