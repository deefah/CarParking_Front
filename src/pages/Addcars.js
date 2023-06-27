import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './addcar.css'

 function Addcars() {
  
    const [inputCarType,setCarType]=useState(['']);
    const [inputCarNumber,setcarNumber]=useState(['']);
    const navigate = useNavigate();
    const handleSubmit =(event)=>{
        event.preventDefault();
        const requestdata={
             
                carType:inputCarType,
                carNumber:inputCarNumber
        };

        axios.post("http://localhost:8080/car/insert",requestdata).then(response=>{
                console.log(response.data);
                navigate("/action");
        }).catch(error=>{
            console.error(error);
        })
    }
  return (


    <div>
     <div class="add">
    <form onSubmit={handleSubmit}>


      


  <div className='flex'>
    <div>
      <label for="" >  Car Type:</label>
    </div>
    <div className='password1'>
      <input class="input1" value={inputCarType} onChange={event=>setCarType(event.target.value)} className='form-control' type="text" placeholder="       Enter your Car Type here"/>
      </div>
  </div>

  <div className='flex'>
    <div>
      <label for="" >  Car Number:</label>
    </div>
    <div className='password'>
      <input class="input1" value={inputCarNumber} onChange={event=>setcarNumber(event.target.value)} className='form-control' type="text" placeholder="       Enter your Car Number here"/>
      </div>
  </div>
  <br/>
  <br/>

  <Link to={'/action'} type="button" class="btn btn-primary">CANCEL</Link>
<button  type="submit" class="btn btn-primary">SAVE</button>

    </form>
  
</div>
</div>


  )
}

export default Addcars
