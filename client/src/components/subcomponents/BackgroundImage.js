import React from "react";
import Img from "react-cool-img";
import { Helmet } from "react-helmet";

// import Aos from "aos";
// import "aos/dist/aos.css";

const backgroundImage = (props) => {
   return (
      <div>
         <Helmet>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <title>Best Italian Wholesaler</title>
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
         <section className="hero hero-primary bg-image" data-aos="flip-right">
            <Img src={props.image} alt="Background decorations" cache />
            <div className="container">
               <div
                  className="hero-body"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
               >
                  <h1 className="hero-title">{props.heading}</h1>
                  <h4 className="hero-subtitle">{props.subtitle}</h4>
               </div>
            </div>
         </section>
      </div>
   );
};

export default backgroundImage;
