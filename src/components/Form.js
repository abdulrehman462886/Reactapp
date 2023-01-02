import React, { useState } from "react";

export default function Form() {
  const [inputarr, setInputarr] = useState([]);
  const [boolean, setBoolean] = useState(false)
  const [index, setIndex] = useState([]);
  const [inputdata, setInputdata] = useState({
    name: "",
    email: "",
    dob: "",
    address: "",
  });
  //function to handle changes in input field
  function changehandle(event) {
    setInputdata({ ...inputdata, [event.target.name]: event.target.value });
  }
  //function to add record in array
  let { name, email, dob, address } = inputdata;
  function addrecordhandle() {
    setInputarr([...inputarr, { name, email, dob, address }]);
    //clear the input field again
    setInputdata({ name: "", email: "", dob: "", address: "" });
  }
  //function to remove record from array
  function deleteInput(index) {
    let totalrecords = [...inputarr]
    totalrecords.splice(index,1)
    setInputarr(totalrecords)
  }
  //function to update input fields
  function updateInput(index) {
      let {name, email, dob, address} = inputarr[index]
      setInputdata({name, email, dob, address})
      setBoolean(true)
      setIndex(index)
  }
  //function to splice the previous record from that particular index
  function updateData(){
    let total = [...inputarr]
    total.splice(index,1,{name, email, dob, address})
    setInputarr(total)
    setBoolean(false)
    setInputdata({ name: "", email: "", dob: "", address: "" });
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
        onClick={boolean?updateData:addrecordhandle}
        className="container btn btn-success my-3"
      >
        {boolean?`Update Record`:`Add Record`}
      </button>
      <table className="table my-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
            <th scope="col">Address</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
         {/* Function to map through the input array */}
          {inputarr.map((value, index) => {
            return (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.dob}</td>
                <td>{value.address}</td>
                <td><button type="button" className="btn btn-danger" onClick={()=>{deleteInput(index)}}>Delete</button></td>
                <td><button type="button" className="btn btn-primary" onClick={()=>{updateInput(index)}}>Update</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
