import Link from "next/link";
import React from "react";
import "../about/about.css";
// import Breadcrumb from "../common/Breadcrumb";

function AboutArea() {
  return (
    <section id="down"  style={{backgroundColor:"white"}}>
      {/* <Breadcrumb pageName="About Us" pageTitle="About Us" /> */}
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 wow animate fadeInLeft"
            data-wow-delay="1800ms"
            data-wow-duration="1500ms"
          >
            <div className="about-left">
              <div className="about-title">
                <span>About Us!</span>
                
                  
                <b> <br/> Transform Your Home with Top-Quality<br /> Services: Discover the
                  Ultimate Home <br/>Service Provider for All Your Needs!</b>
                
              </div>
              <div className="about-title"><br/>
                <b style={{fontSize:"20px",marginLeft:"0"}}>Welcome to WorkDeal!</b>

                <p>
                  {" "}
                  Your premier destination for all your home service needs. We
                  are a <br/>trusted and reliable online platform that connects
                  homeowners with top- <br/>rated service professionals in their local
                  area. Our goal is to make it <br/>effortless for you to find and
                  hire experienced professionals who can<br /> provide high-quality
                  services to enhance your home.
                </p>
             
              <p>
                we aim to be your first choice resource for all your home
                service needs.<br/> Explore our website today and take the first step
                towards enhancing your <br/>home with the help of trusted experts.
              </p> </div>
              <ul className="feature-list">
                <li>
                 <img src={"assets/images/check-all-svgrepo-com.svg"} alt=""  style={{width:"25"}}/>
               <h5 style={{marginTop:"-30",marginLeft:"30"}}>   Join us Today.</h5>
                </li>
                <li>
                <img src={"assets/images/check-all-svgrepo-com.svg"} alt=""  style={{width:"25"}}/>
                <h5 style={{marginTop:"-30",marginLeft:"30"}}>  Let us find you best service provider.</h5>
                </li>
              </ul>

              <div className="cmn-btn">
                <Link legacyBehavior href="/account">
                  <a>Join Now</a>
                </Link>
              </div>
              <div className="feature-counts">
                <div className="single-count">
                  <span className="counter">40</span>
                  <span>+</span>
                  <h5>Team Member</h5>
                </div>
                <div className="single-count" style={{marginLeft:"80"}}>
                  <span className="counter">1550</span>
                  <span>+</span>
                  <h5>Satisfied Client</h5>
                </div>
                <div className="single-count" style={{marginLeft:"80"}}>
                  <span className="counter">20</span>
                  <span>+</span>
                  <h5>Services</h5>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 wow animate fadeInRight"
            data-wow-delay="1800ms"
            data-wow-duration="1500ms"
          >
            <div className="about-right">
              <div className="shape">
                <img src="assets/images/about/about-shape.png" alt="" />
              </div>
              <div className="frame-1">
                <div className="img-1">
                  <img src="assets/images/about/about-banner-1.jpg" alt="" />
                </div>
              </div>
              <div className="frame-2">
                <div className="img-1">
                  <img src="assets/images/about/about-banner-2.jpg" alt="" />
                </div>
                <div className="img-2">
                  <img src="assets/images/about/about-banner-3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutArea;

