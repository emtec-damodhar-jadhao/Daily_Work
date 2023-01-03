import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddCustomer() {
  let postUrl = "https://localhost:7234/api/Customer/addcustomer";

  let navigate = useNavigate();

  let [NewCustomer, SetNewCustomer] = useState({  
      
      "c_name": "",
      "s_name": "",    
    
  });

  let onChangeHandle = (e) => {
    SetNewCustomer({ ...NewCustomer, [e.target.name]: e.target.value });
  };

  let submit = () => {
    console.log(NewCustomer);
    axios.post(postUrl, NewCustomer);
    alert("Data Added successfully")
    navigate("/GetAllCustomers");
  };

  return (
    <>
      <Navbar />
      <section className="container">
        <form className="row g-3 border m-5 p-4">
          <h4 className="">Add New Customer</h4>
          <hr />
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input name="Name" onChange={onChangeHandle} type="text" className="form-control" id="name" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="Code" className="form-label">
              Customer Code
            </label>
            <input
            required
              onChange={onChangeHandle}
              type="text"
              name="CustomerCode"
              className="form-control"
              id="Code"
              placeholder="Enter Customer Id or Code"
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="PostalCode" className="form-label">
              Postal Code
            </label>
            <input name="PostalCode" type="number" onChange={onChangeHandle}  className="form-control" id="PostalCode" />
          </div>
          <div className="col-md-4">
            <label htmlFor="State" className="form-label">
              Landmark
            </label>
            <input onChange={onChangeHandle} name="landmark" type="text" className="form-control" id="State" />
          </div>

          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label">
              City_Id
            </label>
            <input name="CityID" type="number" onChange={onChangeHandle} className="form-control" id="inputCity" />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              onChange={onChangeHandle}
              name="Address"
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Enter Your Address"
            />
          </div>

          <div className="col-12">
            <button onClick={submit} type="button" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default AddCustomer;
