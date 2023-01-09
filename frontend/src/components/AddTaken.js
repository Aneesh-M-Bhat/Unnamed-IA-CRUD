import { useState } from "react";

export default function AddTaken() {
  const [customerId, setCustomerId] = useState("");
  const [insuranceId, setInsuranceId] = useState("");
  const [term, setTerm] = useState("");
  const [price, setPrice] = useState("");
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Enter Customer Id</label>
      <input
        type="number"
        onChange={(e) => setCustomerId(e.target.value)}
        value={customerId}
      />
      <label>Enter Insurance id</label>
      <input
        type="number"
        onChange={(e) => setInsuranceId(e.target.value)}
        value={insuranceId}
      />
      <label>Enter Term</label>
      <input
        type="number"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
      />
      <label>Enter Price Per Month</label>
      <input
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
}
