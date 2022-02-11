import React, { Component } from "react";
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";
import axios from "axios";
import Map from "mapmyindia-react"; 
import GoogleMapReact from 'google-map-react';
// import Map from "./Map";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };
 
//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyChM89_AuTn9M7jHHI2NvWMuBlpAMPyT2c' }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }


export default class Safety extends Component {
  state = {
    text: {
      recipient: "+917891217760",
      textmessage: "Hiii",
    },
  };
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  showPosition(position) {
    var x = document.getElementById("demo");
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
  }
  handleClick(e){
    var x = document.getElementById("demo");
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  render() {
    let status;
    if(this.state.location) 
      status = <button class="btn btn-sm btn-warning" onClick={this.handleClick}>Allow Location to be Accessed Manually</button>
    else{
      status = <button class="btn btn-sm btn-success">Location Accessible</button>
    }
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-9 my-5">
            <h3>Site : For Women and child development</h3>
            <h6>Connect to get more insights</h6>
            <a href="">
              <p style={{ fontSize: "14px" }}>Change Language भाषा बदलो</p>
            </a>
            {status}
            <p id="demo"></p>
          </div>
          
          <div class="dropdown col-lg-3 my-5 ">
            <button  class="bg-transparent "><a className='badge badge-light' href="/dashboard"><i style={{fontSize:'2em', }} class="fa fa-home" aria-hidden="true"></i></a> </button>
                <button data-letters="A" class="bg-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">  
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a data-letters="A" class="dropdown-item" href="#">Love Parashar</a>
                  <p className='text-muted text-center' style={{fontSize:'0.8em'}}>IT engineer | DTU</p>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Profile</a>
                  <a class="dropdown-item" href="/login">LogOut</a>
               </div>
              </div></div>
               
        <div className="row">
          {/* <Map/> */}
          {/* <SimpleMap/> */}
            <Map
              markers={[
                {
                  position: [18.5314, 73.845],
                  draggable: true,
                  title: "Marker title",
                  onClick: (e) => {
                    console.log("clicked ");
                  },
                  onDragend: (e) => {
                    console.log("dragged");
                  },
                },
              ]}
            />
            <hr style={{ background: "#63A026", color: "#63A026" }} />
        </div>
              <br/><br/><br/>
      <div className="footer">
        <div class="footer-copyright text-center">© 2020 Copyright:
          <a href="https://love-my-app.herokuapp.com/"> Love parashar</a>
        </div>
      </div>
      </div>
    );
  }
}
