import { useState } from "react";

export default function AddInsurance(props) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Enter Insurance Name</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label>Enter Description of Insurance</label>
      <input
        type="text"
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
      />
      <label>Enter Insurance Type</label>
      <input
        type="text"
        onChange={(e) => setType(e.target.value)}
        value={type}
      />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
}
