import Link from "next/link";
import React from "react";
import "../common/breadcrumb.css"
//import '@fortawesome/fontawesome-free/css/all.min.css';




function Breadcrumb({ pageTitle, pageName }) {
  return (
    <section className="breadcrumbs">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-wrapper">
              <img src={"assets/images/services/spage.png"} alt="" />
              {/* <div className="overlay"></div> */}
              <h2>{pageTitle}</h2>
              <span>
                <Link legacyBehavior href="/">
                  <a style={{color:"green",fontWeight:"600",marginLeft: " -200px"}}>Home</a>
                </Link>
                <img src={"assets/images/right-arrow-backup-2-svgrepo-com.svg"} alt="" />
                <p > {pageName}</p>
              </span>
              <div className="arrow-down" style={{marginBottom:"-40px", marginTop: "-10px",borderColor:"green",
  marginLeft: "40px"}}>
                <a href="#down">
                <img src={"assets/images/down-arrow-backup-2-svgrepo-com.svg"} alt=""   style={{paddingTop:"10px"}}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumb;
