import React from "react";
import Img from "react-cool-img";
import { Helmet } from "react-helmet";

const Frames = (props) => {
   return (
      <div>
         <Helmet>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <title>Search Products </title>
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
         <div className="frame frame-primary">
            <Img src={props.img} alt="Raw materials" cache />
         </div>
      </div>
   );
};

export default Frames;
