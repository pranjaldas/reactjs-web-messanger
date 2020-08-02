import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import { signup } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './style.css'

/**
* @author
* @function RegisterPage
**/

const RegisterPage = (props) => {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);


  const registerUser = (e) => {
    
    e.preventDefault();
  

    const user = {
      firstName, lastName, email, password
    }
    
    dispatch(signup(user))
  }


  if(auth.authenticated){
    return <Redirect to={`/`} />
  }

  return(
    <Layout>
      <div className="registerContainer">
        <Card>
        <form onSubmit={registerUser}>

          <div className="form-row" >
            <div className="col-12 mb-3">
              <h3>Sign up</h3>
            </div>
          </div>

          <div className="form-row" >
            <div className="col-12 mb-3">
              <input
                className="form-control "
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="Enter first name"
                required />

            </div>
          </div>
          <div className="form-row" >
            <div className="col-12 mb-3">
              <input
                className="form-control "
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Enter last name"
                required />
            </div>
          </div>
          <div className="form-row" >
            <div className="col-12 mb-3">
              <input
                className="form-control "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
                required />
            </div>
          </div>
          <div className="form-row" >
            <div className="col-12 mb-3">
              <input
                className="form-control "
                 value={password}
              onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter password"
                required />
            </div>
          </div>
          <div align="center" className="align-self-center mx-auto">
             <button 
             className="btn btn-success btn-sm"
             >REGISTER</button>
          </div>

          </form>
        </Card>
      </div>
    </Layout>
   )

 }

export default RegisterPage