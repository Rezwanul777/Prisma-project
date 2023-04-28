import React from 'react'
import { Container } from 'react-bootstrap'
import windows10 from '../assets/images/Windows10 Personalization.png'
import './developmentservice.css'

const DesigningService = () => {
  return (
    <>
        <Container className='mt-4'>

<div className="row d-flex justify-content-center align-items-center ">
    
    <div className="col-12 col-lg-5">
    <div className='ms-5'>
    <h4 className='mb-4' >
    Designing Services
  </h4>
  <h1>Bringing your vision to life, beautifully</h1>

  <p className='mt-3'>
  Our graphic design services bring together creativity and strategy to create visually stunning designs that effectively communicate your message. From logos to marketing materials, we bring your brand to life.
  </p>
  </div>
  <div className='mt-3 ms-5'>
    <button className="secondary-btn text-white">Explore Now</button>
  </div>
    </div>
    <div className=" col-12 col-lg-5">
        <div className='development-left mt-5'>
            <div className="dev-img ">
                    <img src={windows10} alt="img not found" className='img-fluid d-block'/>
            </div>
            <div className='dev-text'>
        <span>Graphics &</span>
        <span>UI UX Design</span>
        </div>
        </div>
        
    </div>
</div>

</Container>
    </>
  )
}

export default DesigningService
