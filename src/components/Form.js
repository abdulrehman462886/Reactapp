import React from "react";


export default function Form(props) {

  return (
    <div className="container">
      <div className="container my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          value={props.inputdata.name}
          onChange={props.changehandle}
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
          value={props.inputdata.email}
          onChange={props.changehandle}
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
          value={props.inputdata.dob}
          onChange={props.changehandle}
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
          value={props.inputdata.address}
          onChange={props.changehandle}
          type="text"
          name="address"
          autoComplete="off"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="XYZ Block,Lahore"
        />
      </div>props.
      <button
        disabled={
          props.inputdata.name.length === 0 ||
          props.inputdata.email.length === 0 ||
          props.inputdata.dob.length === 0 ||
          props.inputdata.address.length === 0
        }
        type="button"
        onClick={props.boolean ? props.updateData : props.addrecordhandle}
        className="container btn btn-success my-3"
      >
        {props.boolean ? `Update Record` : `Add Record`}
      </button>
    </div>
  );
}
