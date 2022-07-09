import React, { Component, useState } from "react";
import "./App.css";
import ToDoList from "./component/ToDoList";
const App = () => {
  const state = useState();
  const [value, display] = useState("");
  const [listItem, storeElement] = useState([]);
  const Update = (event) => {
    display(event.target.value);
  };
  const Add = () => {
    storeElement((oldItems) => {
      return [...oldItems, value];
    });
    display("");
  };
  const deletItem = (id) => {
    storeElement(
      listItem.filter((arrElem, index) => {
        return index != id;
      })
    );
  };
  const Remove = () => {
    storeElement([]);
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> To Do List</h1>

          <input
            type="text"
            placeholder="Add an item"
            onChange={Update}
            value={value}
          />
          <i className="fa fa-plus" onClick={Add}></i>
          <ul type="none">
            {listItem.map((item, index) => (
              <ToDoList text={item} id={index} onSelect={deletItem} />
            ))}
          </ul>
        </div>

        <button onClick={Remove} className="cross">
          {" "}
          <i className="fa fa-trash" onClick={Remove}></i>Delete All
        </button>
      </div>
    </>
  );
};
export default App;
