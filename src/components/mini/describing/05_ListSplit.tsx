import Wrapper from "@/components/Wrapper";
import { people } from "@/data/describingListSplit";
function ListSplit() {
  let chemistList: ItemType[] = [];
  let others: ItemType[] = [];
  people.map((item) => {
    if (item.profession === "chemist") {
      chemistList.push(item);
    } else {
      others.push(item);
    }
  });
  return (
    <Wrapper classname="border border-white overflow-hidden">
      <h2 className="bg-black py-2 font-bold text-white text-center">
        Chem list
      </h2>
      <ul className=" flex flex-col gap-2 p-2 text-black">
        {chemistList.map((item) => {
          return <ListCard key={`aabb11${item.id}`} item={item} />;
        })}
      </ul>
      <h2 className="bg-black py-2 font-bold text-white text-center">
        Other profession list
      </h2>
      <ul className="flex flex-col gap-2 p-2 text-black">
        {others.map((item) => {
          return <ListCard key={`aabb12${item.id}`} item={item} />;
        })}
      </ul>
    </Wrapper>
  );
}
export default ListSplit;

type ItemType = {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
};

function ListCard({ item }: { item: ItemType }) {
  return (
    <li className="flex border border-black p-2 bg-white rounded-lg text-black">
      <picture className="w-1/2">
        <img src={getImageUrl(item)} alt={item.name} />
      </picture>
      <div className="w-2/3">
        <h2>{item.name}</h2>
        <p>{item.accomplishment}</p>
        <p>Profession is {item.profession}</p>
      </div>
    </li>
  );
}

export function getImageUrl(person: { imageId: string }) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}
