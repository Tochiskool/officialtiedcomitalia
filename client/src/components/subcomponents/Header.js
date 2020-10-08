import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Img from "react-cool-img";
import { Helmet } from "react-helmet";

class Header extends React.Component {
   constructor(props) {
      super(props);
      this.state = { display: "block" };
      this.clickHanler = this.clickHanler.bind(this);
   }

   clickHanler() {
      let navi = document.querySelector(".nav-primary");
      if (navi.style.display === "block") {
         navi.style.display = "none";
      } else {
         navi.style.display = "block";
      }
   }
   render() {
      // console.log(this.props.images);
      return (
         <div>
            <Helmet>
               <meta
                  httpEquiv="Content-Type"
                  content="text/html; charset=utf-8"
               />
               <title>Middle man, Maiden in Business</title>
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
            <header className="header-primary" data-aos="zoom-out-up">
               <a href="/" className="logo logo-primary">
                  <Img src="images/logoMain.jpg" alt="Logo main" cache />
               </a>

               <div>
                  <div
                     className="btn btn-primary btn-toggle-menu"
                     onClick={this.clickHanler}
                  >
                     Menu
                  </div>
                  <Navbar />
               </div>
            </header>
            <HeroSection
               heading={this.props.heading}
               subheading={this.props.subheading}
               para={this.props.para}
            />
         </div>
      );
   }
}
export default Header;
