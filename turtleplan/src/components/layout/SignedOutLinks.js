import {  NavLink } from "react-router-dom";
import React from 'react'

const SignedOutLinks = () => {
    return (
       <ul className="right">
           <li><NavLink to ="/">SignUp</NavLink></li>
           <li><NavLink to ="/">LogIn</NavLink></li>
       </ul>    
    )
}

export default SignedOutLinks;