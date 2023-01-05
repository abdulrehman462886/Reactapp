import { useState } from "react";


export default function Form() {
  const [boolean, setBoolean] = useState(false);
  const [inputarr, setInputarr] = useState([]);
  const [index, setIndex] = useState([]);
  const [inputdata, setInputdata] = useState({
    name: "",
    email: "",
    dob: "",
    address: "",
  });
  let { name, email, dob, address } = inputdata;
  function addrecordhandle() {
    setInputarr([...inputarr, { name, email, dob, address }]);
    //clear the input field again
    setInputdata({ name: "", email: "", dob: "", address: "" });
  }
  // function to splice the previous record from that particular index
  function updateData() {
    let total = [...inputarr];
    total.splice(index, 1, { name, email, dob, address });
    setInputarr(total);
    setBoolean(false);
    setInputdata({ name: "", email: "", dob: "", address: "" });
  }
  //function to handle changes in input field
  function changehandle(event) {
    setInputdata({ ...inputdata, [event.target.name]: event.target.value });
  }

  return (
    <div className="container">
      <div className="container my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          value={inputdata.name}
          onChange={changehandle}
          autoComplete="off"
          type="text"
          name="name"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="S.john"
        />
      </div>
      <div className="container my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email
        </label>
        <input
          value={inputdata.email}
          onChange={changehandle}
          type="email"
          name="email"
          autoComplete="off"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="container my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          DOB
        </label>
        <input
          value={inputdata.dob}
          onChange={changehandle}
          type="text"
          autoComplete="off"
          name="dob"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="DD/MM/YYYY"
        />
      </div>
      <div className="container my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Address
        </label>
        <input
          value={inputdata.address}
          onChange={changehandle}
          type="text"
          name="address"
          autoComplete="off"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="XYZ Block,Lahore"
        />
      </div>
      <button
        disabled={
          inputdata.name.length === 0 ||
          inputdata.email.length === 0 ||
          inputdata.dob.length === 0 ||
          inputdata.address.length === 0
        }
        type="button"
        onClick={boolean ? updateData : addrecordhandle}
        className="container btn btn-success my-3"
      >
        {boolean ? `Update Record` : `Add Record`}
      </button>
    </div>
  );
}
