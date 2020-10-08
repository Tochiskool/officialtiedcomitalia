import React from "react";
import { Prompt } from "react-router-dom";
import Header from "./subcomponents/Header";
import MyMap from "./subcomponents/MyMap";
// import Img from "react-cool-Img";
import { Helmet } from "react-helmet";
//import axios from "axios";

// import Aos from "aos";
// import "aos/dist/aos.css";
let header;
class Contact extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         companyName: "",
         email: "",
         phone: "",
         selectName: "",
         message: "",
         count: 1,
         date: "",
         posts: [],
      };
      this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
   }
   componentDidMount = () => {
      // this.getNewContact();
      // this.increaseCount();
      // this.displayContactMessage(this.state.posts);
   };

   // getNewContact = () => {
   //    axios
   //       .get("/")
   //       .then((response) => {
   //          const data = response.data;

   //          this.setState({ posts: data });
   //       })
   //       .catch(() => {
   //          console.log("Error occured");
   //       });
   // };
   handleChange(event) {
      //another sweet handle change, sweet and nice
      // this.setState({
      //    [event.target.name]: event.target.value,
      // });
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;

      this.setState({
         [name]: value,
      });
   }
   // handleSubmit(event) {
   //    event.preventDefault();
   //    const payload = {
   //       companyName: this.state.companyName,
   //       email: this.state.email,
   //       phone: this.state.phone,
   //       selectName: this.state.selectName,
   //       message: this.state.message,
   //       count: this.state.count,
   //       date: this.state.date,
   //    };
   //    alert("Your message has been submitted to TiedCom italia");
   //    axios({
   //       url: "/save",
   //       method: "POST",
   //       data: payload,
   //    })
   //       .then(() => {
   //          console.log(`Data has been sent to the server!!!`);
   //          this.resetUserInputs();
   //       })
   //       .catch(() => console.log(`Internal Error Occured!!`));
   // }
   resetUserInputs = () => {
      this.setState({
         companyName: "",
         email: "",
         phone: "",
         selectName: "",
         message: "",
      });
   };
   increaseCount = () => {
      let day = new Date().toLocaleDateString();
      let time = new Date().toLocaleTimeString();
      let today = `${day} ${time}`;
      this.setState(
         {
            count: this.state.count + 1,
            date: this.state.date + today,
         },
         () => {
            console.log(this.state.count, this.state.data);
         }
      );
   };
   displayContactMessage = (posts) => {
      //Code to present to client a response
      if (!posts.length) {
         return null;
      }

      const {
         companyName: cName,
         email: eMail,
         phone: pHone,
         selectName: sName,
         message: meSsage,
         count: countNow,
         date: dateNow,
      } = this.state;
      const companyN = this.state.companyName;
      header = companyN ? (
         <section className="background-tertiary">
            <div style={{ padding: "1rem" }}>
               <strong>
                  <em>
                     You are contacting TiedCom Italia today: {countNow} date:
                     {dateNow}
                  </em>
               </strong>
               <h1>
                  <em>
                     <strong>
                        We will receive the following information now
                     </strong>
                  </em>
               </h1>
               <p>
                  Welcome: <mark>{cName}</mark> <br />
                  Email: <mark>{eMail}</mark>
                  <br />
                  Number: <mark>{pHone}</mark>
                  <br />
                  Message: <mark>{meSsage}</mark>
                  <br />
                  Category: <mark>{sName}</mark>
               </p>
               <p>
                  <mark>
                     <strong>
                        We will send you a reply within 2 business days
                     </strong>
                  </mark>
               </p>
               <dl>
                  <dt>Administrator</dt>
                  <dd>Eleonora Periya</dd>
                  <dd>
                     <mark>Thanks</mark>
                  </dd>
                  <dd>{this.state.date}</dd>
               </dl>
            </div>
         </section>
      ) : (
         " "
      );
      return header;
   };

   render() {
      let arrOptions = ["Buyer", "Seller", "Proposal"];
      const options = arrOptions.map((item, index) => {
         return (
            <option key={index} value={item}>
               {item}
            </option>
         );
      });

      return (
         <section className="masterCard">
            <Helmet>
               <meta
                  httpEquiv="Content-Type"
                  content="text/html; charset=utf-8"
               />
               <title>Contact TieCom italia</title>
               <meta
                  name="Contact TiedCom Italia"
                  content="Italian shoes, Italian fabrics brand new and second handed grade A B, beverages, sanitary
               products, fashion wears, import export, maiden in business, representative"
               />
               <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
               />
            </Helmet>
            <Helmet>
               <meta
                  httpEquiv="Content-Type"
                  content="text/html; charset=utf-8"
               />
               <title>Contact TieCom italia</title>
               <meta
                  name="Contact TiedCom Italia"
                  content="Italian shoes, Italian fabrics brand new and second handed grade A B, beverages, sanitary
               products, fashion wears, import export, maiden in business, representative"
               />
               <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
               />
            </Helmet>
            <Header
               heading="Fill the contact form and we will get back to you asap"
               subheading="Please make sure to specify your category"
               para={
                  <img
                     src="images/pointer.gif"
                     width={80}
                     alt="Point to contact"
                  />
               }
            />
            <article>
               <MyMap />
               <h1
                  style={{
                     textAlign: "center",
                     textDecoration: "underline",
                  }}
               >
                  You are Here, Contact Form Below
               </h1>
            </article>
            <section>
               <div className="container">
                  <div className="row">
                     <div className="formBox">
                        <div
                           style={{
                              textAlign: "center",
                              color: "white",
                              fontSize: "1200",
                           }}
                        >
                           <h1>TIEDCOM ITALIA</h1>
                           <h1>
                              <strong>
                                 <em>
                                    CONTACT FORM UNDER CONSTRUCTION, DO NOT USE
                                    THE FORM SEND AN EMAIL INSTEAD
                                 </em>
                              </strong>
                           </h1>
                           <h3>
                              <strong>
                                 <em>SEND AN EMAIL TO</em>
                              </strong>
                           </h3>
                           <a href="mailto:tiedcomimportexport@pecimprese.it">
                              CLICK <em>Here</em> TO SEND AN EMAIL
                           </a>
                        </div>
                        <div style={{ paddingBottom: "2rem" }} id="hide">
                           {this.displayContactMessage(this.state.posts)}
                        </div>
                        <form
                           className="formStyle formBox"
                           onSubmit={this.handleSubmit}
                        >
                           <fieldset>
                              <legend>
                                 <strong>
                                    <em>
                                       <mark
                                          style={{
                                             color: "white",
                                             fontSize: "2rem",
                                          }}
                                       >
                                          Get in Touch
                                       </mark>
                                    </em>
                                 </strong>
                              </legend>

                              <div
                                 className="formStyle"
                                 data-aos="flip-left"
                                 data-aos-easing="ease-out-cubic"
                                 data-aos-duration="2000"
                                 // data-aos="flip-up"
                              >
                                 <label
                                    htmlFor="companyName"
                                    // className="visuallyhidden"
                                 >
                                    Company Name:
                                 </label>
                              </div>
                              <div
                                 className="formStyle"
                                 data-aos="flip-left"
                                 data-aos-easing="ease-out-cubic"
                                 data-aos-duration="2000"
                              >
                                 <input
                                    type="text"
                                    id="companyName"
                                    value={this.state.companyName}
                                    onChange={this.handleChange}
                                    name="companyName"
                                    placeholder="Enter busines Name"
                                    aria-labelledby="companyName"
                                    required
                                 />
                              </div>
                              <div className="formStyle" data-aos="flip-down">
                                 <label
                                    htmlFor="email"
                                    // className="visuallyhidden"
                                 >
                                    Email:
                                 </label>
                              </div>
                              <div
                                 className="formStyle"
                                 data-aos="flip-left"
                                 data-aos-easing="ease-out-cubic"
                                 data-aos-duration="2000"
                              >
                                 <input
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    type="email"
                                    id="email"
                                    required
                                    name="email"
                                    placeholder="tiedcomeitalia@impressa.it"
                                    aria-labelledby="email"
                                 />
                              </div>
                              <div className="formStyle" data-aos="zoom-in-up">
                                 <label
                                    htmlFor="phone"
                                    // className="visuallyhidden"
                                 >
                                    Contact number:
                                 </label>
                              </div>
                              <div
                                 className="formStyle"
                                 data-aos="flip-up"
                                 // data-aos="flip-left"
                                 data-aos-easing="ease-out-cubic"
                                 data-aos-duration="2000"
                              >
                                 <input
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                    placeholder="+39-329-985-6890"
                                    aria-labelledby="phone"
                                 />
                              </div>
                              <div className="formStyle" data-aos="flip-down">
                                 <label
                                    htmlFor="category"
                                    // className="visuallyhidden"
                                 >
                                    Category
                                 </label>
                              </div>
                              <div className="formStyle">
                                 <div
                                    className="formStyle"
                                    data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000"
                                 >
                                    <select
                                       id="category"
                                       name="selectName"
                                       value={this.state.selectName}
                                       onChange={this.handleChange}
                                       aria-labelledby="selectName"
                                    >
                                       {options}
                                    </select>
                                 </div>
                              </div>

                              <div className="formStyle" data-aos="flip-up">
                                 <label
                                    htmlFor="message"
                                    className="visuallyhidden"
                                 >
                                    <em>Message</em>:
                                 </label>
                              </div>
                              <div
                                 className="formStyle"
                                 data-aos="flip-left"
                                 data-aos-easing="ease-out-cubic"
                                 data-aos-duration="2000"
                              >
                                 <textarea
                                    name="message"
                                    type="text"
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                    rows={10}
                                    cols={80}
                                    id="message"
                                    required
                                    placeholder="Enter message here"
                                    aria-labelledby="message"
                                 />
                              </div>
                           </fieldset>
                           <div className="btn-center">
                              <button
                                 type="submit"
                                 className="btn btn-primary btn-center"
                              >
                                 Submit
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </section>

            <Prompt message="It is more preferable to send a message to initiate the business" />
         </section>
      );
   }
}

export default Contact;
