import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import "../components/home/styles.css";
import Task from "../components/home/Task";

export default function Home() {
  const [value, setValue] = useState({
    id: 0,
    content: "",
    completed: false,
  });
  const [values, setValues] = useState([]);

  const handleForm = () => {
    setValues([...values, value]);
    console.log(values);
  };

  const storeValue = (e) => {
    setValue({
      id: values.length + 1,
      content: e.target.value || e.target.innerText,
      completed: false,
    });
  };

  const markAsCompleted = (e, id) => {
    const task = values.filter((val) => {
      return val.id === id;
    });

    let updatedTask = task[0].completed
      ? (task[0].completed = false)
      : (task[0].completed = true);

    updateItem(id, updatedTask);
  };

  const updateItem = (id, itemAttributes) => {
    let index = values.findIndex((x) => x.id === id);

    if (index !== -1) {
      setValues([
        ...values.slice(0, index),
        Object.assign({}, values[index], itemAttributes),
        ...values.slice(index + 1),
      ]);
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="content">
          <h1>TO-DO List</h1>
          <input
            type="text"
            name="to_do"
            placeholder="Type something"
            onChange={(e) => storeValue(e)}
          />
          <button onClick={handleForm}>Create</button>

          <hr />

          {values.length ? (
            values.map((task, index) => (
              <Task key={index} todo={task} markAsCompleted={markAsCompleted} />
            ))
          ) : (
            <p>No added tasks</p>
          )}
        </div>
      </div>
    </Layout>
  );
}
