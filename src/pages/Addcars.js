import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
    <form onSubmit={handleSubmit}>


      


  <div className='flex'>
    <div>
      <label for="" >  Car Type:</label>
    </div>
    <div className='password'>
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

  <button type="button" class="btn btn-primary">CANCEL</button>
<button  type="submit" class="btn btn-primary">SAVE</button>

    </form>
  

</div>


  )
}

export default Addcars
