import { useState } from "react";

export default function AddCustomer() {
  const [name, setName] = useState("");
  const [addr, setAddr] = useState("");
  const [mob, setMob] = useState("");
  const [ema, setEma] = useState("");
  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-1/2 flex">
      <div className="bg-blue-900 flex flex-col my-auto w-full rounded p-2 text-white">
        <div className="text-3xl font-bold underline text-center rounded p-1 ">
          Customer Form
        </div>
        <label className="p-1">Enter Company Name</label>
        <input
          className="rounded-lg"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label className="p-1">Enter Address</label>
        <input
          className="rounded"
          type="text"
          onChange={(e) => setAddr(e.target.value)}
          value={addr}
        />
        <label className="p-1">Enter Mobile Number</label>
        <input
          className="rounded"
          type="text"
          onChange={(e) => setMob(e.target.value)}
          value={mob}
        />
        <label className="p-1">Enter Email Address</label>
        <input
          className="rounded"
          type="text"
          onChange={(e) => setEma(e.target.value)}
          value={ema}
        />
        <div className="flex flex-row p-1 mt-2 justify-center">
          <button type="submit" className="bg-green-900 w-1/3 p-1 rounded mr-1">
            Submit
          </button>
          <button type="reset" className="bg-red-900 w-1/3 p-1 rounded ml-1">
            Reset
          </button>
        </div>
      </div>
    </form>
  );
}
