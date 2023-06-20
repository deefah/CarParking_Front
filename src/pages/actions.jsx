import React, { useEffect, useState } from 'react';
import './action.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Actions() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadCars();
  }, []);

  const loadCars = async () => {
    try {
      const result = await axios.get('http://localhost:8080/car/allcars');
      setCars(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletehandleSubmit = (plateNo) => {
    const popMsg = window.confirm('Are you sure you want to delete?');

    if (popMsg) {
      axios
        .delete(`http://localhost:8080/car/delete/${plateNo}`)
        .then((res) => {
          navigate('/action');
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container-lg">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-8">
                <h2>
                  Driver<b>Details</b>
                </h2>
              </div>
              <div className="col-sm-4">
                <Link to="/addcars" className="btn btn-info add-new">
                  <i className="fa fa-plus"></i> Add New
                </Link>
              </div>
            </div>
          </div>

          <table className="table table-bordered" id="myTable">
            <thead>
              <tr>
                <th>S/N</th>
                <th>plate number</th>
                <th>Car name</th>
                <th>Car Number</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody className="tablebody">
              {cars.length > 0 ? (
                cars.map((car, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{car.plateNo}</td>
                    <td>{car.carType}</td>
                    <td>{car.carNumber}</td>
                    <td>
                      <Link to={`/updatecars/${car.plateNo}`} type="button" className="btn btn-info EDIT">
                        <i className="fa fa-pencil"></i>
                      </Link>
                      <button onClick={() => deletehandleSubmit(car.plateNo)} className="btn btn-info DELETE">
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No cars found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Actions;
