import React, { useEffect, useState } from 'react'
import "./register.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Register() {

  const [inputfname,setfirstName]=useState(['']);
  const[inputlname,setlastName]=useState(['']);
  const[inputmobile,setmobileNo]=useState([]);

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(()=>{

    fetch("http://localhost:8080/car/allcars")
    .then(response =>response.json())
    .then(data =>{
      console.log(data);
      setOptions(data)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, []);
const handleOptionChange = event => {
  setSelectedOption(event.target.value);
};



  const navigate = useNavigate();
   
  const handleSubmit =(event)=>{
    event.preventDefault();
    const plateNo ={
      plateNo:selectedOption
    };
      const request={
        firstName:inputfname,
        lastName:inputlname,
        mobileNo:inputmobile,
        car:plateNo
      };
      axios.post("http://localhost:8080/driver/ingiza",request).then(response=>{

      console.log(response.data);
      navigate("/actiondriver");
      }).catch(error=>{
        console.error(error);
      })
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>

<div class="flex">

            {/* <div class="quick">
               <h3> QUICK LINKS</h3>
               <br/> 

               <a href="#" className='link'>Home Page</a> <br/> <br/> <br/> <br/>
               <Link to={"/"}  className='link' >Login</Link>
            </div> */}

            
   
             <div class="regregister">

            <h2 >
                Driver details
            </h2>

            <div className='flexreg'>
              <div>
                <label for="" className='lab'>  First Name:</label>
              </div>
              <div className='fname'>
                <input class="input1" value={inputfname} onChange={event=>setfirstName(event.target.value)} className='form-control' type="text" placeholder="       Enter your first name here"/>
                </div>
            </div>
          
            <div className='flexreg'>
              <div>
                <label for="" className='lab'>  Last Name:</label>
              </div>
              <div className='lname'>
                <input class="input1" value={inputlname} onChange={event=>setlastName(event.target.value)} className='form-control' type="text" placeholder="       Enter your last name here"/>
                </div>
            </div>

           

            <div className='flexreg'>
              <div>
                <label className='lab' style={{marginTop:'2rem'}} >  Mobile Number:</label>
              </div>
              <div className='mobile'>
                <input class="input1" value={inputmobile} onChange={event=>setmobileNo(event.target.value)} style={{marginTop:'2rem'}}  className='form-control' type="text" placeholder="       Enter your mobile number here"/>
                </div>
            </div>


            <div className='flexreg'>
              <div>
                <label className='labpas'  style={{marginTop:'4rem'}}>  plateNo:</label>
              </div>
              <div className='password'>
              <select value={selectedOption} onChange={handleOptionChange} className='form-control'>
               <option value="" >Select an option</option>
               {options.map(option => (
              <option  key={option.plateNo} value={option.plateNo} >
            {option.carNumber}
          </option>
        ))}
      </select>
                </div>
            </div>
         

            {/* <div className='flexreg'>
              <div>
                <label className='labpas'  style={{marginTop:'4rem'}}>  password:</label>
              </div>
              <div className='password'>
                <input class="input1" className='form-control' type="text" placeholder="       Enter your password here"/>
                </div>
            </div>

       

            <div className='flexreg'>
              <div>
                <label for="" className='lab'>  Confirm password:</label>
              </div>
              <div>
                <input class="input1" className='form-control' type="text" placeholder="       Enter your confirmation password here"/>
                </div>
            </div>
             */}
          <br/>

            <Link to={"/actiondriver"} type="button" class="btn btn-primary">CANCEL</Link>
          <button type="submit" class="btn btn-primary">SAVE</button>

        </div>
    
</div>
    </form> 


    </div>
  )
}

export default Register
