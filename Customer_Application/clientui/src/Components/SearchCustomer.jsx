import { useGetByIdQuery } from "../redux/Features/Post";
import { useState } from "react";
import { Link } from "react-router-dom";

function SearchCustomer() {
  const [id, SetId] = useState(0);
  const[didFind, SetDidFind]  =useState(false)

  const onchange = (e) => {
    if (e.target.value !== "") {
      SetDidFind(false)
      SetId(e.target.value);
    } else {
      SetId(0);
    }
  };
  let Add = () => {    
    if (id == 0) {
      alert("Enter valid id");
    }
    console.log(data);
    if(data.length !== 0){
      SetDidFind(true)
    }
    };
  const { data, isError, isLoading, isSuccess } = useGetByIdQuery(id);

  return (
    <>
    {/* navbar start */}
    <section className="container-fluid m-1">
        <header className="d-flex justify-content-center py-3 bg-warning ">
          <ul className="nav nav-pills">
            <li className="nav-item" >
              <Link to="/" className="nav-link text-dark">
                All
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/AddNewCustomer" className="nav-link text-dark">
                New
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/UpdateCustomer" className="nav-link text-dark">
                Update
              </Link>
            </li>
            <li className="nav-item" style={{ borderBottom: "2px solid red" }}>
              <Link to="/SearchCustomer" className="nav-link text-dark">
                Search
              </Link>
            </li>
          </ul>
        </header>
      </section>
      {/* Navbar End */}  
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
            <button className="btn btn-success" onClick={Add}>
              search
            </button>
          </div>
      </div>

      {isLoading && <h4>Loading Data</h4>}
      {isError && <h4>Error is found {isError}</h4>}

      {(isSuccess && didFind) && (
        <table className="container table border table-responsive table-hour">
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
            </tr>
          </thead>
          <tbody>
            {data.map((val, index) => {
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
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default SearchCustomer;
