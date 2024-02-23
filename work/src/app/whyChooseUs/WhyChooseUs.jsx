import React, { useState } from "react";
import CountUp from "react-countup";
import AccordionItem from "./AccordionItem"
import './choose.css'
function WhyChooseUs() {

  const [openIndex, setOpenIndex] = useState(0); // Index of currently open accordion item

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const items = [
    {
      title: 'Ensuring Masks ',
      content:" Wearing Face mask is recommended as part of personal protective equipment and as a public health measure to prevent the spread of viruses. We make sure that worker provided by us is taking care of this."
  },
    {
      title: '24/7 Supports ',
      content:
        "Serving 24x7 to our customer is top motto of WorkDeal. Now get services at your door anytime, anywhere."
    },
    {
      title: 'Sanitising Hands',
      content:
       " Germs are everywhere! Workers get onto hands and items we touch during daily activities. Cleaning hands at key times with soap and water or hand sanitizer that contains at least 60% alcohol is one of the most important steps we can take to avoid getting spreading germs around people."
       ,
    },
  ];

  return (
    <section className="why-choose sec-m">
      <div className="container1">
        <div className="row">
          <div
            className="col-lg-6 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="why-choose-left">
              <div className="sec-title layout-1">
                <div className="title-left">
                  <span>Trust Agency</span>
                  <h2>Best Offered Services</h2>
                  <p>
                  <b>WorkDeal</b>   provides service to all nearby areas of the city, with a large<br/> network of dedicated service providers. We offer our services 24*7. Our<br/> workers understand the value of customer's time, so they offer door-to-<br/>door services on just a single call.
                  <br/> <b>Expert Technician : </b> 
                We provide only high skilled professionals to make <br/> your work done on time.
                <br/> <b>Genuine Price : </b>here, we believe in providing genuine pricing for all <br/> our home services. Our platform is designed to ensure transparency <br/> and fairness, allowing you to receive accurate and competitive quotes <br/> from trusted professionals.</p>
                  
                </div>
              </div>
              <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
              
            </div>
          </div>
          
            <div className="why-choose-right">
              <h2
                className=" wow animate fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                Why Choose Us
              </h2>
              <div className="our-archive">
                <div
                  className="single-archive wow animate fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <span className="counter">
                    <CountUp start={0} end={5000} duration={3} />
                  </span>
                  <span>+</span>
                  <h5>Service Providers</h5>
                </div>
                <div
                  className="single-archive wow animate fadeInUp"
                  data-wow-delay="500ms"
                  data-wow-duration="1500ms"
                >
                  <span className="counter">
                    <CountUp start={0} end={1500} duration={3} />
                  </span>
                  <span>+</span>
                  <h5>Order Served</h5>
                </div>
                <div
                  className="single-archive wow animate fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <span className="counter">
                    <CountUp start={0} end={2000} duration={3} />
                  </span>
                  <span>+</span>
                  <h5>5 Star Received</h5>
                </div>
                <div
                  className="single-archive wow animate fadeInUp"
                  data-wow-delay="700ms"
                  data-wow-duration="1500ms"
                >
                  <span className="counter">
                    <CountUp start={0} end={1800} duration={3} />
                  </span>
                  <span>+</span>
                  <h5>Friendly Shop</h5>
                </div>
              </div>
              
            </div>
          
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
