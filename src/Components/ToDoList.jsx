import React, { useState } from "react";

const ToDoList = () => {
  //setting our states
  const [tasks, setTask] = useState([
    "Touch Some Grass Mate!",
    "Procasttinate whole day!",
  ]);
  const [newTask, setNewTask] = useState("");
  const [editable, setEditable] = useState(true);

  //handling adding new tasks
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  // Edit task
  const updateTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTask(updatedTasks);
  };

  // Toggle edit mode for a specific task
  const toggleEditMode = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = tasks[index];
    setTask(updatedTasks);
  };

  //delete task
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i != index);
    setTask(updatedTasks);
  };

  //move the task up
  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  };

  //move the task down
  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  };

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
              <input
                type="text"
                value={tasks[index]} 
                readOnly={!editable}
                onChange={(e) => updateTask(index, e.target.value)} 
                onClick={() => toggleEditMode(index)}/>
              <button className="text-xl" onClick={() => updateTask(index)}>
                📝
              </button>
              <button className="text-xl" onClick={() => removeTask(index)}>
                🚮
              </button>
              <button className="text-xl" onClick={() => moveTaskUp(index)}>
                ⬆️
              </button>
              <button className="text-xl" onClick={() => moveTaskDown(index)}>
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
