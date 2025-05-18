import Wrapper from "@/components/Wrapper";
import { useState } from "react";
const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];
function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);
  //   const increaseCount = (id: number) => {
  //     const newProducts = products.filter((product) => product.id !== id);
  //     const increaseProduct = products.find((product) => product.id == id);
  //     const allSetProducts = [
  //       ...newProducts,
  //       { ...increaseProduct!, count: increaseProduct!.count + 1 },
  //     ];
  //     allSetProducts.toSorted((a, b) => a.id - b.id);
  //     setProducts(allSetProducts);
  //   };
  const increaseCount = (id: number) => {
    setProducts(
      products.map((product) => {
        if (product.id == id) {
          return { ...product, count: product.count + 1 };
        }
        return product;
      })
    );
  };
  const decreaseCount = (id: number) => {
    setProducts(
      products.map((product) => {
        if (product.id == id) {
          return { ...product, count: product.count - 1 };
        }
        return product;
      })
    );
  };
  return (
    <Wrapper>
      <ul>
        {products.map((item) => {
          return (
            <li key={`aabb16${item.name}`}>
              {item.name} <span>{item.count}</span>{" "}
              <button
                className="cursor-pointer"
                onClick={() => increaseCount(item.id)}
              >
                +
              </button>
              <button
                className="cursor-pointer"
                onClick={() => decreaseCount(item.id)}
              >
                -
              </button>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}
export default ShoppingCart;
