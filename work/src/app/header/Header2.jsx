"use client";
import "../header/header.css"
import Link from "next/link";
import { useRouter,usePathname } from 'next/navigation';



import React, { useEffect, useReducer, useRef, useContext, useState } from "react";
import MyContext  from "../context";

// import dynamic from 'next/dynamic'; // Import dynamic for dynamic imports

// // Dynamic import of MyContext to ensure it's only used on the client side
// const MyContext = dynamic(() => import('../context'), { ssr: false });
// inital state data
const initialState = {
  activeMenu: "",
  menuOpen: false,
  scrollY: 0,
};



// usnig reducer to change logic
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      if (state.activeMenu === action.payload) {
        return { ...state, activeMenu: "", menuOpen: !state.menuOpen };
      } else {
        return {
          ...state,
          activeMenu: action.payload,
          menuOpen: !state.menuOpen,
        };
      }
    case "HOME_ONE":
      return { ...state, activeMenu: "home-one", menuOpen: !state.menuOpen };

    case "SERVICE":
      return { ...state, activeMenu: "service", menuOpen: !state.menuOpen };
    case "BLOG":
      return { ...state, activeMenu: "blog", menuOpen: !state.menuOpen };
    case "PAGES":
      return { ...state, activeMenu: "pages", menuOpen: !state.menuOpen };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    default:
      return { ...state };
  }

}
function Header2() {
    const initialService = {
        location: "",
        category: "",
        pricerange: "",
        rating: ""
      };
    const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);
  const currentRoute = usePathname();
  const headerRef = useRef(null);
  const [mobileHeader,setMobileheader]=useState(false);

  const { serviceType, updateVariable } = useContext(MyContext);
  const handleInitialServices = () => {
    updateVariable(initialService);
    console.log("not available")
  };
  // menu fuction for toggle
  function handleMenu(menuName) {
    dispatch({ type: "TOGGLE", payload: menuName });
  }

  useEffect(() => {
    const burger = document.querySelector(".mobile-menu");
    const nav = document.querySelector(".main-nav");
    const menuClose = document.querySelector(".remove");
    burger.addEventListener("click", () => {
      nav.classList.add("slidenav");
    });
    menuClose.addEventListener("click", () => {
      nav.classList.remove("slidenav");
    });
  });

  // sticky header
  
  return (
    <header
      ref={headerRef}
      // just use one header class for your project
      className={"header-1 "}
    >
      <div className="header-logo">
        <Link legacyBehavior href="/">
          <a>
            <img
              intrinsicsize="109x28"
              src={"assets/images/wlogo.png"}
              alt=""
            />
          </a>
        </Link>
      </div>
      <div className="main-menu">
        <nav className="main-nav">
          <div className="mobile-menu-logo">
           
            <div className="remove">
              <i className="bi bi-plus-lg" />
            </div>
          </div>
          <ul className="tag">
            <li >
              <Link legacyBehavior href="/" style={{textDecoration:'none'}}>
                <a className={currentRoute === "/" ? "active" : ""}>Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about" style={{textDecoration:'none'}}>
                <a className={currentRoute === "/about" ? "active" : ""}>
                  About Us
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/service" style={{textDecoration:'none'}}>
                <a
                  onClick={handleInitialServices}
                  className={currentRoute === "/service" ? "active" : ""}
                >
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/blog-details" style={{textDecoration:'none'}}>
                <a className={currentRoute === "/blog-details" ? "active" : ""}>
                  News Feed
                </a>
              </Link>
            </li>
          </ul>
          {/* <div className="my-account">
            <Link legacyBehavior href="/account">
              <a>My Account</a>
            </Link>
          </div> */}
        </nav>
      </div>
      <div className="header-right">
        <div className="phone">
          <div className="icon">
          <img src="assets/images/phone-call-svgrepo-com (1).svg" alt="" />
          </div>
          <div className="phn-info">
            <span >Call Us Now</span>
            <a href="tel:01701111000">+91 7844932404</a>
          </div>
          
        </div>
        <div className="wishlist">
          <Link legacyBehavior href="/account">
            <a>
              <i className="bi bi-suit-heart" />
            </a>
          </Link>
        </div>
        <div className="account-btn">
          <Link legacyBehavior href="/account">
            <a>My Account</a>
          </Link>
        </div>
        <div className="mobile-menu" onClick={()=>{setMobileheader(true)}}>
          <a className="cross-btn" onClick={()=>{setMobileheader(false)}}>
            <span className="cross-top" />
            <span className="cross-middle" />
            <span className="cross-bottom" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header2;
