import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Products = React.lazy(() => import("./components/Products"));
const Contact = React.lazy(() => import("./components/Contact"));
const Footer = React.lazy(() => import("./components/Footer"));

const App = () => (
   <BrowserRouter>
      <div className="containerSm">
         <div className="rowSm">
            <main className="background-main">
               <Suspense fallback={<div>Loading...</div>}>
                  <Switch>
                     <Route exact path="/" component={Home} />

                     <Route exact path="/about" component={About} />

                     <Route exact path="/products" component={Products} />

                     <Route exact path="/contact" component={Contact} />
                  </Switch>
                  <Route component={Footer} />
               </Suspense>
            </main>
         </div>
      </div>
   </BrowserRouter>
);

export default App;
