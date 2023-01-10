import { useEffect, useState } from "react";
import AddCompany from "./components/AddCompany";
import AddCustomer from "./components/AddCustomer";
import AddInsurance from "./components/AddInsurance";
import AddProvided from "./components/AddProvided";
import AddTaken from "./components/AddTaken";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import axios from "axios";

function App() {
  const [page, setPage] = useState(0);
  const [func, setFunc] = useState(0);
  const [customers, setCustomers] = useState([]);
  const [insurances, setInsurances] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [provided, setProvided] = useState([]);
  const [taken, setTaken] = useState([]);
  const [update, setUpdate] = useState({});

  const getCustomers = async () => {
    const response = await axios.get("http://localhost:5000/customer");
    setCustomers(response.data);
    console.log(response.data);
  };

  const getInsurances = async () => {
    const response = await axios.get("http://localhost:5000/insurance");
    setInsurances(response.data);
    console.log(response.data);
  };

  const getCompanies = async () => {
    const response = await axios.get("http://localhost:5000/company");
    setCompanies(response.data);
    console.log(response.data);
  };

  const getInsurancesProvided = async () => {
    const response = await axios.get("http://localhost:5000/provided");
    setProvided(response.data);
    console.log(response.data);
  };

  const getInsurancesTaken = async () => {
    const response = await axios.get("http://localhost:5000/taken");
    setTaken(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getInsurances();
    getCompanies();
    getInsurancesProvided();
    getInsurancesTaken();
    getCustomers();
  }, []);

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
  const updateHandler = (data) => {
    setUpdate(data);
    setFunc(2);
  };
  const deleteHandler = async (id) => {
    let url;
    switch (page) {
      case 0:
        url = "insurance";
        break;
      case 1:
        url = "customer";
        break;
      case 2:
        url = "company";
        break;
      case 3:
        url = "provided";
        break;
      case 4:
        url = "taken";
        break;
    }
    await axios.delete(`http://localhost:5000/${url}/${id}`);
    getInsurances();
    getCompanies();
    getInsurancesProvided();
    getInsurancesTaken();
    getCustomers();
  };
  const getContent = () => {
    switch (page) {
      case 0:
        switch (func) {
          case 0:
            return (
              <Table
                title={"Insurance"}
                headers={[
                  "Insurance Id",
                  "Insurance Name",
                  "Description",
                  "Insurance Type",
                ]}
                rows={insurances}
                keys={["id", "name", "description", "insuranceType"]}
              />
            );
          case 1:
            return (
              <Table
                title={"Insurance"}
                updateHandler={updateHandler}
                deleteHandler={deleteHandler}
                headers={[
                  "Insurance Id",
                  "Insurance Name",
                  "Description",
                  "Insurance Type",
                  "Update/Delete",
                ]}
                udcheck={"id"}
                rows={insurances}
                keys={["id", "name", "description", "insuranceType"]}
              />
            );
          case 2:
            return (
              <AddInsurance
                getData={getInsurances}
                setFunc={setFunc}
                update={update}
                setUpdate={setUpdate}
              />
            );
        }
      case 1:
        switch (func) {
          case 0:
            return (
              <Table
                title={"Customer"}
                headers={[
                  "Customer Id",
                  "Name",
                  "Address",
                  "Mobile No",
                  "Email",
                ]}
                rows={customers}
                keys={["id", "name", "address", "mobileNo", "emailAddress"]}
              />
            );
          case 1:
            return (
              <Table
                title={"Customer"}
                updateHandler={updateHandler}
                deleteHandler={deleteHandler}
                headers={[
                  "Customer Id",
                  "Name",
                  "Address",
                  "Mobile No",
                  "Email",
                  "Update/Delete",
                ]}
                udcheck={"id"}
                rows={customers}
                keys={["id", "name", "address", "mobileNo", "emailAddress"]}
              />
            );
          case 2:
            return (
              <AddCustomer
                getData={getCustomers}
                setFunc={setFunc}
                update={update}
                setUpdate={setUpdate}
              />
            );
        }
      case 2:
        switch (func) {
          case 0:
            return (
              <Table
                title={"Company"}
                headers={[
                  "Company Id",
                  "Name",
                  "Address",
                  "Mobile No",
                  "Email",
                  "Net Worth",
                ]}
                rows={companies}
                keys={[
                  "id",
                  "name",
                  "address",
                  "mobileNo",
                  "emailAddress",
                  "netWorth",
                ]}
              />
            );
          case 1:
            return (
              <Table
                title={"Company"}
                updateHandler={updateHandler}
                deleteHandler={deleteHandler}
                headers={[
                  "Company Id",
                  "Name",
                  "Address",
                  "Mobile No",
                  "Email",
                  "Net Worth",
                  "Update/Delete",
                ]}
                udcheck={"id"}
                rows={companies}
                keys={[
                  "id",
                  "name",
                  "address",
                  "mobileNo",
                  "emailAddress",
                  "netWorth",
                ]}
              />
            );
          case 2:
            return (
              <AddCompany
                getData={getCompanies}
                setFunc={setFunc}
                update={update}
                setUpdate={setUpdate}
              />
            );
        }
      case 3:
        switch (func) {
          case 0:
            return (
              <Table
                title={"Insurances Provided By Companies"}
                headers={["Company Id", "Insurance Id"]}
                rows={provided}
                keys={["companyId", "insuranceId"]}
              />
            );
          case 1:
            return (
              <Table
                title={"Insurances Provided By Companies"}
                updateHandler={updateHandler}
                deleteHandler={deleteHandler}
                headers={["Company Id", "Insurance Id", "Update/Delete"]}
                udcheck={"id"}
                rows={provided}
                keys={["companyId", "insuranceId"]}
              />
            );
          case 2:
            return (
              <AddProvided
                getData={getInsurancesProvided}
                setFunc={setFunc}
                update={update}
                setUpdate={setUpdate}
              />
            );
        }
      case 4:
        switch (func) {
          case 0:
            return (
              <Table
                title={"Insurances Taken By Customers"}
                headers={[
                  "Customer Id",
                  "Insurance Id",
                  "Term Taken",
                  "Price Per Month",
                ]}
                rows={taken}
                keys={[
                  "customerId",
                  "insuranceId",
                  "termTaken",
                  "pricePerMonth",
                ]}
              />
            );
          case 1:
            return (
              <Table
                title={"Insurances Taken By Customers"}
                updateHandler={updateHandler}
                deleteHandler={deleteHandler}
                headers={[
                  "Customer Id",
                  "Insurance Id",
                  "Term Taken",
                  "Price Per Month",
                  "Update/Delete",
                ]}
                udcheck={"id"}
                rows={taken}
                keys={[
                  "customerId",
                  "insuranceId",
                  "termTaken",
                  "pricePerMonth",
                ]}
              />
            );
          case 2:
            return (
              <AddTaken
                getData={getInsurancesTaken}
                setFunc={setFunc}
                update={update}
                setUpdate={setUpdate}
              />
            );
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

        <div
          style={{ height: "85vh" }}
          className={"w-full justify-center" + (func == 2 ? " flex" : " ")}
        >
          {getContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
