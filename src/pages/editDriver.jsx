import React from 'react'
import "./editDriver.css"


 function EditDriver() {
  return (
    <div class="reg">

        <h5>driver details</h5>


    <div className='flex'>
      <div>
        <label for="" >  DriverID:</label>
      </div>
      <div className='id'>
        <input class="input1"  className='form-control' type="text" placeholder="   driver ID   "/>
        </div>
    </div>

    <div className='flex'>
      <div>
        <label for="" >  First Name:</label>
      </div>
      <div className='fname'>
        <input class="input1" className='form-control' type="text" placeholder="       Enter your first name here"/>
        </div>
    </div>
   
    <div className='flex'>
      <div>
        <label for="" >  Last Name:</label>
      </div>
      <div className='lname'>
        <input class="input1" className='form-control' type="text" placeholder="       Enter your last name here"/>
        </div>
    </div>

   

    <div className='flex'>
      <div>
        <label for="" >  Mobile Number:</label>
      </div>
      <div className='mobile'>
        <input class="input1" className='form-control' type="text" placeholder="       Enter your mobile number here"/>
        </div>
    </div>

 

    <div className='flex'>
      <div>
        <label for="" >  password:</label>
      </div>
      <div className='password'>
        <input class="input1" className='form-control' type="text" placeholder="       Enter your password here"/>
        </div>
    </div>



    <div className='flex'>
      <div>
        <label for="" >  Confirm password:</label>
      </div>
      <div>
        <input class="input1" className='form-control' type="text" placeholder="       Enter your confirmation password here"/>
        </div>
    </div>
    
  {/* <br/> */}

    <button type="button" class="btn btn-primary">CANCEL</button>
  <a type="button" class="btn btn-primary">SAVE</a>

</div>




  )
}



export default EditDriver
