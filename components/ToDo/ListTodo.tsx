import { FC, Fragment } from "react";
import { ITodo } from "../../interfaces/todo";
import TodoItem from "./TodoItem";

interface IListTodoProps {
  todos: ITodo[];
}

const ListTodo: FC<IListTodoProps> = ({ todos }) => {
  return (
    <>
      <p>List todo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <Fragment key={index}>
              <li>
                <TodoItem todo={todo} />
              </li>
            </Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default ListTodo;
