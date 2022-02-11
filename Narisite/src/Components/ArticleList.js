import React, { Component } from 'react'
import Carousel from "react-multi-carousel";

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

export default class ArticleList extends Component {
    
    render() {
        return (
            <div class="container">  
            <div class="row">
            <div class="col-lg-8 my-5">
              <h3>NARI: Ministry of Women and Child Development</h3>
              <h6>Your Network is Your Net Worth</h6>
              <a href="#">
                <p style={{ fontSize: "14px" }}>Change Language भाषा बदलो</p>
              </a>
            </div>
            <div class="col-lg-4 my-5" style={{ textAlign: "right" }}>
            <div class="dropdown">
                <button data-letters="AG" class="bg-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a data-letters="AG" class="dropdown-item" href="#">Love Parashar</a>
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
                <h4>Cooking Articles</h4>
                <p>Specially Brewed for you ☕</p>
                <br/>
                <div>
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
                <img src={require('../assets/images/cook1.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                  <h5 class="card-title" style={{color:"pink"}}>lemon herb pasta salad with marinated chickpeas</h5>
                  <p class="card-text" style={{color:"pink"}}>Packed with tangy marinated chickpeas, chewy pasta, lots of herbs and garlic, lemon juice and olive oil, and a handful of parmesan to top it off.</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/article/343782238" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/cook2.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                <h5 class="card-title" style={{color:"pink"}}>PEDA RECIPE | HOW TO MAKE MILK PEDA OR DOODH PEDA</h5>
                  <p class="card-text" style={{color:"pink"}}>Peda recipe – 2 ways to make instant peda in 15 mins. Doodh peda is a popular Indian sweet made with milk...</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/article/375347838" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/cook 3.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                <h5 class="card-title" style={{color:"pink"}}>Cucumber agua fresca</h5>
                  <p class="card-text" style={{color:"pink"}}>Cucumber Agua Fresca! Cucumber, lime, mint, lemongrass, sugar, and honey. The perfect tart + fresh summery drink!</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/article/384732233" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/cook4.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                <h5 class="card-title" style={{color:"pink"}}>Lemon Cake</h5>
                  <p class="card-text" style={{color:"pink"}}>Luscious lemon cake layers, homemade lemon curd, with light and fluffy frosting make this Lemon Cake an instant classic.</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/article/387323892" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
              </Carousel>
              <br/><br/>
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
                                  <h5 class="card-title" style={{color:"pink"}}>LEMON CAKE</h5>
                                  <p class="card-text" style={{color:"pink"}}>Luscious lemon cake layers, homemade lemon curd, with light and fluffy frosting make this Lemon Cake an instant classic</p>
                                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                                  <a href="/editor" style={{color:"white"}}>Read More ✍️</a>
                                  </button>
                                </div>
                                </div>
                                <div class="card" style={{width: "22rem"}}>
                                <img src={require('../assets/images/pizza.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                                <div class="card-body">
                                <h5 class="card-title" style={{color:"pink"}}>Restaurant Style Pizza at home</h5>
                                  <p class="card-text" style={{color:"pink"}}>The secret to pizza making lies in the sauce. Lets see how to make it.</p>
                                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                                  <a href="/editor" style={{color:"white"}}>Read More ✍️</a>
                                  </button>
                                </div>
                                </div>
                                <div class="card" style={{width: "22rem"}}>
                                <img src={require('../assets/images/burger.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                                <div class="card-body">
                                <h5 class="card-title" style={{color:"pink"}}>Perfect Burger</h5>
                                  <p class="card-text" style={{color:"pink"}}>For me, burgers don’t need a lot going on. A nice crust on a juicy patty with American cheese, a slice or two of tomato, green leaf lettuce and a bit of sauce.</p>
                                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                                  <a href="/editor" style={{color:"white"}}>Read More ✍️</a>
                                  </button>
                                </div>
                                </div>
                                <div class="card" style={{width: "22rem"}}>
                                <img src={require('../assets/images/food.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                                <div class="card-body">
                                <h5 class="card-title" style={{color:"pink"}}>Indian Food for health</h5>
                                  <p class="card-text" style={{color:"pink"}}>Indian food is believed to be good not only in nutritions but the spices play a vital role too.</p>
                                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                                  <a href="/editor" style={{color:"white"}}>Read More ✍️</a>
                                  </button>
                                </div>
                                </div>
              </Carousel>
              <br/><br/>
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
                                <img src={require('../assets/images/cook1.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                                <div class="card-body">
                                  <h5 class="card-title" style={{color:"pink"}}>lemon herb pasta salad with marinated chickpeas</h5>
                                  <p class="card-text" style={{color:"pink"}}>Packed with tangy marinated chickpeas, chewy pasta, lots of herbs and garlic, lemon juice and olive oil, and a handful of parmesan to top it off.</p>
                                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                                  <a href="/article/343782238" style={{color:"white"}}>Read More ✍️</a>
                                  </button>
                                </div>
                                </div>
                                <div class="card" style={{width: "22rem"}}>
                                <img src={require('../assets/images/cook2.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                                <div class="card-body">
                                <h5 class="card-title" style={{color:"pink"}}>PEDA RECIPE | HOW TO MAKE MILK PEDA OR DOODH PEDA</h5>
                                  <p class="card-text" style={{color:"pink"}}>Peda recipe – 2 ways to make instant peda in 15 mins. Doodh peda is a popular Indian sweet made with milk...</p>
                                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                                  <a href="/article/375347838" style={{color:"white"}}>Read More ✍️</a>
                                  </button>
                                </div>
                                </div>
                                <div class="card" style={{width: "22rem"}}>
                                <img src={require('../assets/images/cook 3.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                                <div class="card-body">
                                <h5 class="card-title" style={{color:"pink"}}>Cucumber agua fresca</h5>
                                  <p class="card-text" style={{color:"pink"}}>Cucumber Agua Fresca! Cucumber, lime, mint, lemongrass, sugar, and honey. The perfect tart + fresh summery drink!</p>
                                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                                  <a href="/article/384732233" style={{color:"white"}}>Read More ✍️</a>
                                  </button>
                                </div>
                                </div>
                                <div class="card" style={{width: "22rem"}}>
                                <img src={require('../assets/images/cook4.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                                <div class="card-body">
                                <h5 class="card-title" style={{color:"pink"}}>Lemon Cake</h5>
                                  <p class="card-text" style={{color:"pink"}}>Luscious lemon cake layers, homemade lemon curd, with light and fluffy frosting make this Lemon Cake an instant classic.</p>
                                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                                  <a href="/article/387323892" style={{color:"white"}}>Read More ✍️</a>
                                  </button>
                                </div>
                                </div>
              </Carousel>
              <br/><br/>
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
                  <h5 class="card-title" style={{color:"pink"}}>LEMON CAKE</h5>
                  <p class="card-text" style={{color:"pink"}}>Luscious lemon cake layers, homemade lemon curd, with light and fluffy frosting make this Lemon Cake an instant classic</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/editor" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/pizza.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                <h5 class="card-title" style={{color:"pink"}}>Restaurant Style Pizza at home</h5>
                  <p class="card-text" style={{color:"pink"}}>The secret to pizza making lies in the sauce. Lets see how to make it.</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/editor" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/burger.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                <h5 class="card-title" style={{color:"pink"}}>Perfect Burger</h5>
                  <p class="card-text" style={{color:"pink"}}>For me, burgers don’t need a lot going on. A nice crust on a juicy patty with American cheese, a slice or two of tomato, green leaf lettuce and a bit of sauce.</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/editor" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/food.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                <h5 class="card-title" style={{color:"pink"}}>Indian Food for health</h5>
                  <p class="card-text" style={{color:"pink"}}>Indian food is believed to be good not only in nutritions but the spices play a vital role too.</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/editor" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
              </Carousel>
                </div> 
            </div>
        )
    }
}
