import React from "react";
import { Helmet } from "react-helmet";
// import img from "react-cool-img";

const Circles = () => {
   return (
      <article>
         <Helmet>
            {/* <head lang="en"> */}
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <title>Products</title>
            <meta
               name="description"
               content="Business Representative, Italian products, sell products to italian companies, disinfecting products,
            fashion wears,  maiden in business, wholesale heineken"
            />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            {/* </head> */}
         </Helmet>
         <div data-aos="flip-left">
            <div className="row">
               <div className="col-1-4 pull-right-sm">
                  <div className="frame frame-primary">
                     <img src="images/designers.jpg" alt="Raw materials" />
                  </div>
               </div>
               <div className="col-1-4 pull-right-sm">
                  <div className="frame frame-primary">
                     <img src="images/gnutss.jpg" alt="Raw materials" />
                  </div>
               </div>
               <div className="col-1-4 pull-right-sm">
                  <div className="frame frame-primary">
                     <img src="images/FreshMoringa.jpg" alt="Raw materials" />
                  </div>
               </div>
               <div className="col-1-4 pull-right-sm">
                  <div className="frame frame-primary">
                     <img src="images/RedOil.jpg" alt="Raw materials " />
                  </div>
               </div>
            </div>
         </div>
      </article>
   );
};

export default Circles;
