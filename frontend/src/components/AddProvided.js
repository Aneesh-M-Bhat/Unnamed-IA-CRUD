import { useState } from "react";

export default function AddProvided() {
  const [companyId, setCompanyId] = useState("");
  const [insuranceId, setInsuranceId] = useState("");
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Enter Company Id</label>
      <input
        type="number"
        onChange={(e) => setCompanyId(e.target.value)}
        value={companyId}
      />
      <label>Enter Insurance id</label>
      <input
        type="number"
        onChange={(e) => setInsuranceId(e.target.value)}
        value={insuranceId}
      />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
}
