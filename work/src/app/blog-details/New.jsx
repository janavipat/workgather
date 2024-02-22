"use client"

import React,{useState,useEffect} from 'react';

import News from "./News";

import Header2 from '../header/Header2'
import Footer2 from '../footer/Footer2'
import Breadcrumb from '../common/Breadcrumb'
import DotLoader from "react-spinners/DotLoader";


const override= {
  display: "block",
  margin: "300px 600px",

 
};
const New = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }, []);
  return (
    <>
     {!loading ? (
           <DotLoader color="#2aef0a" 
       cssOverride={override}
         size={80}
        aria-label="Loading Spinner"
        data-testid="loader"/>
          ) : (
        <>
    <Header2 />
    <Breadcrumb pageName="News" pageTitle="News" />
    <News />
    <Footer2/>
    </>)}
    </>
    
    //<div>hello</div>
  )
}

export default New