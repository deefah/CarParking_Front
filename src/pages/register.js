import React from 'react'
import "./register.css"
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>

<div class="flex">
            <div class="quick">
               <h3> QUICK LINKS</h3>
               <br/> 

               <a href="#" className='link'>Home Page</a> <br/> <br/> <br/> <br/>
               <Link to={"/"}  className='link' >Login</Link>
            </div>

            
   
             <div class="reg">

            <h2 >
                Driver details
            </h2>

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
          <Link to={"/"} type="button" class="btn btn-primary">SAVE</Link>

        </div>
     
</div>

    </div>
  )
}

export default Register
