import React from "react";
import { NavLink } from "react-router-dom";
// import { Helmet } from "react-helmet";
const Navbar = (props) => {
   // console.log(props);
   return (
      <nav className="nav nav-primary" data-aos="flip-left">
         <ul>
            <li>
               <NavLink
                  to="/"
                  exact
                  className="btn btn-nav"
                  activeStyle={{ color: "white" }}
               >
                  Home
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/about"
                  exact
                  className="btn btn-nav"
                  activeStyle={{ color: "white" }}
               >
                  About
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/products"
                  exact
                  className="btn btn-nav"
                  activeStyle={{ color: "white" }}
               >
                  Products
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/contact"
                  exact
                  className="btn btn-nav"
                  activeStyle={{ color: "white" }}
               >
                  <button className="btn btn-primary">Contact</button>
               </NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
