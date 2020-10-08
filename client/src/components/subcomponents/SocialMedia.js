import React from "react";
import { Helmet } from "react-helmet";

const SocialMedia = () => {
   return (
      <div className="col-1-5 border-left">
         <Helmet>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <title>Tiedcom Italia's Social contacts</title>
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
         <div className="row">
            <blockquote>
               <hr />
               <div className="col-1-4" data-aos="zoom-out-up">
                  <hr />
                  <a
                     href="https://www.facebook.com/TiedcomItalia"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     {" "}
                     <i className="fab fa-facebook fa-3x facebook"></i>
                  </a>
                  <hr />
               </div>
               <div className="col-1-4" data-aos="zoom-in-right">
                  <hr />
                  <a
                     href="https://www.instagram.com/tidcomitalia/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <i className="fab fa-instagram-square fa-3x instagram"></i>
                  </a>
                  <hr />
               </div>
               <div className="col-1-4" data-aos="zoom-in-down">
                  <hr />
                  <a
                     href="https://join.skype.com/invite/oXBor3FYHHsJ"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <i className="fab fa-skype fa-3x skype"></i>
                  </a>
                  <hr />
               </div>
               <div className="col-1-4" data-aos="zoom-in-up">
                  <hr />
                  <a
                     href="https://wa.link/26mdy9"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     {" "}
                     <i className="fab fa-whatsapp-square fa-3x whatsapp"></i>
                  </a>
                  <hr />
               </div>
            </blockquote>
            <hr />
         </div>
      </div>
   );
};

export default SocialMedia;
