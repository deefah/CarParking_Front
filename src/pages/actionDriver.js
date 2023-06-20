import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import { Link } from 'react-router-dom'
function ActionDriver() {
  return (




    <div className='container-lg'>

        <div className='table-responsive'>

            <div className='table-wrapper'>

                <div className='table-title'>
                
                    <div className='row'>

                    <div class="col-sm-8"><h2>Driver<b>Details</b></h2></div>
                    <div class="col-sm-4">
                            <a type="button" class="btn btn-info add-new"><i className="fa fa-plus"></i> Add New</a>
                        </div>
                    </div>

                </div>

                <table class="table table-bordered" id="myTable">
                    <thead>
                        <tr>
                            <th>first name</th>
                            <th>last name</th>
                            <th>phone number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody className='tablebody'>
                            <tr>
                                <td>aa</td>
                                <td>bb</td>
                                <td>cc</td>
                                <Link to={"edit"} type='button' className='btn btn-info EDIT'><i className='fa fa-pencil'></i></Link>
                                <a type='button' className='btn btn-info DELETE'><i className='fa fa-trash'></i></a>
                            </tr>
                    </tbody>

                </table>

            </div>

        </div>
    
    
    </div>
  
  
  )
}


export default  ActionDriver
