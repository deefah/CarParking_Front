import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogMenu from '../components/logMenu';
import axios from 'axios';

function RegData() {
  const navigate = useNavigate();
  const [inputUserName, setUserName] = useState('');
  const [inputPassword, setPassword] = useState('');
  const [inputVerifyPword, setConfPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputPassword !== inputVerifyPword) {
      alert("Password and confirm password must be the same.");
      return;
    }

    const requestData = {
      userName: inputUserName,
      password: inputPassword,
    };

    axios.post("http://localhost:8080/Api/v1/addUser", requestData)
      .then(response => {
        console.log(response.data);
        navigate("/");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <LogMenu />
      <div className="add">
        <form onSubmit={handleSubmit}>
          <div className='flex'>
            <div>
              <label htmlFor="">Username:</label>
            </div>
            <div className='password1'>
              <input
                required
                style={{ marginLeft: '3rem' }}
                value={inputUserName}
                onChange={event => setUserName(event.target.value)}
                className='form-control input1'
                type="text"
                placeholder="Enter your Username here"
              />
            </div>
          </div>

          <div className='flex'>
            <div>
              <label htmlFor="">Password:</label>
            </div>
            <div className='password'>
              <input
                style={{ marginLeft: '5rem' }}
                value={inputPassword}
                onChange={event => setPassword(event.target.value)}
                required
                className='form-control input1 pass'
                type="password"
                placeholder="Enter your Password here"
              />
            </div>
          </div>

          <div className='flex'>
            <div>
              <label htmlFor="">Confirm Password:</label>
            </div>
            <div className='password'>
              <input
                required
                value={inputVerifyPword}
                onChange={event => setConfPassword(event.target.value)}
                className='form-control input1 conf'
                type="password"
                placeholder="Confirm Password here"
              />
            </div>
          </div>

          {error && <div className="error">{error}</div>}

          <Link to={"/"} type="button" className="btn btn-primary">CANCEL</Link>
          <button type="submit" className="btn btn-primary">SAVE</button>
        </form>
      </div>
    </div>
  );
}

export default RegData;
