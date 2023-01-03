import React from 'react'
import Navbar from './Navbar'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function CustomerUpdate() {
  let updateUrl = "https://localhost:7234/api/Customer/updatecustomer";

  let navigate = useNavigate();

  let [newcustomer, setnewcustomer] = useState({
   
    "c_name": "",
    "s_name": "",
   
  });
  // let [CustomerID, setCustomerID] =useState(0);

  let onChangeHandle = (e) => {
    setnewcustomer({ ...newcustomer, [e.target.name]: e.target.value });
  };  

  let UpdateData = () => {
    console.log(newcustomer);
    axios.put(updateUrl, newcustomer);
    alert("Data Updated Successfully ")
    navigate("/GetAllCustomers");
  };

  return (
    <>
    <Navbar/>
    <section className="container">
        <form className="row g-3 border m-5 p-4">
          <h4 className="">Update Customer Data</h4>
          <hr />
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              ID
            </label>
            <input name="Id" onChange={onChangeHandle} type="number" className="form-control" id="name" />
          </div>
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input name="Name" onChange={onChangeHandle} type="text" className="form-control" id="name" />
          </div>
          <div className="col-md-4">
            <label htmlFor="Code" className="form-label">
              Customer Code
            </label>
            <input
              onChange={onChangeHandle}
              type="text"
              name="CustomerCode"
              className="form-control"
              id="Code"
              placeholder="Enter Customer Code"
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="PostalCode" className="form-label">
              Postal Code
            </label>
            <input name="PostalCode" type="number" onChange={onChangeHandle}  className="form-control" id="PostalCode" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label">
              City_Id
            </label>
            <input name="CityId" type="number" onChange={onChangeHandle} className="form-control" id="inputCity" />
          </div>

          <div className="col-md-4">
            <label htmlFor="State" className="form-label">
              Landmark
            </label>
            <input onChange={onChangeHandle} name="landmark" type="text" className="form-control" id="State" />
          </div>
          <div className="col-8">
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
            <button onClick={UpdateData} type="button" className="btn btn-success">
              Update
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default CustomerUpdate