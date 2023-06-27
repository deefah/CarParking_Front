import React, { useEffect, useState } from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import {  Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';
function ActionDriver() {

    const [Drivers, setDrivers] = useState([]);
    const Navigate = useNavigate();

    useEffect(()=>{
        loadDrivers();
    },[]);

    const loadDrivers = async () =>{
        try{
            const answ = await axios.get("http://localhost:8080/driver/alldrivers");
            setDrivers(answ.data);
            console.log(answ.data);

        }catch(error){
            console.log(error);
        }
    };

    const deletehandleSubmit = (driverID) =>{
        const popMessage = window.confirm('are you sure you want to delete?');

        if (popMessage){
            axios 
            .delete(`http://localhost:8080/driver/futa/${driverID}`)
            .then((res)=>{
                Navigate("/actiondriver");
                window.location.reload();
            })

            .catch((error)=> console.log(error));
        }
    };

  return (




    <div className='container-lg'>

        {/* <div className='table-responsive'> */}

            <div className='table-wrapper'>

                <div className='table-title'>
                
                    <div className='row'>

                    <div className="col-sm-8"><h2>Driver<b>Details</b></h2></div>
                    <div className="col-sm-4">
                           <Link to={"/register"} type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i> Add New</Link>
                        </div>
                    </div>

                </div>

                <table className="table table-bordered" id="myTable">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>first name</th>
                            <th>last name</th>
                            <th>car number</th>
                            <th>car type</th>
                            <th>phone number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody className='tablebody'>
                    {
                        Drivers.length >0 ?(
                            Drivers.map((driver, index) => (
                                <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{driver.firstName}</td>
                                <td>{driver.lastName}</td>
                                <td>{driver.car.carType }</td>
                                <td>{driver.car.CarNumber}</td>
                                <td>{driver.mobileNo}</td>
                                <td>
                                <Link to={`/editdriver/${driver.driverID}`} type='button' className='btn btn-info EDIT'><i className='fa fa-pencil'></i></Link>
                                <button onClick={()=>deletehandleSubmit(driver.driverID)} className='btn btn-info DELETE'><i className='fa fa-trash'></i></button>
                                </td>
                                </tr>

                            ))
                        ):(
                            <tr>
                                <td colSpan="4">no drivers</td>
                            </tr>
                        )
                    }
                          
                              
                           
                    </tbody>

                </table>

            </div>

        </div>
    
    
    // </div>
  
  
  )
}


export default  ActionDriver
