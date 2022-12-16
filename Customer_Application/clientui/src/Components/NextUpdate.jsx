import React from "react";
import Navbar from "./Navbar";

function NextUpdate() {
  return (
    <>
      <Navbar />
      <section className="container">
        <form class="row g-3 border m-5 p-4">
          <h4 className="">Update Customer Data</h4>
          <hr />
          <div class="col-md-6">
            <label for="name" class="form-label">
              Name
            </label>
            <input type="text" class="form-control" id="name" />
          </div>

          <div class="col-md-6">
            <label for="Code" class="form-label">
              Customer Code
            </label>
            <input
              type="text"
              class="form-control"
              id="Code"
              placeholder="Enter Customer Id or Code"
            />
          </div>

          <div class="col-md-4">
            <label for="State" class="form-label">
              State
            </label>
            <input type="text" class="form-control" id="State" />
          </div>

          <div class="col-md-4">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>

          <div class="col-md-4">
            <label for="PostalCode" class="form-label">
              Postal Code
            </label>
            <input type="text" class="form-control" id="PostalCode" />
          </div>

          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Enter Your Address"
            />
          </div>

          <div class="col-12">
            <button type="button" class="btn btn-success">
              Update Now
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default NextUpdate;
