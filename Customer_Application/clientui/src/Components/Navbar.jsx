import React from 'react';
import { NavLink} from 'react-router-dom';

function Navbar() {    
  return (
    <>
     {/* navbar start */}
     <section className="container-fluid m-1">
        <header className="d-flex justify-content-center py-3 bg-warning ">
          <ul className="nav nav-pills">
            <li className="nav-item">             
              <NavLink to="/"  className="nav-link text-dark">
                All Customer
              </NavLink>             
            </li>
            <li className="nav-item">
              <NavLink to="/AddNewCustomer" className="nav-link text-dark">
                New
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/UpdateCustomer" className="nav-link text-dark">
                Update
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/SearchCustomer" className="nav-link text-dark">
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/form" className="nav-link text-dark">
                Form
              </NavLink>
            </li>
          </ul>
        </header>
      </section>
      {/* Navbar End */}    
    </>
  )
}

export default Navbar