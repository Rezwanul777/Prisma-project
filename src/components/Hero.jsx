import React from 'react'
import heroPng from '../assets/images/hero.png'
import { Container } from 'react-bootstrap'
import "./Hero.css";

const Hero = () => {
  return (
    <>
     <Container className='mt-5'>
        <div className="row  gx-lg-5 d-flex justify-content-around align-items-center">
          <div className="Col-12 col-lg-6">
          <div>
            <h1 className='mb-2'>
            Revolutionize Your Business with Our Cutting-Edge Tech Solutions!
          </h1>

          <p className='mt-4'>
            Our tech agency offers innovative web development, software
            development, digital marketing, graphic design, UI/UX, and data
            entry solutions to transform your business today!
          </p>
          </div>
            <button className="primary-btn mt-3">Our Success</button>
          </div>
          <div className="col-12 col-lg-6">
            <div> 
              <img src={heroPng} alt="img not found" className='img-fluid'/>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Hero