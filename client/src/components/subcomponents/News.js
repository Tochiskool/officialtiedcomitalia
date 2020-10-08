import React from "react";
import { Helmet } from "react-helmet";

const News = (props) => {
   // console.log(props.heading);
   return (
      <div>
         <Helmet>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <title>News about business about Tiedcom Italia </title>
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
            <div className="container box">
               <div className="row">
                  <div className="col-1-2">
                     <section
                        className="hero hero-primary bg-image"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                     >
                        <img
                           src="images/designers.jpg"
                           alt="Background Images"
                        />
                        <div className="container">
                           <div className="hero-body">
                              <h1 className="hero-title">
                                 {props.heading[props.index0]}
                              </h1>
                              <h4 className="hero-subtitle">
                                 {props.subheading[props.index0]}
                              </h4>
                           </div>
                        </div>
                     </section>
                  </div>
                  <div className="col-1-2">
                     <section
                        className="hero hero-primary bg-image"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                     >
                        <img
                           src="images/useddresses.jpg"
                           alt="Background Images"
                        />
                        <div className="container">
                           <div className="hero-body">
                              <h1 className="hero-title">
                                 {props.heading[props.index1]}
                              </h1>
                              <h4 className="hero-subtitle">
                                 {props.subheading[props.index1]}
                              </h4>
                           </div>
                        </div>
                     </section>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default News;
