import { useGetByIdQuery, useUpdateCustomerMutation } from "../redux/Features/Post";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function SearchCustomer() {
  const [id, SetId] = useState(0);
  const[didFind, SetDidFind]  =useState(false);

  let [NewCustomer, SetNewCustomer] = useState({
    c_name: "",
    s_name: "",
  });

  let onChangeHandle = (e) => {
    SetNewCustomer({ ...NewCustomer, [e.target.name]: e.target.value });
  };

  const onchange = (e) => {
    if (e.target.value !== "") {
      SetDidFind(false)
      SetId(e.target.value);
    } else {
      SetId(0);
    }
  };
  let Search = () => {    
    if (id == 0) {
      alert("Enter valid id");
    }
    console.log(data);
    if(data.length !== 0){
      SetDidFind(true)
    }
    };   
  const { data, isError, isLoading, isSuccess } = useGetByIdQuery(id);
  const [UpdateData, result] = useUpdateCustomerMutation();

  return (
    <>
    <Navbar/>
  
      <div className="container m-5 d-flex justify-content-center">
            <div className="col-md-4">
            <input
              placeholder="Enter id"
              onChange={onchange}
              type="number"
              className="form-control"
              id="id"
              required
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-success" onClick={Search}>
              search
            </button>
          </div>
      </div>
      {isLoading && <h4>Loading Data</h4>}
      {isError && <h4>Error is found {isError}</h4>}
      {(isSuccess && didFind) && (
        <div>
          
          {data.map((val, index) => {             
              return (
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
               defaultValue={val.id}
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
                defaultValue={val.name}
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
                defaultValue={val.customerCode}
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
                defaultValue={val.postalCode}
                className="form-control"
                id="PostalCode"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputCity" className="form-label">
                City ID
              </label>
              <input
                name="CityId"
                type="number"
                onChange={onChangeHandle}
                defaultValue={val.cityID}
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
              defaultValue={val.landmark}
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
               defaultValue={val.address}
                name="Address"
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Enter Your Address"
              />
            </div>
            <div className="col-12">
              <button
              type="button"
               onClick={() => {
                UpdateData(NewCustomer);
                console.log(NewCustomer);
              }}
              className="btn btn-success"
               >
                Update Data
              </button>
            </div>
          </form>
        </section>             
              );
            })}
        
         </div>
      )}
    </>
  );
}
export default SearchCustomer;
