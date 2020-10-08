import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import Img from "react-cool-img";
import { Helmet } from "react-helmet";

class SlideShow extends Component {
   render() {
      const settings = {
         className: "center",
         centerMode: true,
         infinite: true,
         autoplay: true,
         centerPadding: "60px",
         slidesToShow: 1,
         speed: 500,
         dots: true,
      };
      return (
         <div>
            <Helmet>
               <meta
                  httpEquiv="Content-Type"
                  content="text/html; charset=utf-8"
               />
               <title>Slide show of Products</title>
               <meta
                  name="description"
                  content="Italian shoes, Italian fabrics brand new and second handed grade A B, beverages, sanitary
               products, fashion wears, import export, maiden in business, representative"
               />
               <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
               />
            </Helmet>
            <Slider {...settings}>
               <div>
                  <section className="hero hero-primary bg-image">
                     <Img
                        src="images/BlackPepper.jpg"
                        cache
                        alt="Product images"
                     />
                     <div className="container">
                        <div className="hero-body">
                           <h1 className="hero-title">
                              West African Black Pepper
                           </h1>
                           <h4 className="hero-subtitle">And a lot more</h4>

                           <NavLink
                              to="/contact"
                              exact
                              className="btn btn-primary"
                              activeStyle={{ color: "white" }}
                           >
                              Send an email
                           </NavLink>
                        </div>
                     </div>
                  </section>
               </div>

               <div>
                  <section className="hero hero-primary bg-image">
                     <Img src="images/nature.jpg" alt="Product images" cache />
                     <div className="container">
                        <div className="hero-body">
                           <h1 className="hero-title">
                              Vast Plantation of cash crops
                           </h1>
                           <h4 className="hero-subtitle">Find out more</h4>

                           <NavLink
                              to="/contact"
                              exact
                              className="btn btn-primary"
                              activeStyle={{ color: "white" }}
                           >
                              Send an Email
                           </NavLink>
                        </div>
                     </div>
                  </section>
               </div>
               <div>
                  <section className="hero hero-primary bg-image">
                     <Img src="images/Moringa.jpg" alt="Moringa plant" cache />
                     <div className="container">
                        <div className="hero-body">
                           <h1 className="hero-title">
                              African Medicinal Plants
                           </h1>
                           <h4 className="hero-subtitle">
                              Huge Moringa supply
                           </h4>

                           <NavLink
                              to="/contact"
                              exact
                              className="btn btn-primary"
                              activeStyle={{ color: "white" }}
                           >
                              Send an Email
                           </NavLink>
                        </div>
                     </div>
                  </section>
               </div>
               {/* <div>
                  <section className="hero hero-primary bg-image">
                     <Img src="images/Ginger.jpg" alt="Product images" cache />
                     <div className="container">
                        <div className="hero-body">
                           <h1 className="hero-title">
                              Ginger garlic Peanuts Beans etc
                           </h1>
                           <h4 className="hero-subtitle">Find out more</h4>
                           <NavLink
                              to="/contact"
                              exact
                              className="btn btn-primary"
                              activeStyle={{ color: "white" }}
                           >
                              Send an Email
                           </NavLink>
                        </div>
                     </div>
                  </section>
               </div> */}
            </Slider>
         </div>
      );
   }
}

export default SlideShow;
