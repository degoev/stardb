import React from "react";
import { Redirect } from "react-router-dom";

const SecretPage = ({isLoggedIn}) => {
     
     if (isLoggedIn) {
          return (
               <div className="jumbotron text-center">
                    <h3>WARNING</h3>
                    <h2>!!! This page is full of secret !!!</h2>
               </div>
          );
     }

     return <Redirect to="/login/" />
};

export default SecretPage;
