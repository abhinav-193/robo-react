import "./styles.css";
import Navbar from "./component/Navbar.js";
import Robot from "./component/Robot";
import { useState } from "react";

export default function App() {
  const [datas, setData] = useState([
    {
      name: "John",
      image: "https://robohash.org/200"
    },
    {
      name: "Andre",
      image: "https://robohash.org/300"
    },
    {
      name: "A",
      image: "https://robohash.org/500"
    },
    {
      name: "J",
      image: "https://robohash.org/700"
    }
  ]);
  const [fla, setFla] = useState(0);
  const chang = () => {
    if (fla == 0) {
      setFla(1);
    } else {
      setFla(0);
    }
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  };
  const [name, setName] = useState("Abhinav");
  var flag = 0;
  const change = () => {
    if (flag === 0) {
      flag = 1;
      setName("Rahul");
    } else {
      setName("Abhinav");
      flag = 0;
    }
  };
  return (
    <div className="App">
      <Navbar />
      <h1>Sample</h1>
      <button onClick={chang}>Change data to API</button>
      <Robot name={name} change={change} datas={datas} fla={fla} />
    </div>
  );
}
