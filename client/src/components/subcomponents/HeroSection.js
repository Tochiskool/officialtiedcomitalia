import React from "react";
import Img from "react-cool-img";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const HeroSection = (props) => {
   //console.log(props);
   return (
      <div>
         <Helmet>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <title>wholesale Import export and distribution of products</title>
            <meta
               name="description"
               content="Business Representative, Italian products, sell products to italian companies, disinfecting products,
            fashion wears,  maiden in business, wholesale heineken"
            />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
         </Helmet>

         <section
            className="hero hero-primary bg-image"
            data-aos="zoom-in-down"
         >
            <Img src="images/sh.jpg" alt="Hero background" cache />
            <div className="container">
               <div className="hero-body" data-aos="flip-right">
                  <h1 className="hero-title">{props.heading}</h1>
                  <h4 className="hero-subtitle">{props.subheading}</h4>
                  <NavLink
                     to="/contact"
                     exact
                     className="btn btn-primary"
                     activeStyle={{ color: "white" }}
                  >
                     <button className="btn btn-primary">{props.para}</button>
                  </NavLink>
               </div>
            </div>
         </section>
      </div>
   );
};

export default HeroSection;
