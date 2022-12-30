import { FC } from "react";
import { ITodo } from "../../interfaces/todo";

interface ITodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  return (
    <>
      <div>
        <label>Title : </label>
        <span>{todo.title}</span>
      </div>
      <div>
        <label>Description : </label>
        <span>{todo.description}</span>
      </div>
    </>
  );
};

export default TodoItem;
