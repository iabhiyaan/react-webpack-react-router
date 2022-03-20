import React from 'react'

import { Outlet, Link } from 'react-router-dom'
import logo from './logo.svg'

export default () => {
   return (
      <>
         <ul className="container flex d-flex justify-item-center">
            <Link to="/" variant="contained">
               <li>
                  <img src={logo} alt="" width="100" />
               </li>
            </Link>
            <Link to="/home" className="btn btn-sm btn-flat btn-info">
               <li>Home</li>
            </Link>
            <Link className="btn btn-sm btn-flat btn-info" to="/about-us">
               <li>About us</li>
            </Link>
            <Link to="/login" className="btn btn-info btn-sm">
               <li>Login</li>
            </Link>
            <Link className="btn btn-sm btn-flat btn-info" to="/register">
               <li>Register</li>
            </Link>
            <Link className="btn btn-sm btn-flat btn-info" to="/contact-us">
               <li>Contact us</li>
            </Link>
            <Link className="btn btn-sm btn-flat btn-info" to="/blogs">
               <li>Blogs</li>
            </Link>
            <li>
               <Link to="/tests" className="btn btn-info btn-sm ">
                  Tests
               </Link>
            </li>
            <li>
               <Link to="/admin-login" className="btn btn-info btn-sm ">
                  Admin Login
               </Link>
            </li>
         </ul>
         <Outlet />
      </>
   )
}
