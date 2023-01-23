import React from "react";
import { useState } from "react";
import { useAddNewCustomerMutation } from "../redux/Features/Post";
import { useUpdateCustomerByCodeMutation } from "../redux/Features/Post";

import Navbar from "./Navbar";
import { useForm } from "react-hook-form";

function AddCustomer(props) {
 
  let template = {
    Title1: "Add New Customer",
    Title2: "Update Customer",
    fields: [
      {
        title: "Name",
        type: "text",
        name: "Name",
      },
      {
        title: "CustomerCode",
        type: "text",
        name: "CustomerCode",
      },
      {
        title: "PostalCode",
        type: "number",
        name: "PostalCode",
      },
      {
        title: "Landmark",
        type: "text",
        name: "landmark",
      },
      {
        title: "CityId",
        type: "number",
        name: "CityID",
      },
      {
        title: "Address",
        type: "text",
        name: "Address",
      },
    ],
  };

  
//  console.log(props)
  
  let { register, handleSubmit } = useForm();
  let { Title1,Title2, fields } = template;
  let [HideData, SetHideData] = useState(true);
  const [AddNewOne, result] = useAddNewCustomerMutation();
  const [UpdateData, res] = useUpdateCustomerByCodeMutation();
  
  let [NewCustomer, SetNewCustomer] = useState({
    c_name: "",
    s_name: "",
  });
  let onChangeHandle = (e) => {
    SetNewCustomer({ ...NewCustomer, [e.target.name]: e.target.value });
  };
 let Title;
  if(props.page === "AddCustomer"){
     Title = Title1;
  }else{
    Title=Title2;
  }
  const renderFields = (fields) => {
    return fields.map((fields) => {
      let { title, type, name } = fields;
      return (
        <div className="col-md-6 row g-3" key={name}>
          <div className="col-md-12">
            <label htmlFor={name} className="form-label">
              {title}
            </label>
            <input
              name={name}
              type={type}
              className="form-control"
              onChange={onChangeHandle}
              id={name}
              required
              {...register(name)}
            />
          </div>
        </div>
      );
    });
  };

  function onSubmit(values) {
    //object merging
    let temp = {
      ...NewCustomer,
      ...values
  };

    if(props.page === "AddCustomer"){
      AddNewOne(temp);
      SetHideData(false);
      Title="Add New Customer"
    }else{
      UpdateData(temp);
      Title="Update Customer"
    }    
  }


  return (
    <>
      <Navbar />

      {HideData && (
        <div className="container m-5">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
              <h4 className="bg-success m-5 p-2 ">{Title}</h4>           
            <hr />
            <div className="col-md-12 row g-4  p-5">{renderFields(fields)}</div>
            <button
              type="submit"
              className="btn btn-success"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      {HideData || (
        <div>
          <h4 className="alert alert-success text-Center m-5 container ">
            {" "}
            Customer Added successfully !
          </h4>
        </div>
      )}
    </>
  );
}

export default AddCustomer;
