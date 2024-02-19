import React from 'react'
import News from "./News"
import Header2 from '../header/Header2'
import Footer2 from '../footer/Footer2'
import Breadcrumb from '../common/Breadcrumb'

const page = () => {
  return (
    <>
    <Header2 />
    <Breadcrumb pageName="News" pageTitle="News" />
    <News />
    <Footer2/>
    </>
    
    //<div>hello</div>
  )
}

export default page