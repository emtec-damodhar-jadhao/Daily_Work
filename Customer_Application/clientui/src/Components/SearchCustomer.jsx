import React from 'react'
import Navbar from './Navbar'

function SearchCustomer() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <h4 className='mt-5'>Search Customer</h4><hr/>
      <form className='row g-3 border m-5 p-2'>     
          <div class="col-md-4">           
            <input type="text" class="form-control" id="CID" placeholder='Enter Customer Code' />
          </div>
          <div class="col-md-4">           
            <input type="text" class="form-control" id="Name" placeholder='Enter Customer Name' />
          </div>
          <div className='col-md-2' >           
            <button className="btn btn-danger"> Search</button>           
          </div>

      </form>
    </div>
    </>
  )
}

export default SearchCustomer