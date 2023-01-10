import axios from "axios";
import { useState } from "react";

export default function AddInsurance(props) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/insurance", {
      name: name,
      description: desc,
      insuranceType: type,
    });
    setName("");
    setDesc("");
    setType("");
    props.getData();
    props.setFunc(0);
  };

  return (
    <form className="w-1/2 flex" onSubmit={(e) => submitHandler(e)}>
      <div className="bg-blue-900 flex flex-col my-auto w-full rounded p-2 text-white">
        <div className="text-3xl font-bold underline text-center rounded p-1 ">
          Insurance Form
        </div>
        <label className="p-1">Enter Insurance Name</label>
        <input
          className="rounded-lg text-black p-1 "
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label className="p-1">Enter Description of Insurance</label>
        <input
          className="rounded-lg text-black p-1 "
          type="text"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <label className="p-1">Enter Insurance Type</label>
        <input
          className="rounded-lg text-black p-1"
          type="text"
          onChange={(e) => setType(e.target.value)}
          value={type}
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
