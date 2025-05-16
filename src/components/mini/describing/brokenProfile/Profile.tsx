import { useState } from "react";

type ProfileProps = {
  person: {
    imageId: string;
    name: string;
  };
};
export default function Profile({ person }: ProfileProps) {
  person;
  return (
    <Panel>
      <Header name={person.name} />
      <Avatar person={person} />
    </Panel>
  );
}

function Header({ name }: { name: string }) {
  return <h1>{name}</h1>;
}

function Avatar({ person }: ProfileProps) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}

type PanelPropType = {
  children: React.ReactNode;
};

function Panel({ children }: PanelPropType) {
  const [show, setShow] = useState(true);
  return (
    <div className="p-3">
      <button
        className="bg-white text-black p-1 rounded-lg border border-black "
        onClick={() => setShow(!show)}
      >
        {show ? "collapse" : "show"}
      </button>
      {show && children}
    </div>
  );
}

export function getImageUrl(person: { imageId: string }) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}
