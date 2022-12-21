import React from 'react'
import Navbar from './Navbar'

function SearchCustomer() {
  return (
   <>
    <Navbar/>
    <div className="container">
    <h4 className='mt-5'>Search Customer</h4><hr/>
      <form className='row g-3 border m-5 p-2'>     
          <div className="col-md-4">           
            <input name="Id" type="text" className="form-control" id="CID" placeholder='Enter Customer Code' />
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