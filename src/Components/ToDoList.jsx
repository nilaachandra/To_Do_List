import React, { useState } from "react";

const ToDoList = () => {
  //setting our states
  const [tasks, setTask] = useState([
    "Touch Some Grass Mate!",
    "Procasttinate whole day!",
  ]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  };
  const updateTask = (index) => {};
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i != index);
    setTask(updatedTasks);
  };
  const moveTaskUp = (index) => {};
  const moveTaskdown = (index) => {};

  return (
    <div className="p-6 w-full">
      <div className="flex justify-center items-center flex-col border-2 border-black">
        <h1 className="font-bold text-xl">ToDoList - Don't Do It </h1>
        <p className="text-xl">Add A ToDo!</p>
        <div className="todoAdder flex flex-col py-2 w-full lg:px-80 md:px-40 px-4 gap-2">
          <input
            type="text"
            value={newTask}
            placeholder="Enter New Task!"
            onChange={handleInputChange}
            className="theTask border-2 border-black"
          />
          <button
            onClick={addTask}
            className="border-2 bg-blue-900 text-white px-8 text-md rounded-md py-[0.3rem]"
          >
            Add
          </button>
        </div>
        <h1>My Todos Are</h1>
        <div className="todoAdder flex flex-col py-2 w-full lg:px-80 md:px-40 px-4 gap-2">
          {tasks.map((task, index) => (
            <div key={index} className="flex gap-2 w-full justify-around">
              <input type="text" value={task} className="" />
              <button className="text-xl" onClick={() => updateTask(index)}>
                📝
              </button>
              <button className="text-xl" onClick={() => removeTask(index)}>
                🚮
              </button>
              <button className="text-xl" onClick={() => moveTaskUp(index)}>
                ⬆️
              </button>
              <button className="text-xl" onClick={() => moveTaskdown(index)}>
                ⬇️
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
