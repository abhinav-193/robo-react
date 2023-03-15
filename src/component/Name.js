import { useState } from "react";

const Name = ({ changes }) => {
  const [name, setName] = useState("");
  const trigger = (event) => {
    changes(name);
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={trigger}>
        <label>
          Enter your search
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    </>
  );
};
export default Name;
