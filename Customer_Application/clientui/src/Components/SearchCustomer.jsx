import {
  useGetByIdQuery,
  useUpdateCustomerMutation,
} from "../redux/Features/Post";
import { useState } from "react";
import Navbar from "./Navbar";
import Spinner from "./Spinner";

function SearchCustomer() {
  const [id, SetId] = useState(0);
  const [newObj, setnewObj] = useState({});
  // seach Code
  const { data, isError, isLoading, isSuccess } = useGetByIdQuery(id);
  const [didFind, SetDidFind] = useState(false);
  const onchange = (e) => {
    if (e.target.value !== "") {
      SetDidFind(false);
      SetId(e.target.value);
    } else {
      SetId(0);
    }
  };

  let Search = () => {
    if (id == 0) {
      alert("Enter valid id");
    }
    setnewObj(data[0]);
    console.log(data)
    if (data.length !== 0) {
      SetDidFind(true);
    }
  };
  //update data code
  let [NewData, SetNewData] = useState({
    c_name: "",
    s_name: "",
  });

  let onChangeHandle = (e) => {
    SetNewData({ ...NewData, [e.target.name]: e.target.value });
  };
  const [UpdateData] = useUpdateCustomerMutation();

  return (
    <>
      <Navbar />
      {/* SerachByiDCode */}
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
      {/* Update Code */}
      {isLoading && <Spinner/>}
      {isError && <h4>Error is found {isError}</h4>}

      {isSuccess && didFind && (
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
                      onChange={(e) => onChangeHandle(e)}
                      defaultValue={val.id}
                      type="number"
                      className="form-control"
                      id="name"
                      disabled
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="Code" className="form-label">
                      Customer Code
                    </label>
                    <input
                      defaultValue={val.customerCode}
                      onChange={(e) => onChangeHandle(e)}
                      type="text"
                      name="customerCode"
                      className="form-control"
                      id="Code"
                      placeholder="Enter Customer Code"
                      disabled
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      name="name"
                      defaultValue={val.name}
                      onChange={(e) => onChangeHandle(e)}
                      type="text"
                      className="form-control"
                      id="name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="PostalCode" className="form-label">
                      Postal Code
                    </label>
                    <input
                      name="postalCode"
                      type="number"
                      onChange={(e) => onChangeHandle(e)}
                      defaultValue={val.postalCode}
                      className="form-control"
                      id="postalCode"
                    />
                  </div>
                  {/* <div className="col-md-4">
                    <label htmlFor="inputCity" className="form-label">
                      City ID
                    </label>
                    <input
                      name="cityID"
                      type="number"
                      onChange={(e) => onChangeHandle(e)}
                      defaultValue={val.cityID}
                      className="form-control"
                      id="inputCity"
                    />
                  </div> */}

                  <div className="col-md-4">
                    <label htmlFor="landmark" className="form-label">
                      Landmark
                    </label>
                    <input
                      onChange={(e) => onChangeHandle(e)}
                      defaultValue={val.landmark}
                      name="landmark"
                      type="text"
                      className="form-control"
                      id="landmark"                     
                    />
                  </div>
                  <div className="col-8">
                    <label htmlFor="inputAddress" className="form-label">
                      Address
                    </label>
                    <input
                      onChange={(e) => onChangeHandle(e)}
                      defaultValue={val.address}
                      name="address"
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="Enter Your Address"
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"

                      onClick={() => {
                        let temp = Object.assign({}, newObj, NewData);
                        UpdateData(temp);
                        //console.log("temp data", JSON.stringify(temp));
                        //console.log(NewData);
                        
                      }}
                      className="btn btn-success">
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
