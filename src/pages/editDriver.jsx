import React, { useEffect, useState } from 'react'
import "./editDriver.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';



 function EditDriver() {

  const navigate = useNavigate();
  const {driverID} = useParams();
  const [data, setData] = useState({});
  useEffect(()=>{
    const fetchdataById = async()=>{
      try{
        const response = await axios.get(`http://localhost:8080/driver/byID/${driverID}`);
        setData(response.data);
      }catch(error){
        console.log(error);
      }
    };
    fetchdataById();
  },[driverID]);

  function handlerSubmit(event){
    event.preventDefault();
    axios.put(`http://localhost:8080/driver/badili/${driverID}`, data);
    navigate("/actiondriver");
  }


  return (
    <div>

    <div class="flex">
                {/* <div class="quick">
                   <h3> QUICK LINKS</h3>
                   <br/> 
    
                   <a href="#" className='link'>Home Page</a> <br/> <br/> <br/> <br/>
                   <Link to={"/"}  className='link' >Login</Link>
                </div> */}
    
                
      
                 <div class="regregister">
                 <form onSubmit={handlerSubmit}>
    
                <h2 >
                   EditDriver
                </h2>

              <br/> <br/>
    
                <div className='flexreg'>
                  <div>
                    <label for="" className='lab'>  First Name:</label>
                  </div>
                  <div className='fname'>
                    <input class="input1" value={data.firstName} onChange={event=>setData({...data,firstName:event.target.value})}  className='form-control' type="text" placeholder="       Enter your first name here"/>
                    </div>
                </div>
                <br/>
              
                <div className='flexreg'>
                  <div>
                    <label for="" className='lab'>  Last Name:</label>
                  </div>
                  <div className='lname'>
                    <input class="input1" value={data.lastName} onChange={event=>setData({...data,lastName: event.target.value})} className='form-control' type="text" placeholder="       Enter your last name here"/>
                    </div>
                </div>
    
               
    
                <div className='flexreg'>
                  <div>
                    <label className='lab' style={{marginTop:'2rem'}} >  Mobile Number:</label>
                  </div>
                  <div className='mobile'>
                    <input class="input1" value={data.mobileNo} onChange={event=>setData({...data,mobileNo: event.target.value})} style={{marginTop:'2rem'}}  className='form-control' type="text" placeholder="       Enter your mobile number here"/>
                    </div>
                </div>

                {/* <div className='flexreg'>
                  <div>
                    <label className='labpas'  style={{marginTop:'4rem'}}>  Car Number:</label>
                  </div>
                  <div className='password'>
                    <input class="input1"  className='form-control' type="text" placeholder="       Enter your car number here"/>
                    </div>
                </div>
    
           
    
                <div className='flexreg'>
                  <div>
                    <label for="" className='lab'>  Car Type:</label>
                  </div>
                  <div>
                    <input class="input1"  style={{marginLeft: '7rem'}} className='form-control' type="text" placeholder="       Enter your car type here"/>
                    </div>
                </div> */}
                
              
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
              </form>
            </div>
         
         
    </div>
    
        </div>



  )
}



export default EditDriver
