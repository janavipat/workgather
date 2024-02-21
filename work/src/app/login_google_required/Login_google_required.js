"use client";

import Link from "next/link";
import React,{ useState,useEffect } from "react";
import Signuptype from "../account/sign-up/sign-up-type";
import { auth } from "../../firebase/firebase";
import { updatePassword } from "firebase/auth";
import axios from "axios";
import { Dialog, DialogTitle, Paper } from "@mui/material";
import services from "../../data/service/creative_services.json";
import './login1.css'

const signupdata = () => {
  const [showDialog, setShowDialog] = useState(false);
  const handleDialogClose = () => {
    setShowDialog(false);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [typeofacc, setTypeOfAcc] = useState("worker");
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  const [password, setPassword] = useState();
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [aadhar, setAadhar] = useState();
  const [service, setServiceType] = useState(null);

  const handleServiceChange = (e) =>{
    setServiceType(e.target.value)
  }

  useEffect(()=>{
    setServiceType(service)
    console.log(service)
  },[service])

  const register = async () => {
    if (
      password != null &&
      password != "" &&
      fname != null &&
      fname != "" &&
      lname != null &&
      lname != ""
    ) {
      if (document.getElementById("check_terms_signup").checked) {
        var linkfordb;
        var waadhar = false;
        if (typeofacc == "worker" && aadhar != null && aadhar != "" && service!=null && service!="" && aadhar.length==12) {
          linkfordb = "http://localhost:5000/create-user-worker";
          waadhar = true;
        } else if(typeofacc == "client"){
          linkfordb = "http://localhost:5000/create-user-client";
          waadhar = true;
        }
        const user = auth.currentUser;
        if (user && waadhar) {
          updatePassword(user, password)
            .then(async () => {
              await axios
                .post(linkfordb, {
                  uid: auth.currentUser.uid,
                  email: auth.currentUser.email,
                  fname: fname,
                  lname: lname,
                  typeofacc: typeofacc,
                  service: service,
                  aadhar: aadhar,
                })
                .then((res) => {
                  if (res.status == 200) {
                    window.location = "/account";
                  }
                });
            })
            .catch((error) => {
              if (error.code == "auth/requires-recent-login") {
                window.alert("Session expired");
                window.location = "/login";
              } else {
                window.alert("can't create profile" + error);
              }
            });
        } else {
          if (!waadhar) {
            window.alert("all field are required");
          } else {
            window.alert("user not found"); 
          }
        }
      } else {
        window.alert("please accept the terms");
      }
    } else {
      window.alert("enter all fields");
    }
  };

const dialogstyle = {
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingBottom: "30px",
  };
  const termsListStyle = {
    listStyleType: "decimal",
    paddingLeft: "20px",
  };
  return (
    <div className="form">
      <Dialog open={showDialog} onClose={handleDialogClose} style={dialogstyle} >
      
        <DialogTitle style={{fontSize:"16px", fontWeight:"600"}}>Terms & Conditions</DialogTitle>
      
        <ol style={termsListStyle}>
        <li>
                The worker agrees to provide the services specified in the contract with the client to the best of their abilities, within the agreed-upon timeframe.
              </li>
              <li>
                The client agrees to provide all necessary information, resources, and access required for the worker to perform their services effectively.
              </li>
              <li>
                Both the worker and the client agree to communicate promptly and effectively regarding any changes, issues, or concerns related to the project.
              </li>
              <li>
                The worker retains ownership of any intellectual property created during the project, unless otherwise specified in the contract.
              </li>
              <li>
                The client agrees to compensate the worker for their services according to the terms outlined in the contract, including any additional fees for revisions or extra work.
              </li>
              <li>
                Both parties agree to maintain confidentiality regarding any sensitive information shared during the course of the project.
              </li>
              <li>
                The worker agrees to deliver the final product or service to the client upon completion, as outlined in the contract.
              </li>
              <li>
                In the event of disputes or disagreements, both parties agree to first attempt to resolve the issue amicably through mediation or arbitration.
              </li>
              <li>
                These terms and conditions may be updated or modified by the platform owner at any time, with notice provided to all users.
              </li>
        </ol>
        
       
      </Dialog>
      <p id="txt_head_sign_up_form" style={{fontSize:"20px" , textAlign:"center", fontWeight:"600"}}>let's complete the profile</p>
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="fname">
            Frist Name*
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name"
              onChange={(e) => {
                setFname(e.target.value);
              }}
            />
          </label>
        </div>
        <div className="col-md-6">
          <label htmlFor="lname">
            Last Name*
            <input
              type="text"
              name="lname"
              id="lname"
              placeholder="last Name"
              onChange={(e) => {
                setLname(e.target.value);
              }}
            />
          </label>
        </div>
        <div className="col-12">
          <label>
            Password*
            <button style={{width:"20px", marginLeft: "550px"}}
          type="button"
          className="password-toggle-button"
          onClick={togglePasswordVisibility}
        >
          {passwordVisible ? (
            <img src="/assets/images/eye-svgrepo-com (1).svg" alt="Hide password"  style={{marginTop: "-74px"}}/>
          ) : (
            <img src="/assets/images/eye-close-svgrepo-com.svg" alt="Show password" style={{marginTop: "-74px"}} />
          )}
        </button>
            <input
              autoComplete="new-password"
              type={!passwordVisible ? "password" : "text"}
              id="password"
              placeholder="Type Your Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
        </div>
      </div>

      <div className="terms-forgot">
        <p>
          <input type="checkbox" name="agree" id="check_terms_signup" />I agree
          to the{" "}
          <a
            onClick={() => {
              setShowDialog(true);
            }}
          >
            Terms &amp; Policy
          </a>
        </p>
      </div>
      <Signuptype value={typeofacc} setvalue={setTypeOfAcc} />
      {typeofacc == "worker" && (
        <div style={{marginTop:"280px"}}>
        <div className="col-12">
          <label htmlFor="password">
            Service*
            <select
              className="service-selection-signup"
              onChange={(e) => {
                setServiceType(e.target.value);
              }}

              style={{
                marginLeft: "30px",
width: "200px",
height: "40px",
borderColor: "#88d088",

backgroundColor:" transparent",
borderWidth: "1px",
borderRadius:" 8px",

              }}
            >
              <option value={""} style={{paddingLeft:"20px"}}>select</option>
              {services.map((s) => {
                return (
                  <option key={s.id} value={s.service_name} style={{paddingLeft:"20px"}}>
                    {" "}
                    {s.service_name}{" "}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        <div className="col-12">
          <label htmlFor="aadhar">
            Aadhar Number*
            <input
              type="text"
              name="aadhar"
              id="aadhar"
              style={{
                boxShadow:
                  aadhar &&
                  aadhar.length != 12 &&
                  "0px 1px 10px 0px rgb(255 0 0 / 50%)",
              }}
              placeholder="Type Your Aadhar Number"
              onChange={(e) => {
                setAadhar(e.target.value);
              }}
            />
          </label>
        </div>
      </div>
      )}
  
      <div className="row1">
        <input
          type="button"
          onClick={register}
          style={{marginTop:"240px"}}
          defaultValue="Create Account"
          className="btn_create_account"
        />
        <div className="button_switch"> <Link legacyBehavior href="/account/login" style={{textDecoration:'none'}}>
               
               <p>Switch Account</p>
               
       </Link></div>
       
         
       
      </div>
    </div>
  );
};

export default signupdata;
