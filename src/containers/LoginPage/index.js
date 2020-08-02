import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import { signin, isLoggedInUser } from '../../actions';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

/**
* @author
* @function LoginPage
**/

const LoginPage = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  // useEffect(() => {
  //   if(!auth.authenticated){
  //     dispatch(isLoggedInUser())
  //   }
  // }, []);




  const userLogin = (e) => {
    e.preventDefault();

    if(email == ""){
      alert("Email is required");
      return;
    }
    if(password == ""){
      alert("Password is required");
      return;
    }

    dispatch(signin({ email, password }));
    




  }


  if(auth.authenticated){
    return <Redirect to={`/`} />
  }



  return(
    <Layout>
      <div className="loginContainer">
        <Card>
          <form onSubmit={userLogin}>
          <div className="form-row" >
            <div className="col-12 mb-3">
              <h3>Sign In</h3>
            </div>
          </div>
          <div className="form-row" >
            <div className="col-12 mb-3">
              <input
                className="form-control "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
               
                type="text"
                placeholder="Enter email"
                required />

            </div>
          </div>
        
          <div className="form-row" >
            <div className="col-12 mb-3">
            <input 
              className="form-control "
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            </div>
          </div>
            
          <div align="center" className="align-self-center mx-auto">
             <button 
             className="btn btn-success btn-sm"
             >LOG IN</button>
          </div>

          </form>
        </Card>
      </div>
    </Layout>
   )

 }

export default LoginPage