import { FC } from "react";
import { ITodo } from "../../interfaces/todo";

interface IAddTodoProps {
  newTodo: ITodo;
  updateNewTodo: (value: ITodo) => void;
  addTodo: () => void;
}

const AddTodo: FC<IAddTodoProps> = ({ newTodo, updateNewTodo, addTodo }) => {
  return (
    <>
      <div className="w-96">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={newTodo.title}
          onChange={(event) => {
            updateNewTodo({
              ...newTodo,
              title: event.target.value,
            });
          }}
        />
      </div>
      <div className="w-96">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <input
          type="text"
          name="description"
          id="description"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={newTodo.description}
          onChange={(event) => {
            updateNewTodo({
              ...newTodo,
              description: event.target.value,
            });
          }}
        />
      </div>
      <button
        onClick={() => addTodo()}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Add
        </span>
      </button>
    </>
  );
};

export default AddTodo;
