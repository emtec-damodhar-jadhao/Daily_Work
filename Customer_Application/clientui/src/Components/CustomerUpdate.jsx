import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom';

function CustomerUpdate() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <h4 className='mt-5'>Update Customer Data</h4><hr/>
      <form className='row g-3 border m-5 p-3'>     
          <div class="col-md-8">           
            <input type="text" class="form-control" id="CID" placeholder='Enter Customer Code' />
          </div>
          
          <div className='col-md-2' > 
            <Link className="btn btn-warning" to="/Secondupdate">Next</Link>          
                     
          </div>

      </form>
    </div>
    </>
  )
}

export default CustomerUpdate