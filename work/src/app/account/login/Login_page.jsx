"use client"


import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import Breadcrumb from "../../common/Breadcrumb";
import Layout from "../../layout";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { googleProvider } from "../../../firebase/firebase";
import { auth } from "../../../firebase/firebase";
import { MyContext } from "../../context";
import { Dialog, DialogTitle, Paper } from "@mui/material";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.css';

import './login.css'

function LoginPage(props) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };


  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function login() {
    if (email != null && email != "" && password != null && password != "") {
      if (document.getElementById("check_terms_signup").checked) {
        signInWithEmailAndPassword(auth, email, password)
          .then(async (res) => {
            props.login(false)
            // console.log(res.user.uid)
            if (auth.currentUser) {
              const useruid = auth.currentUser.uid;
              const idtoken = await auth.currentUser.getIdToken();
              axios
                .post(`http://localhost:5000/get-user-data/`, {
                  uid: useruid,
                  idtoken: idtoken,
                })
                .then((data) => {
                  if (data.status == 200) {
                    localStorage.setItem('city',data.data.city)
                  } else {
                    window.alert("something went wrong");
                  }
                })
                .catch((error) => {
                  console.log(error);
                  if (error.response && error.response.status == 404) {
                    window.location = "/login-google-required";
                  } else {
                    window.alert(error.message);
                  }
                });
            }
          })
          .catch((err) => window.alert(err));
      } else {
        window.alert("please accept the terms");

      }
    } else {
      window.alert("enter all fields");
    }
  }

  async function loginWithGoogle() {
    const result = await signInWithPopup(auth, googleProvider)
      .then((res) => {
        if (
          auth.currentUser.metadata.creationTime ===
          auth.currentUser.metadata.lastSignInTime
        ) {
          window.location = "/login-google-required";
        } else {
          window.location = "/account";
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  const [showDialog, setShowDialog] = useState(false);
  const handleDialogClose = () => {
    setShowDialog(false);
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
    <div className="login-form">



      {/* this is dialog box  */}
      <Dialog open={showDialog} onClose={handleDialogClose} >
      <Paper style={{ padding: "20px", border: "2px solid green", borderRadius: "5px" }}>
        <DialogTitle style={{fontSize:"16px", fontWeight:"600"}}>Terms & Conditions</DialogTitle>
        <p style={dialogstyle}>
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
        </p>
        </Paper>
      </Dialog>


      {/* Login page  */}
      <h3>Log In</h3>
      <span>
        New Member?{" "}
        <Link legacyBehavior href="#" >
          <a onClick={()=>{props.signup(true);props.login(false)}}>SignUp here</a>
        </Link>
      </span>
      <form autoComplete="false">
        <label htmlFor="email" style={{marginTop:"60px"}}>
          Email*
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Your Email Here"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          Password*
         
          <input
            autoComplete="new-password"
            type={!passwordVisible ? "password" : "text"}
            name="password"
            id="password"
            placeholder="Type Your Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button style={{width:"20px", marginLeft: "530px"
  }}
          type="button"
          className="password-toggle-button"
          onClick={togglePasswordVisibility}
        >
          {passwordVisible ? (
            <img src="/assets/images/eye-svgrepo-com (1).svg" alt="Hide password"  style={{marginTop: "-65px"}}/>
          ) : (
            <img src="/assets/images/eye-close-svgrepo-com.svg" alt="Show password" style={{marginTop: "-65px"}} />
          )}
        </button>
        </label>
        <div className="terms-forgot">
          <p>
            <input type="checkbox" name="agree" id="check_terms_signup" />
            <div className="agree">I
            agree to the{" "}
            <a onClick={() => setShowDialog(true)}>Terms &amp; Conditions</a>
            </div>
          </p>
         
       
         <div className="forgate">
         <a href="/login-reset-pass">Forgot Your Password</a>
         </div>
         </div>
        <input
          type="button"
          name="submit"
          defaultValue="LogIn"
          placeholder="dasdasdasd"
          onClick={login}
          className="login-button"
        />
      </form>
      <div className="other-signup">
        <h4><b>OR LOGIN WITH</b></h4>
        <div className="others-account">
          <a className="google" onClick={loginWithGoogle}>
            <i className="fab fa-google" />
            GOOGLE
          </a>
        </div>
      </div>
     
      <p style={{textAlign:"center"}}>
        By clicking the "Log In" button, you create a WorkDeal account, and 
        <p style={{textAlign:"center"}}>you agree to WorkDeal's{" "}
        <a onClick={() => setShowDialog(true)} style={{cursor:"pointer"}}>Terms &amp; Conditions</a></p>
      </p>
    </div>
  );
}

export default LoginPage;
