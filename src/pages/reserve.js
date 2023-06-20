import React from 'react'
import "./reserve.css"
import { Link } from 'react-router-dom'

function Reserve() {
  return (
    <div>

<div class="reg">

<h5 >
    Make reservation for car parking space
</h5>

<div className='flex'>
  <div>
    <label for="" >  Plate Number:</label>
  </div>
  <div className='plate'>
    <input class="input1" className='form-control' type="text" placeholder="       Enter your Plate number "/>
    </div>
</div>

<div className='flex'>
  <div>
    <label for="" >  Car Type:</label>
  </div>
  <div className='car'>
    <input class="input1" className='form-control' type="text" placeholder="       Enter  the Car type "/>
    </div>
</div>



<div className='flex'>
  <div>
    <label for="" > Check in Date:</label>
  </div>
  <div className='in'>
    <input class="input1" className='form-control' type="date"/>
    </div>
</div>



<div className='flex'>
  <div>
    <label for="" >  Check out Date:</label>
  </div>
  <div className='out'>
    <input class="input1" className='form-control' type="date" />
    </div>
</div>

<br/>
<Link to={"../edit"} type="button" class="btn btn-primary">SAVE</Link>
<Link to={"/"}  type="button" class="btn btn-outline-dark"> CANCEL</Link>

</div>

    </div>
  )
} 

export default Reserve
