// import Head from "next/head";
// import React from "react";

// function Preloader() {
//   return (
//     <>
//       <Head>
//         <title>Loading...</title>
//         <link rel="icon" href="" />
//       </Head>

//       <div className="egns-preloader">
//         <div className="container">
//           <div className="row d-flex justify-content-center">
//             <div className="col-6">
//               <div className="circle-border">
//                 <div className="moving-circle" />
//                 <div className="moving-circle" />
//                 <div className="moving-circle" />
//                 <svg
//                   width="180px"
//                   height="150px"
//                   viewBox="0 0 187.3 93.7"
//                   preserveAspectRatio="xMidYMid meet"
//                 >
//                   <path
//                     stroke="#5BB543"
//                     id="outline"
//                     fill="none"
//                     strokeWidth={4}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeMiterlimit={10}
//                     d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
//                   />
//                   <path
//                     id="outline-bg"
//                     opacity="0.05"
//                     fill="none"
//                     stroke="#959595"
//                     strokeWidth={4}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeMiterlimit={10}
//                     d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Preloader;

import React from "react";
import './loader.scss'

function Preloader() {
 
  return (
    <>
    <div style={{backgroundColor:"green" , height:"900px" , rotate:"140deg", marginTop: "-40px",
    width:" 900px",marginLeft:"700px",position:"fixed"
   
  }}></div>
     
    <div className="spinner" >  </div>
    {/* <div className="spinnerout"></div> */}
    <div className="loading loading04">
    <span >W</span>
    <span>O</span>
    <span>R</span>
    <span>K</span>
    <span style={{color:"white"}}>D</span>
    <span style={{color:"white"}}>E</span>
    <span style={{color:"white"}}>A</span>
    <span style={{color:"white"}}>L</span>
  </div>
   
  </>
    
    
  );
}

export default Preloader;

