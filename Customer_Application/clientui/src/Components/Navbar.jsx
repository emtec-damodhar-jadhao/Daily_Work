import React from 'react'
import {Link}  from 'react-router-dom';

function Navbar() {
  return (
   <>
   {/* navbar Code Start  */}
  
   <section className='container-fluid m-1'>
   <header className="d-flex justify-content-center py-3 bg-warning ">
      <ul className="nav nav-pills">
        <li className="nav-item"><Link to="/GetAllCustomers" className="nav-link text-dark">All</Link></li>
        <li className="nav-item"><Link to="/AddNewCustomer" className="nav-link text-dark">New</Link></li>
        {/* <li className="nav-item"><Link to="/SearchByID" className="nav-link text-dark">Search</Link></li> */}
        <li className="nav-item"><Link to="/UpdateCustomer" className="nav-link text-dark">Update</Link></li>
      </ul>
    </header>
   </section>
   {/* navbar Code End  */}
   </>
  )
}

export default Navbar