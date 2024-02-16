"use client";
import React from "react";
import { useState, useEffect } from "react";

interface todos {
  id: number;
  title: string;
  completed: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<todos[]>([]);
  const [todoName, setTodoName] = useState<string>("");
  useEffect(() => {
    const todo = localStorage.getItem("todos");
    if (todo) setTodos(JSON.parse(todo));
    else setTodos([]);
  }, []);
  const addTodo = () => {
    const newTodo = {
      id: Math.random(),
      title: todoName,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    setTodoName("");
  };
  const deleteTodo = (id: number) => {
    const newList = todos.filter((todo) => todo.id != id);
    setTodos(newList);
    localStorage.setItem("todos", JSON.stringify(newList));
  };
  return (
    <div className="w-full h-full flex justify-between items-center align-middle flex-col pt-5">
      <div className="flex justify-center items-center">
        <textarea
          className="text-black"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <button
          className="p-4 ml-4 bg-violet-600 rounded hover:bg-violet-400 text-white"
          onClick={() => addTodo()}
        >
          Add Todo
        </button>
      </div>
      <div className="flex flex-col gap-4 pt-5 h-full">
        {todos.map((todo) => {
          return (
            <div>
              <div className="flex justify-between items-center bg-slate-400 rounded p-2">
                <div className="text-2xl">{todo.title}</div>
                <div className="text-base">
                  {todo.completed ? "Completed" : "Not Completed Yet ! "}
                </div>
                <button
                  className="p-4 ml-4 text-base bg-red-600 rounded hover:bg-red-400 text-white"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
