// pages/index.tsx
import { useState } from "react";
import TodoList from "../components/TodoList";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), title: input, completed: false }]);
      setInput("");
    }
  };

  const completeTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="w-full p-2 border border-gray-300 rounded-md">
      <h1 className="text-2xl text-black-500 font-bold text-center mb-5">
        Todo App
      </h1>
      <form className="flex justify-center p-10" onSubmit={addTask}>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className={
            "py-3 lg:py-3 px-14 lg:px-14 text-white-500 font-bold ml-5 bg-blue-400 hover:shadow-teal-md transition-all outline-none text-white"
          }
          type="submit"
        >
          Add
        </button>
      </form>
      <TodoList
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default Home;
