import React from 'react'
import AboutArea from './AboutArea'
import Breadcrumb from '../common/Breadcrumb'
import Header2 from '../header/Header2'
import Footer2 from '../footer/Footer2'

const Page = () => {
  return (
    <div>
      <Header2 />
      <Breadcrumb pageName="About Us" pageTitle="About Us" />
      <AboutArea />
      <Footer2 />
      
    </div>
  )
}

export default Page
