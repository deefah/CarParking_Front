import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogMenu from '../components/logMenu'

function RegData() {
  const navigate = useNavigate();

  function dee(e) {
    e.preventDefault(); // Prevent the form from submitting
    
    let password = document.querySelector(".pass").value;
    let verify = document.querySelector(".conf").value;

    if (password !== verify) {
      alert("Password and confirm password must be same.");
      return false;
      
    }

    alert('REGISTERED');
    navigate("/")
    
    return true;
  }

  return (
    <div>
      <LogMenu />
      <div className="add">
        <form onSubmit={dee}>
          <div className='flex'>
            <div>
              <label htmlFor="">Username:</label>
            </div>
            <div className='password1'>
              <input required style={{marginLeft:'3rem'}} className='form-control input1' type="text" placeholder="Enter your UserName here" />
            </div>
          </div>

          <div className='flex'>
            <div>
              <label htmlFor="">Password:</label>
            </div>
            <div className='password'>
              <input style={{marginLeft:'5rem'}} required className='form-control input1 pass' type="password" placeholder="Enter your Password here" />
            </div>
          </div>

          <div className='flex'>
            <div>
              <label htmlFor="">Confirm Password:</label>
            </div>
            <div className='password'>
              <input required className='form-control input1 conf' type="password" placeholder="Confirm Password here" />
            </div>
          </div>

          <Link to={"/"} type="button" className="btn btn-primary">CANCEL</Link>
          <button type="submit" className="btn btn-primary">SAVE</button>
        </form>
      </div>
    </div>
  )
}

export default RegData;
