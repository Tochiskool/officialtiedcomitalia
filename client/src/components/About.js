import React, { useEffect } from "react";
import Header from "./subcomponents/Header";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";
import MyMap from "./subcomponents/MyMap";
const About = () => {
   useEffect(() => {
      Aos.init({ duration: 2000 });
   }, []);
   return (
      <div>
         <Helmet>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <title>Everything About Tiedcom Italia </title>
            <meta
               name="About TiedCom Italia"
               content="Italian shoes, Italian fabrics brand new and second handed grade A B, beverages, sanitary
               products, fashion wears, import export, maiden in business, representative"
            />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
         </Helmet>
         <Header
            heading="Know everything about TIEDCOM
               ITALIA"
            subheading="Partnership, collaboration, project execution etc"
            para="Get in touch"
         />
         <section>
            <div className="container">
               <div className="row">
                  <div className="col-3-4" data-aos="zoom-out-up">
                     <h1 translate="yes">Everything About us</h1>
                     <h1 translate="yes">
                        <strong>
                           <em>
                              <mark>Welcome to TiedCom Italia</mark>
                           </em>
                        </strong>
                     </h1>
                     <p translate="true">
                        <strong>
                           <mark>TiedCom Italia</mark>
                        </strong>{" "}
                        is a small company that is willing to cooperate,
                        collaborate and learn while exploring and creating new
                        opportunities in Italy and the world at large. We are a
                        flexible company with a very small limit on what we
                        can't deal with. We are dynamic, enthausiatic and
                        resilient as we work hard to satisfy our customers
                        needs. We are situated in the heart of Northeast Italy
                        in the beautiful city of Trieste and we specialise in
                        helping italian companies and craftsmen create new
                        markets and channels of selling their products in Africa
                        and the world. We are not one sided so we also help
                        specifically African businesses to sell their raw
                        materials and finished products in Italy and Europe.
                        Those who wish to accomplish serious purchases in Italy
                        and do not want to spend so much money and traveling
                        time can use our services to accomplish their dreams.
                        Our business regime has a very few limit on what we
                        can't deal on but the array of products we can deal on
                        is long and exciting. We are willing to work base on
                        proposals you make to us. We are looking for local
                        african produceres who intend to sell their products to
                        italian factories and Italians dying to expand their
                        profits by creating new exciting markets. Do not
                        hesitate to&nbsp;
                        <NavLink
                           to="/contact"
                           exact
                           // className="btn btn-primary"
                           activeStyle={{ color: "white" }}
                        >
                           <em>
                              <mark>contact</mark>
                           </em>
                        </NavLink>
                        &nbsp; us for whatever reason. We really do work hard to
                        satisfy our customers needs.
                        <br /> In the Northeastern part of beautiful italy
                        specifically in the city of Trieste there are beautiful
                        sites and historic monuments and enthausiatic business
                        moguls. There are also great artisanal crafts men and
                        landmark industries looking forward to meet serious and
                        dedicated businesses with the posibilities to
                        collaborate and create new markets in diverse parts of
                        the world. That is how we get in the B2B platform. We
                        practically create new markets for companies in italy as
                        a whole and get raw materials most specifically from
                        Africa companies. It is upto you to contact us proposing
                        what you have to sell to Africa or what products you
                        need from Africa. Companies, enterprises and individuals
                        can contact us on how to get products as per their
                        needs. We will practically help you so much in cutting
                        cost and making your business flourish without any
                        quagmires. We also have our italian trademark products
                        that we wil introduce to new markets and clients can
                        contact us to know more. We ship by air, by land and by
                        sea. Samples are obviously shipped by air from and to
                        italy. We really do believe in this worthy ideal that is
                        why we put a lot of efforts to make it work for us and
                        the world as a whole. We have contacts with great
                        freight forwarders, storage facilities as per request,
                        lawyers and translator. But why get into all the heck,
                        just send us and email and we will proceed from there.
                        Everyone knows how italian products are requested in the
                        world, from shoes to creams to foodstuffs and not
                        forgetting home esthetics and a whole lot.{" "}
                        <em>
                           Every one wants a little bit of Italy in his life
                        </em>
                        . All you have to do is get to our &nbsp;
                        <NavLink
                           to="/contact"
                           exact
                           // className="btn btn-primary"
                           activeStyle={{ color: "white" }}
                        >
                           <em>
                              <mark>contact</mark>
                           </em>
                        </NavLink>
                        &nbsp; page and send a message. We hope in partnering
                        with you in accomplishing a long lasting business
                        venture. Not to say the least we wish you a great day .
                        Shalom
                        <br />
                        <strong>
                           A.Christian.N<em> of Italy</em>
                        </strong>
                        <br />
                        <em>CEO of Tiedcom italia</em>
                     </p>
                  </div>
                  <div className="col-1-4" data-aos="zoom-out-down">
                     <p>
                        <br />
                        <a
                           href="https://europa.eu/youreurope/business/taxation/vat/check-vat-number-vies/index_en.htm"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <em>verify company</em>
                        </a>
                        <br />
                        <a
                           href="https://economictimes.indiatimes.com/topic/Indo-Italian-Chamber-of-Commerce"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <em>The Economic times</em>
                        </a>
                        <br />
                        <a
                           href="https://www.mef.gov.it/en/index.html"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <em>Mef Italia</em>
                        </a>
                        <br />
                        <a
                           href="https://www.euronews.com/2020/07/17/italian-police-intercept-coffee-beans-stuffed-with-cocaine"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <em>War on drugs</em>
                        </a>
                        <br />
                        <a
                           href="https://en.wikipedia.org/wiki/Economy_of_Cameroon"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <em>Cameroon's economy</em>
                        </a>
                        <br />
                        <a
                           href="https://en.wikipedia.org/wiki/Economy_of_Nigeria"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <em>Nigeria's economy</em>
                        </a>
                        <br />
                        <a
                           href="https://www.alibaba.com"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <em>Alibaba</em>
                        </a>
                        <br />
                        <a
                           href="https://www.europages.com"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <em>Europages</em>
                        </a>
                        <br />
                        <a
                           href="https://www.xe.com"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <em>Convert Currency</em>
                        </a>
                     </p>
                  </div>
               </div>
            </div>
            <h1 style={{ textAlign: "center" }}>
               <mark style={{ textDecoration: "underline" }}>
                  YOUR LOCATION.
               </mark>
               Initiate a long lasting business relationship with a message or a
               call <a href="/contact">Contact Page</a>
            </h1>
            <MyMap />
         </section>
      </div>
   );
};

export default About;
