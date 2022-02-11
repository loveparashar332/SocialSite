import React, { Component } from 'react'
import axios from 'axios';

export default class Register extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-4 px-4" style={{marginTop:'80px',marginLeft:"90px"}}>
          <form onSubmit={this.handleSubmit}>
            <h1 style={{color:"#63A026",fontSize:"60px"}}>Nari-<i>Register</i></h1>
            <h4 style={{fontFamily: "'IM Fell Great Primer', serif",color:"#013529"}}>- I am stronger than fear</h4><br/>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" style={{width:"60%"}}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" style={{width:"60%"}}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" name="password" style={{width:"60%"}}/>
            </div>
            <div className="form-group">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input type="password" className="form-control" id="password" name="confirmpassword" style={{width:"60%"}}/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="remember" name="remember"/>
              <label className="form-check-label" htmlFor="remember">Remember Me</label>
            </div>
            <p><a href="" style={{color:"#8FBB07"}}>Terms and Conditions</a></p>
            <button type="submit" className="btn btn-primary" style={{background:"#63A026",border:"0px"}}>Verify and Submit</button>
          </form>
        </div>
        <div className="col-lg-6 mx-auto" >
          <center>
            <img src={require(`../assets/images/login1.jpg`)} style={{width:'75%',height:'90%',marginTop:"60px"}}/>
          </center>
          <h1></h1>
        </div>
      </div>
    )
  }
}
