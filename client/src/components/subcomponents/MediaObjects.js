import React from "react";
import Circles from "./Circles";
import { NavLink } from "react-router-dom";
import SlideShow from "../slider/SlideShow";
import { Helmet } from "react-helmet";
const MediaObjects = () => {
   return (
      <div>
         <Helmet>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <title>Land sea and air forwarding of Goods</title>
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
         <section className="background-quinary">
            <div className="container5 box ">
               <div className="row">
                  <div className="col-1-3">
                     <div className="media">
                        <div className="media-item" data-aos="fade-up-right">
                           <i className="fas fa-ship"></i>
                        </div>
                        <div className="media-body" data-aos="fade-down">
                           <h4 className="media-heading">
                              Naval transportation
                           </h4>
                           <p>We ship to Africa from Taranto and Padova </p>

                           <NavLink
                              to="/contact"
                              exact
                              // className="btn btn-primary"
                              activeStyle={{ color: "white" }}
                           >
                              <button className="btn btn-primary">
                                 Ship with us
                              </button>
                           </NavLink>
                        </div>
                     </div>
                  </div>
                  <div className="col-1-3">
                     <div className="media">
                        <div className="media-item" data-aos="fade-right">
                           <i className="fas fa-truck-moving"></i>
                        </div>
                        <div className="media-body" data-aos="fade-left">
                           <h4 className="media-heading">
                              Terrestrial Transport of goods
                           </h4>
                           <p>
                              We do distribution in Italy and Cameroon
                              specifically
                           </p>

                           <NavLink
                              to="/contact"
                              exact
                              // className="btn btn-primary"
                              activeStyle={{ color: "white" }}
                           >
                              <button className="btn btn-primary">
                                 Deliver with us
                              </button>
                           </NavLink>
                        </div>
                     </div>
                  </div>
                  <div className="col-1-3">
                     <div className="media">
                        <div className="media-item" data-aos="fade-left">
                           <i className="fas fa-plane-departure"></i>
                        </div>
                        <div className="media-body" data-aos="fade-up">
                           <h4 className="media-heading">
                              Air Trans portation
                           </h4>
                           <p>
                              Urgent deliveries through Venice Marco Polo
                              Airport
                           </p>

                           <NavLink
                              to="/contact"
                              exact
                              // className="btn btn-primary"
                              activeStyle={{ color: "white" }}
                           >
                              <button className="btn btn-primary">
                                 Urgent Delivery
                              </button>
                           </NavLink>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <SlideShow />
            <Circles />
         </section>
      </div>
   );
};

export default MediaObjects;
