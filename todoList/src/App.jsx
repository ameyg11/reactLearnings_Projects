// 'use client'
import { ClientPageRoot } from "next/dist/client/components/client-page";
import { useState } from "react";

function App() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    console.log(mainTask);

    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmainTask(copytask);  
  };

  const toggleComplete = (i) => {
    const updatedTasks = mainTask.map((task, index) =>
      index === i ? { ...task, completed: !task.completed } : task
    );
    setmainTask(updatedTasks);
  };

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li className="flex items-center justify-between border-b-2 border-gray-700 m-5">
          <div className="flex items-center w-2/3">
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleComplete(i)}
              className="mr-4 h-5 w-5 rounded focus:outline-none"
            />
            <div className={t.completed ? "line-through flex justify-between mb-5 w-2/3 text-gray-700" : "flex justify-between mb-5 w-2/3"}>
              <h5 className="text-2xl font-semibold">{t.title}</h5>
              <h6 className="text-l font-semibold">{t.desc}</h6>
            </div>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 text-white px-4 py-2 rounded font-sans font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1
        className="bg-black text-center
      text-white p-5 text-5xl font-semibold font-serif"
      >
        My Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-700 border-4 m-8 px-4 py-2"
          placeholder="Enter Your Task"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />

        <input
          type="text"
          className="text-2xl border-zinc-700 border-4 m-8 px-4 py-2"
          placeholder="Enter Description"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />

        <button className="bg-black text-white px-4 py-2 m-5 rounded">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-300 text-black font-mono">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}

export default App;