import React from 'react'
import AboutArea from './AboutArea'
import Breadcrumb from '../common/Breadcrumb'

const Page = () => {
  return (
    <div>
      <Breadcrumb pageName="About Us" pageTitle="About Us" />
      <AboutArea />
      
    </div>
  )
}

export default Page
