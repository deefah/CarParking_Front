import React from 'react'
import "./menu.css"
import { Divider } from 'rsuite'
import { Link } from 'react-router-dom'

 function Menu() {
  return (
    <div>




<div class="main">
   
   <div class="nav">

       <ul>
        
           {/* <li>Home</li> */}
        <li>  <Link to={"/addcars"}  style={{color:'white'}}>Cars</Link> </li>
         <li>  <Link to={"/register"} style={{color:'white'}}>Drivers</Link></li>
           <li><Link to={"/"} style={{color:'white'}}>Logout</Link></li>
       </ul>
   </div>

</div>



{/* 
        <div class="main">
        
       <div className='nav-brand'>
               <h3>CAR PARKING SYSTEM</h3> 
       </div>

        </div> */}

       
  </div>
  )
}


export default Menu
