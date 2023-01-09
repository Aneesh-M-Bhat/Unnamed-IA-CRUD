import { getByTitle } from "@testing-library/react";
import { useState } from "react";
import AddCompany from "./components/AddCompany";
import AddCustomer from "./components/AddCustomer";
import AddInsurance from "./components/AddInsurance";
import AddProvided from "./components/AddProvided";
import AddTaken from "./components/AddTaken";
import Buttons from "./components/Buttons";

function App() {
  const [page, setPage] = useState(0);
  const [func, setFunc] = useState(0);
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
  const getContent = () => {
    switch (page) {
      case 0:
        switch (func) {
          case 0:
            return;
          case 1:
            return;
          case 2:
            return <AddInsurance />;
        }
      case 1:
        switch (func) {
          case 0:
            return;
          case 1:
            return;
          case 2:
            return <AddCustomer />;
        }
      case 2:
        switch (func) {
          case 0:
            return;
          case 1:
            return;
          case 2:
            return <AddCompany />;
        }
      case 3:
        switch (func) {
          case 0:
            return;
          case 1:
            return;
          case 2:
            return <AddProvided />;
        }
      case 4:
        switch (func) {
          case 0:
            return;
          case 1:
            return;
          case 2:
            return <AddTaken />;
        }
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
          <button
            onClick={() => {
              setPage(0);
              setFunc(0);
            }}
          >
            Insurance
          </button>
        </div>
        <div className="ml-3 py-1">
          <button
            onClick={() => {
              setPage(1);
              setFunc(0);
            }}
          >
            Customer
          </button>
        </div>
        <div className="ml-3 py-1">
          <button
            onClick={() => {
              setPage(2);
              setFunc(0);
            }}
          >
            Company
          </button>
        </div>
        <div className="ml-3 py-1">
          <button
            onClick={() => {
              setPage(3);
              setFunc(0);
            }}
          >
            InsurancesProvided
          </button>
        </div>
        <div className="ml-3 py-1">
          <button
            onClick={() => {
              setPage(4);
              setFunc(0);
            }}
          >
            InsurancesTaken
          </button>
        </div>
        <div></div>
      </div>
      <div className="w-full bg-blue-500" style={{ height: "93vh" }}>
        <Buttons
          setFunc={setFunc}
          title={getTitle()}
          style={{ height: "8vh" }}
        />
        <div style={{ height: "85vh" }} className="w-full justify-center flex">
          {getContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
