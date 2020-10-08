import React from "react";
import SocialMedia from "./subcomponents/SocialMedia";
import Img from "react-cool-img";
import { Helmet } from "react-helmet";

const Footer = () => {
   return (
      <div>
         <Helmet>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <title>Info about TiedCom Italia</title>
            <meta
               name="Welcome to TiedCom Italia"
               content="Italian shoes, Italian fabrics brand new and second handed grade A B, beverages, sanitary
               products, fashion wears, import export, maiden in business, representative"
            />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
         </Helmet>
         <section className="footerStyle">
            <div>
               <div className="row">
                  <div className="col-1-5 border-left" data-aos="fade-up-right">
                     <a href="/" className="logo logo-primary">
                        <Img
                           src="images/logoMain.jpg"
                           alt="Logo images"
                           cache
                        />
                     </a>
                     <em>
                        <mark>TiedCom Italia</mark>
                     </em>
                  </div>
                  <div className="col-1-5 border-left" data-aos="flip-up">
                     <blockquote>
                        <hr />
                        <address>
                           CEO: <a href="/contact">TiedCom Italia</a>
                           Visit: <a href="/contact">Contact page</a>
                           <br />
                           Address : via marco polo Trieste
                           <br />
                           Zip code: 34144
                           <br />
                           Regione: FVG
                           <br />
                           Country: Italia
                           <br />
                        </address>
                        <hr />
                     </blockquote>
                  </div>
                  <div className="col-1-5 border-left" data-aos="fade-up-right">
                     <blockquote>
                        <hr />
                        Call us:(+39)329-985-6890
                        <br />
                        landline:(+39)040-265-2062
                        <br />
                        &copy; 2020 All rights are reserved
                        <br />
                        Company's Capital: &euro;##.#### <br />
                        P.I.VA: 01348050327
                        <hr />
                     </blockquote>
                  </div>
                  <SocialMedia />
                  <div className="col-1-5 border-left">
                     <div className="row">
                        <h3 className="container">Payment methods:</h3>
                        <blockquote>
                           <div className="col-1-4" data-aos="flip-up">
                              {/* <i class="fab fa-cc-paypal fa-3x skype"></i> */}
                              <a href="/contact">
                                 <Img
                                    src="https://img.icons8.com/color/64/000000/paypal.png"
                                    className="skype"
                                    alt="paypal icon"
                                    cache
                                 />
                              </a>
                           </div>
                           <div className="col-1-4" data-aos="flip-up-right">
                              {/* <i class="fab fa-cc-mastercard fa-3x masterCard"></i> */}
                              <a href="/contact">
                                 <Img
                                    src="https://img.icons8.com/color/64/000000/mastercard.png"
                                    className="skype"
                                    alt="mastercard icon"
                                    cache
                                 />
                              </a>
                           </div>
                           <div className="col-1-4" data-aos="flip-down">
                              <a href="/contact">
                                 <Img
                                    src="https://img.icons8.com/color/64/000000/visa.png"
                                    className="skype"
                                    alt="visa icon"
                                    cache
                                 />
                              </a>
                              {/* <i class="fab fa-cc-visa fa-3x skype"></i> */}
                           </div>
                           <div className="col-1-4" data-aos="flip-left">
                              {/* <i class="fab fa-cc-discover fa-3x skype"></i> */}
                              <a href="/contact">
                                 <Img
                                    src="https://img.icons8.com/color/64/000000/discover.png"
                                    className="skype"
                                    alt="Discoveries icon"
                                    cache
                                 />
                              </a>
                           </div>
                        </blockquote>
                     </div>
                  </div>
               </div>
               <div className="container">
                  <div className="row">
                     <div
                        className="col-1-3 green box"
                        data-aos="flip-up"
                     ></div>
                     <div
                        className="col-1-3 white box"
                        data-aos="flip-up"
                     ></div>
                     <div className="col-1-3 red box" data-aos="flip-up"></div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Footer;
