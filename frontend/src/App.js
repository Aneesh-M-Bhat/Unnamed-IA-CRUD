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
  const [func, setFunc] = useState(0);
  const [update, setUpdate] = useState({});
  const [url, setUrl] = useState("insurance");
  const [tableHeader, setTableHeader] = useState([]);
  const [tableKey, setTableKey] = useState([]);
  const [data, setData] = useState([]);

  const tableHeaders = {
    insurance: [
      "Insurance Id",
      "Insurance Name",
      "Description",
      "Insurance Type",
    ],
    customer: ["Customer Id", "Name", "Address", "Mobile No", "Email"],
    company: [
      "Company Id",
      "Name",
      "Address",
      "Mobile No",
      "Email",
      "Net Worth",
    ],
    provided: ["Company Id", "Insurance Id"],
    taken: ["Customer Id", "Insurance Id", "Term Taken", "Price Per Month"],
  };
  const tableKeys = {
    insurance: ["id", "name", "description", "insuranceType"],
    customer: ["id", "name", "address", "mobileNo", "emailAddress"],
    company: ["id", "name", "address", "mobileNo", "emailAddress", "netWorth"],
    provided: ["companyId", "insuranceId"],
    taken: ["customerId", "insuranceId", "termTaken", "pricePerMonth"],
  };

  const navs = {
    insurance: "Insurance",
    customer: "Customer",
    company: "Company",
    provided: "Insurances Provided By Companies",
    taken: "Insurances Taken By Customers",
  };

  const urls = ["insurance", "customer", "company", "provided", "taken"];

  useEffect(() => {
    getData(urls[0]);
  }, []);

  const updateHandler = (data) => {
    setUpdate(data);
    setFunc(2);
  };

  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:5000/${url}/${id}`);
    getData();
  };

  const getData = async (url = url) => {
    const response = await axios.get(`http://localhost:5000/${url}`);
    setData(response.data);
  };

  const getContent = () => {
    if (func != 2) {
      return (
        <Table
          title={navs[url]}
          updateHandler={updateHandler}
          deleteHandler={deleteHandler}
          headers={tableHeader}
          udcheck={"id"}
          func={func}
          rows={data}
          keys={tableKey}
        />
      );
    }
    switch (url) {
      case "insurance":
        return (
          <AddInsurance
            getData={getData}
            setFunc={setFunc}
            update={update}
            setUpdate={setUpdate}
          />
        );

      case "customer":
        return (
          <AddCustomer
            getData={getData}
            setFunc={setFunc}
            update={update}
            setUpdate={setUpdate}
          />
        );

      case "company":
        return (
          <AddCompany
            getData={getData}
            setFunc={setFunc}
            update={update}
            setUpdate={setUpdate}
          />
        );

      case "provided":
        return (
          <AddProvided
            getData={getData}
            setFunc={setFunc}
            update={update}
            setUpdate={setUpdate}
          />
        );

      case "taken":
        return (
          <AddTaken
            getData={getData}
            setFunc={setFunc}
            update={update}
            setUpdate={setUpdate}
          />
        );
    }
  };

  const navClickHandler = (i) => {
    setUrl(urls[i]);
    setFunc(0);
    getData(urls[i]);
    setTableHeader(tableHeaders[urls[i]]);
    setTableKey(tableKeys[urls[i]]);
  };

  return (
    <div className=" bg-blue-300 w-screen h-screen">
      <div
        className="bg-blue-900 text-white flex flex-row p-2"
        style={{ height: "7vh" }}
      >
        <div className=" text-xl ml-1 mr-auto">Insurance Management System</div>
        {urls.map((item, index) => (
          <div className="ml-3 py-1">
            <button onClick={() => navClickHandler(index)}>{navs[item]}</button>
          </div>
        ))}
      </div>
      <div className="w-full bg-blue-500" style={{ height: "93vh" }}>
        <Buttons
          setFunc={setFunc}
          title={navs[url]}
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
