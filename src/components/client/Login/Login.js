import React from 'react';
import "./app.css";

function Login() {
    return (
      <div className="login-wrapper">
      <div className="form-wrapper">
        <h1>Login</h1>
        <form>
        <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email"
                     className=""
                     placeholder="Email Account"
                     type="text"
                     name="email"/>

            </div>
            <div className="password">
              <label htmlFor="phone">Password</label>
              <input type="password"
                     className=""
                     placeholder="Password"
                     type="text"
                     name="password"/>

            </div>
         </form>
          <a href="/products">
            <button>Log In</button> 
            
          </a> 
          <a href=""><p>Forgot Password?</p></a>    
     
          </div>
    </div>
    )
}

export default Login;
