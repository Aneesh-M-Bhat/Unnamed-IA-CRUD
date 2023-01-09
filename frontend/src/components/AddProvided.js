import { useState } from "react";

export default function AddProvided() {
  const [companyId, setCompanyId] = useState("");
  const [insuranceId, setInsuranceId] = useState("");
  return (
    <form className="w-1/2 flex" onSubmit={(e) => e.preventDefault()}>
      <div className="bg-blue-900 flex flex-col my-auto w-full rounded p-2 text-white">
        <div className="text-3xl font-bold underline text-center rounded p-1 ">
          Insurances Provided By Companies Form
        </div>
        <label className="p-1">Enter Company Id</label>
        <input
          className="rounded-lg"
          type="number"
          onChange={(e) => setCompanyId(e.target.value)}
          value={companyId}
        />
        <label className="p-1">Enter Insurance id</label>
        <input
          className="rounded-lg"
          type="number"
          onChange={(e) => setInsuranceId(e.target.value)}
          value={insuranceId}
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
