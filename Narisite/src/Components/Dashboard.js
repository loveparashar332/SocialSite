import React, { Component } from "react";
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";
import "../assets/css/dashboard.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {display: "inline"};
    this.handleMood = this.handleMood.bind(this);
  }
  handleMood(e){
    console.log("New Here")
    this.setState((state)=>{
      return {display:"none"}
    });
    alert('Response Saved! Thank you for submitting your response 🦄.')
  }
  
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 my-5">
              <h3>Site: For Women and child Empowerment</h3>
              <h6>Connect to Get Better Insight</h6>
              <a href="#">
                <p style={{ fontSize: "14px" }}>Change Language भाषा बदलो</p>
              </a>
            </div>
            <div class="col-lg-4 my-5" style={{ textAlign: "right" }}>
            <div class="dropdown">
                <button data-letters="LP" class="bg-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a data-letters="LP" class="dropdown-item" href="#">Love Parashar</a>
                  <p className='text-muted text-center' style={{fontSize:'0.8em'}}>IT engineer| DTU</p>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Profile</a>
                  <a class="dropdown-item" href="/login">LogOut</a>
               </div>
              </div>
              
              <button
                type="submit"
                className="btn btn-sm btn-primary"
                style={{ background: "#F4508D", border: "0px" }}
              >
                <a href="/editor" className="btn btn-primary btn-sm" style={{color:"white"}}>Write an Article  <span role='img' description='aria-label'>✍️</span> </a>
              </button>
            </div>
          </div>
          <div class="row" id="mood" style={{display: `${this.state.display}` }}>
            <div class="col-lg-6 my-3">
              <h6>
                Good Morning Love, today we have a Quick Mood Test! We are
                with you in your every ups and downs!!
              </h6>
              <h2>How are you feeling today?</h2>
              <div className="row">
                <button className="feedback" onClick={this.handleMood} style={{ fontSize: "40px" }}>
                  😣
                </button>
                <button className="feedback" onClick={this.handleMood} style={{ fontSize: "40px" }}>
                  😔
                </button>
                <button className="feedback" onClick={this.handleMood} style={{ fontSize: "40px" }}>
                  ☹️
                </button>
                <button className="feedback" onClick={this.handleMood} style={{ fontSize: "40px" }}>
                  😶
                </button>
                <button className="feedback"  onClick={this.handleMood} style={{ fontSize: "40px" }}>
                  🙂
                </button>
                <button className="feedback" onClick={this.handleMood} style={{ fontSize: "40px" }}>
                  😀
                </button>
                <button className="feedback" onClick={this.handleMood} style={{ fontSize: "40px" }}>
                  😎
                </button>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "40px" }}>
            <h3>Safety First</h3>
            You are in a <button class="btn btn-sm btn-success">SAFE</button> location!! Check <a href="/safety">Here</a> to get full
            details. Below are some nearby landmarks.
            <br></br>
            <div class="row my-2 mx-1">
              <table class="table table-bordered" style={{color:"white"}}>
                <thead>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Police Station</th>
                    <th scope="col">Hospital</th>
                    <th scope="col">Public Park</th>
                    <th scope="col">Resturant</th>
                    <th scope="col">Hotel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Name</th>
                    <td>Meera Chowk Police Station</td>
                    <td>Giri Hospital</td>
                    <td>Adarsh Park</td>
                    <td>Marky Momos</td>
                    <td>Hotel Grand Canyon</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone Number</th>
                    <td><a href="tel:+91-9367262527">9367262527</a></td>
                    <td><a href="tel:+91-8527623732">8527623732</a></td>
                    <td><a href="tel:+91-9273489222">9273489222</a></td>
                    <td><a href="tel:+91-8700087000">8700087000</a></td>
                    <td><a href="tel:+91-7834578438">7834578438</a></td>
                  </tr>
                  <tr>
                    <th scope="row">Location</th>
                    <td><a href="https://goo.gl/maps/KgBwLdoqQVGCJ9mt7">Location Here</a></td>
                    <td><a href="https://goo.gl/maps/KgBwLdoqQVGCJ9mt7">Location Here</a></td>
                    <td><a href="https://goo.gl/maps/KgBwLdoqQVGCJ9mt7">Location Here</a></td>
                    <td><a href="https://goo.gl/maps/KgBwLdoqQVGCJ9mt7">Location Here</a></td>
                    <td><a href="https://goo.gl/maps/KgBwLdoqQVGCJ9mt7">Location Here</a></td>
                  </tr>
                </tbody>
              </table>
              <br></br>
            </div>
            <div style={{ marginTop: "40px" }}>
              <h3>Articles Hand Crafted for you!</h3>
              <p>Recommendations are based on previous searches! Find more articles <a href="/glossary">here</a></p>
              <div
                class="input-group input-group-sm mb-3"
                style={{ width: "40%" }}
              >
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    <a href="/articlelist/cooking">Search By Keyword</a>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="tagsearch"
                  name="tagsearch"
                  list="browsers"
                ></input>
                <datalist id="browsers">
                <option value="Defense and Training"/>
                <option value="Career Option"/>
                <option value="Parenting"/>
                <option value="Societal Pressure"/>
                <option value="BMI"/>
                <option value="Home Decor"/>
                <option value="Moderator"/>
                <option value="Diet"/>
                <option value="Cooking"/>
              </datalist>
              </div>
              <h5>Defense and Training</h5>
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all 2.0"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/def1.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                  <h5 class="card-title" style={{color:"pink"}}>Learn Judo in 15 days</h5>
                  <p class="card-text" style={{color:"pink"}}>Is 15/16 not too late to start practising judo (to compete in more serious competitions later)?</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/article/343782238" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/def2.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                <h5 class="card-title" style={{color:"pink"}}>Prepare for Indian Army Exam</h5>
                  <p class="card-text" style={{color:"pink"}}>In this article, you can find the details on these Indian army entries and exams and how one can preparing these...</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/article/375347838" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/def3.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                <h5 class="card-title" style={{color:"pink"}}>How to start with Taijutsu</h5>
                  <p class="card-text" style={{color:"pink"}}>Taijutsu is a Japanese blanket term for any combat skill, technique or system of martial art using body movements...</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/article/384732233" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/def4.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                <h5 class="card-title" style={{color:"pink"}}>Start Local Defense Community</h5>
                  <p class="card-text" style={{color:"pink"}}>Defence families are strongest when they are connected with their local communities. We provide a number of support..</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/article/387323892" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
              </Carousel>
              <h5 style={{marginTop:"30px"}}>Cooking</h5>
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all 2.0"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/cake.jpeg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                  <h5 class="card-title" style={{color:"pink"}}>Learn Judo in 15 days</h5>
                  <p class="card-text" style={{color:"pink"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/editor" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/pizza.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                <h5 class="card-title" style={{color:"pink"}}>Prepare for Indian Army Exam</h5>
                  <p class="card-text" style={{color:"pink"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/editor" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/burger.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                <h5 class="card-title" style={{color:"pink"}}>How to start with Ninjutsu</h5>
                  <p class="card-text" style={{color:"pink"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/editor" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/food.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                <h5 class="card-title" style={{color:"pink"}}>Start Local Defense Community</h5>
                  <p class="card-text" style={{color:"pink"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/editor" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
              </Carousel>
              {/* <h5 style={{marginTop:"30px"}}>Art and Craft</h5> */}
              {/* <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all 2.0"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <div class="card" style={{width: "22rem"}}>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="card-link">
                      Card link
                    </a>
                    <a href="#" class="card-link">
                      Another link
                    </a>
                  </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="card-link">
                      Card link
                    </a>
                    <a href="#" class="card-link">
                      Another link
                    </a>
                  </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="card-link">
                      Card link
                    </a>
                    <a href="#" class="card-link">
                      Another link
                    </a>
                  </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="card-link">
                      Card link
                    </a>
                    <a href="#" class="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </Carousel> */}
            </div>
          </div>
          <div class="row my-3">
            <p style={{fontSize:"14px"}}>&nbsp;&nbsp;&nbsp;&nbsp;Developed and Managed by Love!!</p>
          </div>
        </div>
      </div>
    );
  }
}
