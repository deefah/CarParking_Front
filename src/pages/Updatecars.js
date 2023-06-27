import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import "./updatecars.css"

 function Updatecars() {
  const navigate = useNavigate();

        const{plateNo }=useParams();
        const[data,setData] = useState({});
    useEffect(()=>{
        const fetchdataById = async()=>{

            try{
                const response = await axios.get(`http://localhost:8080/car/getbyID/${plateNo}`);
                setData(response.data);

            }catch(error){
                console.log(error);
            }

        };
        fetchdataById();
      
    },[plateNo]);
    function handlerSubmit(event){
      event.preventDefault();
      axios.put(`http://localhost:8080/car/update/${plateNo}`, data);
      navigate("/action");
      
    }
  return (

    <div>
          <div className="container-fluid py-5 h-50">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8">
                <div className="card" style={{ borderRadius: '1rem' }}>
                  <div className="card-body p-5 text-center">
                    <h3 className="mb-5">UPDATE DRIVER FORM</h3>

                    
  
         
        
         <form onSubmit={handlerSubmit} >
     
     
           
          
       
     
         <div className='row'>
           <div className='col-12'>
           <div className='flex'>
         
         <div className='password'>
           <input  value={data.carType} onChange={event=>setData({...data,carType: event.target.value})} className='form-control' type="text" placeholder="       Enter your Car Type here"/>
           </div>
       </div>
           </div>
         </div>
     
         <div className='row'>
           <div className='col-12'>
           <div className='flex'>
         
         <div className='password'>
           <input  value={data.carNumber} onChange={event=>setData({...data,carNumber: event.target.value})} className='form-control' type="text" placeholder="       Enter your Car Number here"/>
           </div>
       </div>
           </div>
         </div>
     
     
     
      
       <div className='row'>
     
           <div className='col-2'>
           <button  type="submit" className="btn btn-primary">SAVE</button>
           </div>
     
           <div className='col-2'>
          <Link to={"/actionsCar"}> <button type="button" className="btn btn-primary">CANCEL</button></Link>
             </div>
     
       </div>
       
      
     
     
     <input  type="hidden" value={data.plateNo} onChange={event=> setData({...data,plateNo: event.target.value})} className='form-control' placeholder="       Enter your  plate Number here"/>
     
         </form>
       
     
     </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        

    

    
   
  )
} 
export default Updatecars
