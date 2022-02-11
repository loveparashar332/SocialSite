import React, { Component } from "react";
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";
import axios from "axios";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    remember: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // axios.post()
    // save jwt token
  };
  render() {
    // console.log(this.props.history.push('/dashboard') )
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 my-5">
              <h3>NARI: Ministry of Women and Child Development</h3>
              <h6>Your Network is Your Net Worth</h6>
              <a href="">
                <p style={{ fontSize: "14px" }}>Change Language भाषा बदलो</p>
              </a>
            </div>
            <div class="col-lg-4 my-5" style={{ textAlign: "right" }}>
              <h6>Don't have any account? <a href="/register">Sign Up</a></h6>
              <TwitterFollowButton screenName={"ministrywcd"} />
            </div>
          </div>
          <div class="row" style={{ marginTop: "50px"}}>
            <div className="col-lg-6">
              <form onSubmit={this.handleSubmit}>
                <h4>Login to Dashboard</h4>
                <br></br>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                    style={{ width: "60%" }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    style={{ width: "60%" }}
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="remember"
                    name="remember"
                  />
                  <label className="form-check-label" htmlFor="remember">
                    Remember Me
                  </label>
                </div>
                <p>
                  <a href="" style={{ color: "pink" }}>
                    Terms and Conditions
                  </a>
                </p>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ background: "#F4508D", border: "0px" }}
                >
                  <a href="/dashboard" className="btn btn-outline-primary">Submit</a>
                </button>
              </form>
            </div>
            <div class="col-lg-6">
            <img  src={require("../assets/images/login1.jpg")} style={{width:"90%",height:"100%"}}></img>
            {/* <iframe width="650" height="400" src="https://www.youtube.com/embed/bzjnuzNlp64" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          </div>
          </div>
        </div>
      </div>
    );
  }
}



