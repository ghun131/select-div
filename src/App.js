import React, { Fragment, useState } from "react";
import "./App.css";
import data from "./data.json";
import Cover from "./Cover";

function App() {
  const [id, setId] = useState("");
  function handleClick(event) {
    const id = event.target.getAttribute("data-id");
    if (id) {
      setId(id);
    }
  }

  function renderLine(array, start, end) {
    return array.slice(start, end).map(el => {
      if (el.id === id) {
        return (
          <Cover key={el.id}>
            <div
              style={{ backgroundColor: el.backgroundColor }}
              className="box"
              onClick={handleClick}
              data-id={el.id}
            >
              {el.id}
            </div>
          </Cover>
        );
      } else {
        return (
          <Fragment key={el.id}>
            <div
              style={{ backgroundColor: el.backgroundColor }}
              className="box"
              onClick={handleClick}
              data-id={el.id}
            >
              {el.id}
            </div>
          </Fragment>
        );
      }
    });
  }
  return (
    <div className="App">
      <div className="container">{renderLine(data, 0, 4)}</div>
      <div className="container">{renderLine(data, 4, 8)}</div>
    </div>
  );
}

export default App;
