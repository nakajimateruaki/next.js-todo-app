// components/TodoItem.tsx
import React from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoItemProps {
  task: Task;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onComplete, onDelete }) => {
  return (
    <div>
      <span>{task.title}</span>
      <button onClick={() => onComplete(task.id)}>Complete</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
