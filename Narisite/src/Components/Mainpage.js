import React, { Component } from "react";
import {Link} from "react-router-dom";
import { TwitterTimelineEmbed,TwitterFollowButton} from 'react-twitter-embed';
import "../assets/css/mainpage.css";
import "../assets/css/scroll.css";


export default class Mainpage extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 my-5">
                <h3>Site: For Women and child Empowerment</h3>
                <h6>Connect to Get more Insights</h6>
                <a href=""><p style={{fontSize:"14px"}}>Change Language भाषा बदलो</p></a>
            </div>
            <div class="col-lg-4 my-5" style={{textAlign:"right"}}>
              <h5><a className="btn btn-outline-warning" href="/login">Login</a> &nbsp; 
              <a className="btn btn-outline-danger" href="/register">Sign Up</a></h5>
              {/* <iframe width="650" height="400" src="https://www.youtube.com/embed/bzjnuzNlp64" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
              <TwitterFollowButton screenName={'ministrywcd'}/>
            </div>
          </div>
          <div class="row">
          {/* {require("../assets/images/community.jpg")} */}
          
            <img  src="https://ohsonline.com/-/media/OHS/OHS/Images/2020/03/InternationalWomensDay.jpg" style={{width:"100%",height:"60%"}}></img>
          </div>
          <div class="row my-5"> 
            <div class="col-lg-8">
              <h4>About Nari</h4>
              <hr></hr>
                <p>
                Women Empowerment includes the action of raising the status of women through education, raising awareness, literacy, and training. Our aim is to bring Empowerment by bringing significance to one’s emotional being. NARI is a web app that is building a emerging , enhancing and interactive community.where women will be encouraged, empowered according to her emotional aspect. 
              </p> 
              <h4>Why Nari?</h4>
              <hr></hr>
              <p>NARI is a web app that is building a emerging , enhancing and interactive community.where women will be encouraged, empowered according to her emotional aspect. NARI build a community where women can read blogs,and videos and empower herselves. mereover it has DIDI which is a very interactive chatbot for consulting about their career opportunity. <br></br>NARI has a interactive SOS, So that she can use it when she is feeling unsafe in unknown area. an interactive map will provide them nearest Police station,Hospitals and some reliable places</p>
              <div>
              <iframe width="650" height="400" src="https://www.youtube.com/embed/bzjnuzNlp64" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div class="col-lg-4">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="ministrywcd"
              options={{height: 400}}
            />
            </div>
          </div>
          <div class="row">
            <p style={{fontSize:"14px"}}>&nbsp;&nbsp;&nbsp;&nbsp;Developed and Managed by Love!!</p>
          </div>
        </div>
      </div>
    );
  }
}

