import { FC, useEffect, useState } from "react";
import { ITodo } from "../../interfaces/todo";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

const ToDo: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [newTodo, setNewTodo] = useState<ITodo>({
    title: "",
    done: false,
  });

  useEffect(() => {
    console.log("newTodo", newTodo);
  }, [newTodo]);

  const updateNewTodo = (value: ITodo) => {
    setNewTodo({ ...value });
  };

  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo({
      title: "",
      description: "",
      done: false,
    });
  };

  return (
    <>
      <AddTodo
        newTodo={newTodo}
        updateNewTodo={updateNewTodo}
        addTodo={addTodo}
      />
      <ListTodo todos={todos} />
    </>
  );
};

export default ToDo;
