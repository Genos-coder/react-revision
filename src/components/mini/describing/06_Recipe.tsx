import Wrapper from "@/components/Wrapper";
import { recipes } from "@/data/recipe";
function Recipe() {
  return (
    <Wrapper>
      {recipes.map((item) => {
        return (
          <div key={`aabb13${item.id}`}>
            <h2 className="bg-clip-text text-transparent border-b-2 border-pink-400 bg-gradient-to-r font-bold text-4xl   to-pink-800 from-pink-400">
              {item.name}
            </h2>
            <ul className="text-black decoration-1">
              {item.ingredients.map((stuff) => {
                return (
                  <li className="text-purple-700" key={`aabb14${stuff}`}>
                    {stuff}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </Wrapper>
  );
}
export default Recipe;
