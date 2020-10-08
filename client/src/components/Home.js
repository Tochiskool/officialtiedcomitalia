import React, { useEffect } from "react";
import Testimonial from "./subcomponents/Testimonial";
import BackgroundImage from "./subcomponents/BackgroundImage";
import News from "./subcomponents/News";
import MediaObjects from "./subcomponents/MediaObjects";
import Header from "./subcomponents/Header";
import Img from "react-cool-img";
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Home = () => {
   useEffect(() => {
      Aos.init({ duration: 2000 });
   }, []);
   return (
      <div>
         <Helmet>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <title>Welcome to TiedCom Italia</title>
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
         <Header
            heading="TLinker IMPORT EXPORT AND DISTRIBUTION COMPANY ITALY (TIEDCOM
               ITALIA)"
            subheading="Wholesale dealer, national and international"
            para="Know more"
         />
         <section>
            <div className="container" data-aos="fade-up-right">
               <div className="row">
                  <div className="col-1-3 pull-right-sm">
                     <div className="frame frame-primary">
                        <Img
                           src="images/designers.jpg"
                           alt="Background pics"
                           cache
                        />
                     </div>
                  </div>
                  <div className="col-2-3" data-aos="flip-left">
                     <h1>Welcome to TiedCom Italia</h1>
                     <p>
                        Tiedcom is a small company that is willing to cooperate,
                        collaborate and learn while exploring and creating new
                        opportunities in Italy and the world at large. We are a
                        flexible company with a very small limit on what we
                        can't deal with. We are dynamic, enthausiatic and
                        resilient as we work hard to satisfy our customers
                        needs.That is why you have to waste no time in getting
                        to know us.
                        <a href="/about">
                           <em>Readmore</em>
                        </a>
                     </p>
                  </div>
               </div>
            </div>
            <BackgroundImage
               image={"images/pasta.jpg"}
               heading="Import export and wholesale merchandise"
               subtitle="Edible stuffs, durable goods"
            />
            <News
               index0={0}
               index1={1}
               heading={[
                  " Designer Dresses/Shoes/Bags/Suits",
                  "Grade A and B Second handed",
               ]}
               subheading={[
                  "All exports SGS seals",
                  "Used dressed of different grades A/B",
               ]}
            />
            <Testimonial />
            <BackgroundImage
               image={"images/Big-warehouse.jpg"}
               heading="Storage facilites"
               subtitle="We have Realible storage facilites as per need"
            />

            <MediaObjects />
         </section>
      </div>
   );
};

export default Home;
