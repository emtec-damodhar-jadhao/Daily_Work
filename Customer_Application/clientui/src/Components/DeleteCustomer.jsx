import React from "react";
import Navbar from "./Navbar";

function DeleteCustomer() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h4 className="bg-info p-1 m-4">All Customers</h4>
        {/* table Start */}
        <section className="m-5">
          <table class="table  table-hour">
            <thead>
              <tr className="table-dark">
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Customer Code</th>
                <th scope="col">State</th>
                <th scope="col">City</th>
                <th scope="col">Postal Code</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Dj</td>
                <td>Mit123</td>
                <td>Maharashtra</td>
                <td>Pune</td>
                <td>443308</td>
                <td>Sinhgad College</td>
                <td><button className="btn btn-danger">Delete</button></td>
              </tr>
            </tbody>
          </table>
        </section>
        {/* table End */}
      </div>
    </>
  );
}

export default DeleteCustomer;
