import Wrapper from "@/components/Wrapper";
import { todo } from "node:test";
import { FormEvent, useState } from "react";

const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];
function Todo() {
  const [todos, setTodo] =
    useState<{ id: number; title: string; done: boolean }[]>(initialTodos);
  const [text, setText] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newTodo = {
      id: todos[todos.length - 1].id + 1,
      title: text,
      done: false,
    };
    setTodo([...todos, newTodo]);
    setText("");
  };
  const handleDone = (id: number) => {
    setTodo(
      todos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <Wrapper classname="overflow-hidden">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-teal-400 p-2 flex gap-2"
        action=""
      >
        <input
          type="text"
          className="bg-white text-black rounded-lg"
          name=""
          value={text}
          onChange={(e) => setText(e.target.value)}
          id=""
        />
        <button type="submit" className="bg-black text-white p-1 rounded-lg">
          Add Todo
        </button>
      </form>
      <ul className="overflow-hidden p-2 flex gap-2 flex-col overflow-y-scroll">
        {todos.map((item) => {
          return (
            <li
              className="flex bg-slate-200 p-1 rounded-lg"
              key={`aabb17 ${item.id}`}
            >
              <input
                type="checkbox"
                name=""
                onChange={() => handleDone(item.id)}
                checked={item.done}
                id=""
              />
              <h2>{item.title}</h2>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}
export default Todo;
