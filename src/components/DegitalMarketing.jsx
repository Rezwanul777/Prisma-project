import React from 'react'
import { Container } from 'react-bootstrap'
import degitalPng from '../assets/images/Omnichannel.png'
import './developmentservice.css'

const DegitalMarketing = () => {
  return (
   <>
        <Container  className='mt-4'>

<div className="row d-flex justify-content-center align-items-center ">
    <div className=" col-12 col-lg-5">
        <div className='development-left mt-5 ms-5'>
            <div className="dev-img ">
                    <img src={degitalPng} alt="img not found" className='img-fluid d-block'/>
            </div>
            <div className='dev-text'>
        <span>DEGITAL</span>
        <span>MARKETING</span>
        </div>
        </div>
        
    </div>
    <div className="col-12 col-lg-5">
    <div className='me-5'>
    <h4 className='mb-4' >
    Digital Marketing
  </h4>
  <h1>Transforming data into digital success stories.</h1>

  <p className='mt-3'>
  Our digital marketing services help businesses succeed in the ever-evolving digital world. We provide data-driven solutions to increase engagement, conversions, and revenue.
  </p>
  </div>
  <div className='mt-3'>
    <button className="secondary-btn text-white">Explore Now</button>
  </div>
    </div>
</div>

</Container>
   </>
  )
}

export default DegitalMarketing
