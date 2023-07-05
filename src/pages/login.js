import React, { useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import LogMenu from '../components/logMenu'

// import "node_modules/font-awesome/css/font-awesome.min.css"

 function Login() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
   
    
   

    const navigate = useNavigate();
   


    const Validate = ()=>{
        let result = true;

        if(userName ===''||userName ===null){
            result = false;

            alert("enter username");
        }

        if(password ==='' || password ===null){
            result =false;
            alert("enter password");
        }

        return result;
    }


    const handlerSubmit = async (e) =>{

         e.preventDefault();
        if (Validate()){
            fetch("http://localhost:8080/Api/v1/userbyID/"+userName).then((res)=>{
                return res.json();
            }).then((response)=>{
                console.log(response.data);
                if (Object.keys(response).length ===0){
                    alert("enter valid username");
                }else{
                    if(response.password === password){
                       
                        navigate("/actionsCar");
                        
                    }else{
                        alert("enter valid password");
                    }
                }
            }).catch((error)=>{
                console.log(error);
            })
        }







       

    }
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
                        <form onSubmit={handlerSubmit}>  

                        <div className="login">

                            <div className="logo">

                                <div className="img">
                                    <img src="park1.png" alt="logo"/>
                                </div>
                                <div className="logname">
                                    <h4> <span className='car'>CAR</span>  <br/><span className='park' >PARKING</span> </h4>
                                </div>

                            </div>

                           
                        
                        <input style={{marginLeft: '4rem'}}  value={userName} onChange={(e)=>setUserName(e.target.value)}  type="text" placeholder="      Enter your Username"  className="form-control input10"/> <br/>
                            <input style={{marginLeft: '4rem'}} value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="     Enter your Password"  className="form-control input10"/> 
                        <input type="checkbox" className="check"/> Remember me! <br/> 

                            <a className="forgotpass" href="#" > forgot password?</a> <br/><br/>

                            <button type="Submit" className="btn btn-primary">Login</button> <br/> <br/>


                            <span className='account'> don't have an account?</span>

                            <Link to={"/reg"} className='register1'   >Register</Link>

                        </div>
                        </form>
            </div>


    </div>
  )
}

export default Login
