// components/TodoList.tsx
import React from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface Props {
  tasks: Task[];
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ tasks, completeTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          className="flex justify-center align-middle items-center"
          key={task.id}
        >
          <input
            className="mr-5 w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            type="checkbox"
            checked={task.completed}
            onChange={() => completeTask(task.id)}
          />
          <span className="text-2x1 font-mono">{task.title}</span>
          <button
            className={
              "py-3 lg:py-3 px-14 lg:px-14 text-white-500 font-bold ml-5 bg-red-300 hover:shadow-teal-md transition-all outline-none text-white"
            }
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
