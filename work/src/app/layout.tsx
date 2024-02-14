
import "./globals.css";
import Head from "next/head";
import React from "react";

import Footer2 from "./footer/Footer2";
import Header2 from "./header/Header2";

function Layout({ children }
  :{
    children:React.ReactNode;
  }) {
  return (
    <>

    <body>




   <Header2 />
      {children}
    <Footer2 />
  

      

    </body>
      <Head>
        <title>Workdeal</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="assets/images/favicon.png"
          type="image/gif"
          sizes="20x20"
        />
      </Head>
     
    </>
  );
}

export default Layout;
