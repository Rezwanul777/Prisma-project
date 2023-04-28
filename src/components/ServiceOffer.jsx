import React from 'react'
import { Container } from 'react-bootstrap'
import './serviceOffer.css'

const ServiceOffer = () => {
  return (
   <>
     <Container fluid className='mt-5'>
        <div className="row d-flex  align-items-center">
            <div className="col-12 col-lg-6">
            <div>
            <h4 className='mt-2'>
            Services We offer
          </h4>
          <h1>Let's build a standout brand together!</h1>

          <p className='mt-3'>
          Creating a strong brand involves developing a unique identity that resonates with your target audience and sets you apart. Let's get started!
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

export default ServiceOffer