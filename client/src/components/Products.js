import React, { useEffect } from "react";
import Header from "./subcomponents/Header";
import Frames from "./productcomponent/Frames";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";

const Products = () => {
   useEffect(() => {
      Aos.init({ duration: 2000 });
   }, []);
   let array = [
      {
         id: 0,
         prodotto:
            "Commercio all'ingrosso di autoveicoli, roulette e motocicli, cfr, 45.1,45.4",
      },
      {
         id: 1,
         prodotto:
            "commercio all'ingrosso di accessori per autoveicoli e motocicli, cfr, 45.31,45.40",
      },
      { id: 2, product: "Noleggio e leasing di beni , cfr divisione . 77" },
      {
         id: 3,
         prodotto:
            "imballaggio di merci solide e imbottigliamento di merci liquide o gassose, inclusa la miscelatura e il filtraggio per conto terzi, cfr 82.92",
      },
   ];
   let elements = array.map((item) => {
      return (
         <li key={item.id}>
            {" "}
            <em>
               {" "}
               <mark>Prodotto: {item.prodotto}</mark>
            </em>
         </li>
      );
   });
   return (
      <div>
         <Helmet>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <title>Tiedcom Italia's products List</title>
            <meta
               name="What we deal on and gallery"
               content="Italian shoes, Italian fabrics brand new and second handed grade A B, beverages, sanitary
               products, fashion wears, import export, maiden in business, representative"
            />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
         </Helmet>
         <Header
            heading="We have a few no go zone when it comes to products we deal with"
            subheading="We deal from raw materials to finished products"
            para="Get in touch"
         />
         <section>
            <div className="container">
               <div className="row" data-aos="flip-right">
                  <h1>
                     <mark translate="true">
                        <strong>
                           <em>
                              We have an array of diverse Products we deal on
                              but however there are a few we have nothing to do
                              with mindful of our business regime, but we
                              however strongly believe our sincere advice can
                              help you if need be.
                           </em>
                        </strong>
                     </mark>
                  </h1>
                  <h2>First what we deal on:</h2>

                  <div data-aos="flip-left">
                     <p translate="true">
                        {" "}
                        <em>
                           Questa divisione include il commercio all'ingrosso
                           per conto proprio o per conto terzi (Vendita su
                           commissione), a livello nazionale o
                           internazionale(import/export)
                        </em>
                     </p>
                  </div>
                  <h2>Find hereunder a list of products we don't deal on</h2>
                  <div data-aos="flip-left">
                     <ol style={{ fontSize: "2rem" }} translate="yes">
                        {elements}
                     </ol>
                  </div>
               </div>
            </div>
         </section>

         <section>
            <div className="container" data-aos="flip-left">
               <h1>
                  <em>Gallery</em>
               </h1>
               <div className="row">
                  <div className="col-1-5" style={{ position: "relative" }}>
                     <Frames img={"images/designers.jpg"} />
                     <a
                        style={{ position: "absolute", top: 150, left: 80 }}
                        href="/"
                     >
                        Designers Dresses
                     </a>
                  </div>
                  <div className="col-1-5" style={{ position: "relative" }}>
                     <Frames img={"images/FreshMoringa.jpg"} />
                     <a
                        style={{ position: "absolute", top: 150, left: 80 }}
                        href="/"
                     >
                        Fresh to Powdered Moringa
                     </a>
                  </div>
                  <div className="col-1-5" style={{ position: "relative" }}>
                     <Frames img={"images/gnutss.jpg"} />
                     <a
                        style={{ position: "absolute", top: 150, left: 80 }}
                        href="/"
                     >
                        GroundNuts
                     </a>
                  </div>

                  <div className="col-1-5" style={{ position: "relative" }}>
                     <Frames img={"images/RedOil.jpg"} />
                     <a
                        style={{ position: "absolute", top: 150, left: 80 }}
                        href="/"
                     >
                        Unrefined palm oil
                     </a>
                  </div>
                  <div className="col-1-5" style={{ position: "relative" }}>
                     <Frames img={"images/designers.jpg"} />
                     <a
                        style={{ position: "absolute", top: 150, left: 80 }}
                        href="/"
                     >
                        Designers Dresses
                     </a>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Products;
