import React from "react";
import { Redirect } from "react-router-dom";

const LoginPage = ({isLoggedIn, onLogIn}) => {
     if (!isLoggedIn) {
          return (
               <div className="jumbotron text-center">
                    <button onClick={onLogIn} type="button" className="btn btn-success">Log in</button>
               </div>
          );
     }

     return <Redirect to="/" />
};

export default LoginPage;
