import React, { Component } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Helmet } from "react-helmet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

var myIcon = L.icon({
   iconUrl: "./images/locationW.jpg",
   iconSize: [38, 95],
   iconAnchor: [12.5, 41],
   popupAnchor: [0, -41],
});

class MyMap extends Component {
   state = {
      location: {
         lat: 45.641475,
         lng: 13.77623,
      },
      haveUsersLocation: false,
      zoom: 2,
   };
   componentDidMount() {
      navigator.geolocation.getCurrentPosition(
         (position) => {
            // console.log(position);
            this.setState({
               location: {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
               },
               haveUsersLocation: true,
               zoom: 15,
            });
         },
         () => {
            console.log("Uh Ooh.. You didn't provide your location");
            fetch("https://ipapi.co/json")
               .then((res) => res.json())
               .then((location) => {
                  // console.log(location);
                  this.setState({
                     location: {
                        lat: location.latitude,
                        lng: location.longitude,
                     },
                     haveUsersLocation: true,
                     zoom: 15,
                  });
               })
               .catch((error) => {
                  console.log(error);
               });
         }
      );
   }
   render() {
      const position = [this.state.location.lat, this.state.location.lng];
      return (
         <section>
            <Helmet>
               <meta
                  httpEquiv="Content-Type"
                  content="text/html; charset=utf-8"
               />
               <title>Location</title>
               <meta
                  name="Location"
                  content="Italian shoes, Italian fabrics brand new and second handed grade A B, beverages, sanitary
               products, fashion wears, import export, maiden in business, representative"
               />
               <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
               />
            </Helmet>
            <Map id="mapid" center={position} zoom={this.state.zoom}>
               <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
               {this.state.haveUsersLocation ? (
                  <Marker position={position} icon={myIcon} className="imb">
                     <Popup>
                        TIEDCOM ITALIA. <br /> SEND AN EMAIL <br /> Make an
                        Appointment.
                     </Popup>
                  </Marker>
               ) : (
                  ""
               )}
            </Map>
         </section>
      );
   }
}
export default MyMap;
