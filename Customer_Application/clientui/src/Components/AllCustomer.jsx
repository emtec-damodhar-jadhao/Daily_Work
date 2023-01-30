import React from "react";
import {
  useGetAllPostQuery,
  useDeleteCustomerMutation,
} from "../redux/Features/Post";
import Navbar from "./Navbar";

function AllCustomer() {
  const responseInfo = useGetAllPostQuery();
  const [DeleteCustomer] = useDeleteCustomerMutation();
  return (
    <>
      <Navbar />
      {responseInfo.isLoading && <h4>Loading data....</h4>}
      {responseInfo.isError && <h4>Error is found </h4>}
      {responseInfo.isSuccess && (
        <div className="container">
          <h4 className="bg-success p-1 m-4">Available Customers</h4>
          {/* table Start */}
          <section className="m-5">
            <table className="table border table-responsive table-hour">
              <thead>
                <tr className="table-dark">
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Customer Code</th>
                  <th scope="col">Postal Code</th>
                  <th scope="col">Landmark</th>
                  <th scope="col">City</th>
                  <th scope="col">State</th>
                  <th scope="col">Address</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {responseInfo.data.map((val, index) => {
                  return (
                    <tr className="p-2" key={index}>
                      <td>{val.id}</td>
                      <td>{val.name}</td>
                      <td>{val.customerCode}</td>
                      <td>{val.postalCode}</td>
                      <td>{val.landmark}</td>
                      <td>{val.c_name}</td>
                      <td>{val.s_name}</td>
                      <td>{val.address}</td>
                      <td>
                        <form action="">
                          <button
                            type="submit"
                            className="btn btn-danger"
                            onClick={() => {
                              DeleteCustomer(val.id);
                            }}
                          >
                            Delete
                          </button>
                        </form>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
          {/* table End */}
        </div>
      )}
    </>
  );
}

export default AllCustomer;
