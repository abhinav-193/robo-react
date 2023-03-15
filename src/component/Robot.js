import { Component, useEffect, useState } from "react";
import "./Robot.css";
import Name from "./Name.js";

const Robot = (props) => {
  const name = props.name;
  const change = props.change;
  const [search, setSearch] = useState("");
  const changes = (search) => {
    setSearch(search);
  };
  const changesd = (name) => {
    return "https://robohash.org/".concat(name);
  };
  const datak = () => {
    const p = props.data;
    let ke = Object.keys(props.datas);
    let k;
    let flag = 0;
    if (props.fla == 0) {
      if (search === "") {
        k = props.datas.map((data) => (
          <div className="rob" key={data.name}>
            <img src={data.image} />
            <h1> Name: {data.name}</h1>
          </div>
        ));
      } else {
        console.log("Hello");
        const dat = props.datas.filter((data) => data.name.includes(search));
        k = dat.map((data) => (
          <div className="rob" key={data.name}>
            <img src={data.image} />
            <h1> Name: {data.name}</h1>
          </div>
        ));
      }
    } else {
      if (search === "") {
        k = props.datas.map((data) => (
          <div className="rob" key={data.name}>
            <img src={changesd(data.name)} />
            <h1> Name: {data.name}</h1>
          </div>
        ));
      } else {
        const dat = props.datas.filter((data) => data.name.includes(search));
        k = dat.map((data) => (
          <div className="rob" key={data.name}>
            <img src={changesd(data.name)} />
            <h1> Name: {data.name}</h1>
          </div>
        ));
      }
    }
    return k;
  };

  return (
    <>
      <h1>Hello {name},</h1>
      <button onClick={change}>Click</button>
      <div className="nam">
        <Name changes={changes} />
      </div>
      <div className="Box">
        <div className="ro">{datak()}</div>
      </div>
    </>
  );
};
export default Robot;
