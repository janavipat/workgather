"use client"
import React from "react";
import "./contact.css"
import Breadcrumb from "../common/Breadcrumb";

import { useContext,useEffect } from "react";
import  MyContext  from "../context"

function Contact() {
  const {isService}=useContext(MyContext);
  useEffect(()=>{
    console.log(isService)
  },[isService])
  return (
    <>
      <Breadcrumb pageName="Contact" pageTitle="Contact" />
      <section id="down" className="contact-us-area sec-m">
        <div className="container2">
          {/* <div className="contact-info">
            <div className="row gy-4 align-items-center">
              <div className="col-md-6 col-lg-4">
                <div className="info">
                  <div className="icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="desc">
                    <h4>Location</h4>
                    <p>168/170, Ave 01, York Drive Rich Mirpur, Dhaka-1216</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="info">
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="desc">
                    <h4>Phone</h4>
                    <a href="tel:01761111456">+91 7833445323</a>
                    <a href="tel:01761111555">+91 7833445323</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="info">
                  <div className="icon">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="desc">
                    <h4>Message Us</h4>
                    <a href="mailto:info@example.com">info@example.com</a>
                    <a href="mailto:info@support.com">info@support.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="contact-form">
            <span>We’re Ready To Help You</span>
            <h2>Send Message</h2>
            <p style={{textAlign: "center",
  marginBottom: "60px"}}>Fill out below form to book service</p>
            <form action="#" method="post">
              <div className="row">
                <div className="col-lg-8">
                  <input type="text" name="name" placeholder="Your Name :" />
                </div>
                <div className="col-lg-8">
                  <input type="email" name="email" placeholder="Your Email :" />
                </div>
                <div >
                  <input type="text" name="subject" placeholder="Subject" style={{width:"980px"}} />
                  <textarea
                    name="message"
                    cols={30}
                    rows={10}
                    placeholder="Write Message :"
                    defaultValue={""}
                  />
                  <input type="submit" defaultValue="Send Message" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      </>
  );
}

export default Contact;
