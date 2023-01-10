import axios from "axios";
import { useState } from "react";

export default function AddTaken(props) {
  const [customerId, setCustomerId] = useState("");
  const [insuranceId, setInsuranceId] = useState("");
  const [term, setTerm] = useState("");
  const [price, setPrice] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/taken", {
      customerId: customerId,
      insuranceId: insuranceId,
      termTaken: term,
      pricePerMonth: price,
    });
    setCustomerId("");
    setInsuranceId("");
    setTerm("");
    setPrice("");
    props.getData();
    props.setFunc(0);
  };

  return (
    <form className="w-1/2 flex" onSubmit={(e) => submitHandler(e)}>
      <div className="bg-blue-900 flex flex-col my-auto w-full rounded p-2 text-white">
        <div className="text-3xl font-bold underline text-center rounded p-1 ">
          Insurances Taken By Customers Form
        </div>
        <label className="p-1">Enter Customer Id</label>
        <input
          className="rounded-lg text-black p-1"
          type="number"
          onChange={(e) => setCustomerId(e.target.value)}
          value={customerId}
        />
        <label className="p-1">Enter Insurance id</label>
        <input
          className="rounded-lg text-black p-1"
          type="number"
          onChange={(e) => setInsuranceId(e.target.value)}
          value={insuranceId}
        />
        <label className="p-1">Enter Term</label>
        <input
          className="rounded-lg text-black p-1"
          type="number"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
        <label className="p-1">Enter Price Per Month</label>
        <input
          className="rounded-lg text-black p-1"
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
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
