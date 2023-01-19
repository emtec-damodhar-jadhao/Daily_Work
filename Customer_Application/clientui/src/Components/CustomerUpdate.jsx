import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useUpdateCustomerMutation } from "../redux/Features/Post";

function CustomerUpdate() {
  let [UpdateHide, setUpdateHide] = useState(true);
  let [NewCustomer, SetNewCustomer] = useState({
    c_name: "",
    s_name: "",
  });
  const [UpdateData, result] = useUpdateCustomerMutation();
  let onChangeHandle = (e) => {
    SetNewCustomer({ ...NewCustomer, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* navbar start */}
      <section className="container-fluid m-1">
        <header className="d-flex justify-content-center py-3 bg-warning ">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">
                All
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/AddNewCustomer" className="nav-link text-dark">
                New
              </Link>
            </li>
            <li className="nav-item" style={{ borderBottom: "2px solid red" }}>
              <Link to="/UpdateCustomer" className="nav-link text-dark">
                Update
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/SearchCustomer" className="nav-link text-dark">
                Search
              </Link>
            </li>
          </ul>
        </header>
      </section>
      {/* Navbar End */}
      {UpdateHide && (
        <section className="container">
          <form className="row g-3 border m-5 p-4">
            <h4 className="bg-success  p-2 ">Update Customer Data</h4>
            <hr />
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                ID
              </label>
              <input
                name="Id"
                onChange={onChangeHandle}
                type="number"
                className="form-control"
                id="name"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                name="Name"
                onChange={onChangeHandle}
                type="text"
                className="form-control"
                id="name"
              />
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
              <input
                name="PostalCode"
                type="number"
                onChange={onChangeHandle}
                className="form-control"
                id="PostalCode"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputCity" className="form-label">
                City_Id
              </label>
              <input
                name="CityId"
                type="number"
                onChange={onChangeHandle}
                className="form-control"
                id="inputCity"
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="State" className="form-label">
                Landmark
              </label>
              <input
                onChange={onChangeHandle}
                name="landmark"
                type="text"
                className="form-control"
                id="State"
              />
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
              <button
                onClick={() => {
                  UpdateData(NewCustomer);
                  setUpdateHide(false);
                }}
                type="button"
                className="btn btn-success"
              >
                Update
              </button>
            </div>
          </form>
        </section>
      )}
      {UpdateHide || (
        <div>
          <h4 className="alert alert-success text-Center m-5 container ">
            {" "}
            Customer data Updated successfully !
          </h4>
        </div>
      )}
    </>
  );
}

export default CustomerUpdate;
