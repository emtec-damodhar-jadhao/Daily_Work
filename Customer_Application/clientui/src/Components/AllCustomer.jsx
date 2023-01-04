import React from "react";
import axios  from "axios";
import { useState,useEffect } from "react";
import {Link}  from 'react-router-dom';

function AllCustomer() {
  const baseURL = "https://localhost:7234/api/Customer/getallcustomer";
  const deleteurl="https://localhost:7234/api/Customer/deletecustomer";

  
    const [getdata, setGetdata] = useState([]);
  
    useEffect(() => {
      axios.get(baseURL).then((response) => {
        console.log(response.data);
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
      {/* navbar start */}
      <section className='container-fluid m-1'>
   <header className="d-flex justify-content-center py-3 bg-warning ">
      <ul className="nav nav-pills">
        <li className="nav-item" style={{borderBottom:"2px solid red", }} ><Link to="/" className="nav-link text-dark">All</Link></li>
       <li className="nav-item" ><Link to="/AddNewCustomer" className="nav-link text-dark">New</Link></li>
        <li className="nav-item"><Link to="/UpdateCustomer" className="nav-link text-dark">Update</Link></li>
      </ul>
    </header>
   </section>
    {/* Navbar End */}
     
      <div className="container">
        <h4 className="bg-success p-1 m-4">Available Customers</h4>
        {/* table Start */}
        <section className="m-5">
          <table className="table border table-responsive table-hour">
            <thead>
              <tr className="table-dark">
              <th scope="col">Sr.No</th>
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
                    <tr className="p-2" key={index}>
                      <th scope="row" >{index+1}</th>
                    <td>{val.name}</td>
                    <td>{val.customerCode}</td>
                    <td>{val.postalCode}</td>
                    <td>{val.landmark}</td>
                    <td>{val.c_name}</td>
                    <td>{val.s_name}</td>
                    <td>{val.address}</td>
                    <td>
                      <form action="">
                      <button type="submit" onClick={deletedata} className="btn  btn-outline-danger" id={val.id}>Delete</button>
                   
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
