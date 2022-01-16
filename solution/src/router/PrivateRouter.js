import React from 'react'
import {Navigate,Route} from "react-router";
import { useAuth } from '../context/AuthContextProvider';

const PrivateRouter = (props) => {
    let {currentUser} =useAuth();
    //just for testing
     //just for testing purpose
  currentUser={
    email:"a@gmail.com",
  }
    return currentUser ? (
         <Route path={props.path} component={props.component}/>
         ) :(<Navigate to ="/login"/>);}


export default PrivateRouter
