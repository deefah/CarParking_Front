import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
import LogMenu from '../components/logMenu'
// import "node_modules/font-awesome/css/font-awesome.min.css"

 function Login() {
  return (
    <div>

    <LogMenu/>

<div className="flexlog">
                        {/* <div className="quickli">
                           <h3> QUICK LINKS</h3>
                           <br/> 

                           <a className='link' href="#" >About Cars</a> <br/> <br/>  <br/>
                           <Link  className='link'  >About drivers</Link>
                        </div> */}
               

                        <div className="login">

                            <div className="logo">

                                <div className="img">
                                    <img src="park1.png" alt="logo"/>
                                </div>
                                <div className="logname">
                                    <h4> <span className='car'>CAR</span>  <br/><span className='park' >PARKING</span> </h4>
                                </div>

                            </div>

                           
                        
                        <input required style={{marginLeft: '4rem'}}  type="text" placeholder="      Enter your Username"  className="form-control input10"/> <br/>
                            <input style={{marginLeft: '4rem'}} type="password" placeholder="     Enter your Password"  className="form-control input10"/> 
                        <input type="checkbox" className="check"/> Remember me! <br/> 

                            <a className="forgotpass" href="#" > forgot password?</a> <br/><br/>

                            <Link to={"addcars"} type="button" class="btn btn-primary">Login</Link> <br/> <br/>


                            <span className='account'> don't have an account?</span>

                            <Link to={"/reg"} className='register1'   >Register</Link>

                        </div>
            </div>

    </div>
  )
}

export default Login
