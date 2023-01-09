import { useState } from "react";

export default function AddCompany() {
  const [name, setName] = useState("");
  const [addr, setAddr] = useState("");
  const [mob, setMob] = useState("");
  const [ema, setEma] = useState("");
  const [net, setNet] = useState("");
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Enter Company Name</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label>Enter Address</label>
      <input
        type="text"
        onChange={(e) => setAddr(e.target.value)}
        value={addr}
      />
      <label>Enter Mobile Number</label>
      <input type="text" onChange={(e) => setMob(e.target.value)} value={mob} />
      <label>Enter Email Address</label>
      <input type="text" onChange={(e) => setEma(e.target.value)} value={ema} />
      <label>Enter Net Worth</label>
      <input type="text" onChange={(e) => setNet(e.target.value)} value={net} />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
}
