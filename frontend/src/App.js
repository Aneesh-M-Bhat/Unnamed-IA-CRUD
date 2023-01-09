import { getByTitle } from "@testing-library/react";
import { useState } from "react";
import Buttons from "./components/Buttons";

function App() {
  const [page, setPage] = useState(0);
  const getTitle = () => {
    switch (page) {
      case 0:
        return "Insurance";
      case 1:
        return "Customer";
      case 2:
        return "Company";
      case 3:
        return "Insurances Provided By Companies";
      case 4:
        return "Insurances Taken By Customers";
    }
  };
  return (
    <div className=" bg-blue-300 w-screen h-screen">
      <div
        className="bg-blue-900 text-white flex flex-row p-2"
        style={{ height: "7vh" }}
      >
        <div className=" text-xl ml-1">Insurance Management System</div>
        <div className="ml-auto py-1">
          <button onClick={() => setPage(0)}>Insurance</button>
        </div>
        <div className="ml-3 py-1">
          <button onClick={() => setPage(1)}>Customer</button>
        </div>
        <div className="ml-3 py-1">
          <button onClick={() => setPage(2)}>Company</button>
        </div>
        <div className="ml-3 py-1">
          <button onClick={() => setPage(3)}>InsurancesProvided</button>
        </div>
        <div className="ml-3 py-1">
          <button onClick={() => setPage(4)}>InsurancesTaken</button>
        </div>
        <div></div>
      </div>
      <div className="w-full bg-blue-500" style={{ height: "93vh" }}>
        <Buttons title={getTitle()} style={{ height: "8vh" }} />
        <div style={{ height: "85vh" }} className="w-full justify-center flex">
          
        </div>
      </div>
    </div>
  );
}

export default App;
