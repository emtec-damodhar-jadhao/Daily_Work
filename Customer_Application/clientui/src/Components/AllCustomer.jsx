import React from "react";
import Navbar from "./Navbar";
import axios  from "axios";
import { useState,useEffect } from "react";

function AllCustomer() {
  const baseURL = "https://localhost:7234/api/CustomerData/getallcustomer";
  const deleteurl="https://localhost:7234/api/CustomerData/deletecustomer";
    const [getdata, setGetdata] = useState([]);
  
    useEffect(() => {
      axios.get(baseURL).then((response) => {
        setGetdata(response.data);
      });      
    }, []);

    let deletedata=(e)=>{
      console.log(e.target.id);
      axios.delete(`${deleteurl}?id=${e.target.id}`);
      alert("Data Deleted Successfully")
    }

  return (
    <>
      <Navbar />
      <div className="container">
        <h4 className="bg-success p-1 m-4">Available Customers</h4>
        {/* table Start */}
        <section className="m-5">
          <table className="table border  table-hour">
            <thead>
              <tr className="table-dark">
              <th scope="col">Sr.No</th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Customer Code</th>
                <th scope="col">Postal Code</th>
                <th scope="col">Landmark</th>
                <th scope="col">City</th>
                <th scope="col">State</th>                
                <th scope="col">Address</th>
                <th scope="col">Action</th>             
              </tr>
            </thead>
            <tbody>
              {
                getdata.map((val,index)=>{
                  return(
                    <tr key={index}>
                      <th scope="row" >{index+1}</th>
                    <th scope="row" >{val.id}</th>
                    <td>{val.Name}</td>
                    <td>{val.customercode}</td>
                    <td>{val.postalcode}</td>
                    <td>{val.landmark}</td>
                    <td>{val.c_name}</td>
                    <td>{val.s_name}</td>
                    <td>{val.address}</td>
                    <td className="d-flex">
                      <form action="">
                      <button type="submit" onClick={deletedata} className="btn ms-1 btn-danger" id={val.id}>Delete</button>
                   
                      </form>
                     </td>
                   
                  </tr>
                  )                 
                })
              }
            
            </tbody>
          </table>
        </section>
        {/* table End */}
      </div>
    </>
  );
}

export default AllCustomer;
