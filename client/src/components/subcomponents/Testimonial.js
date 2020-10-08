import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const Testimonial = () => {
   return (
      <div>
         <Helmet>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <title>Awesome testimonies from customers </title>
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
         <section>
            <div className="container">
               <div className="row">
                  <div className="col-1-3 remove-gutter-xs">
                     <div data-aos="zoom-out-down">
                        <h1>Wholesaler</h1>
                        <p>
                           {" "}
                           TiedCom is a young company with a dedicated CEO who
                           puts his customers interest first. TiedCom Italia
                           considers its customers satisfaction before every
                           other thing in this business. Do you intend to buy
                           italian products in bulk .Just go on check on our
                           forbiden product list. &nbsp;
                           <NavLink
                              to="/about"
                              exact
                              // className="btn btn-primary"
                              activeStyle={{ color: "white" }}
                           >
                              <em>
                                 <mark>Readmore...</mark>
                              </em>
                           </NavLink>
                           &nbsp;
                        </p>
                     </div>
                  </div>
                  <div className="col-1-3 remove-gutter-xs">
                     <div data-aos="zoom-out-right">
                        <h1>As a Purchase Representative</h1>
                        <p>
                           Are you somewhere in the world dying to deal with an
                           Italian product that will dominate your market.
                           Thinking of the stress of travelling and dealing with
                           huge cost and unforseen circumstances. Worry much no
                           more for you have Christian the CEO of TiedCom who
                           will help you overcome all your worries for a
                           commision.&nbsp;
                           <NavLink
                              to="/about"
                              exact
                              // className="btn btn-primary"
                              activeStyle={{ color: "white" }}
                           >
                              <em>
                                 <mark>Readmore...</mark>
                              </em>
                           </NavLink>
                           &nbsp;
                        </p>
                     </div>
                  </div>
                  <div className="col-1-3 remove-gutter-xs">
                     <div data-aos="zoom-out-up">
                        <h1>Expert in Africa</h1>
                        <p>
                           It is true that some markets in Africa are really
                           difficult to penetrate eventhough the are filled with
                           milk and honey. You sometimes get worried about
                           getting to such markets. No worries Christian knows
                           the in and outs of African Markets and will discover
                           new markets and or raw materials for you, importing
                           and exporting where needed.&nbsp;
                           <NavLink
                              to="/about"
                              exact
                              // className="btn btn-primary"
                              activeStyle={{ color: "white" }}
                           >
                              <em>
                                 <mark>Readmore...</mark>
                              </em>
                           </NavLink>
                           &nbsp;
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Testimonial;
