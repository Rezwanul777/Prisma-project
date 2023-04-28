import React from 'react'
import { Container } from 'react-bootstrap'
import "./services.css"
import ServiceOffer from './ServiceOffer'
import DevelopmentService from './DevelopmentService'
import DesigningService from './DesigningService'
import DegitalMarketing from './DegitalMarketing'
import DataEntry from './DataEntry'

const Services = () => {
  return (
    <>
      <Container fluid className='mt-5 background-service'>
        <div className="row mt-5  d-flex justify-content-center align-items-center ">
          <div className="col-12 col-lg-4 ms-5 mt-5">
           <div className='mt-5 d-flex gap-3 ms-5'>
           <div className="project-count">
            <div className='text'>
            <h6 className=' d-flex align-items-center justify-content-center  text-content'>50+</h6>
           <span className='mt-3 mb-0'>Experts</span>
           <span>employee</span>
            </div>
           </div>
           <div className=" project-count">
            <div className='text'>
            <h6 className=' d-flex align-items-center justify-content-center  text-content'>60+</h6>
           <span className='mt-3 mb-0'>Project</span>
           <span>completed</span>
            </div>
           </div>
           </div>
           <div className="project-count-two mt-2 ms-5">
           <div className='text-two'>
            <h6 className=' d-flex align-items-center justify-content-center  text-content'>100+</h6>
           <div className='pe-5 gap'>
           <span >Quality</span>
           <span >services</span>
           </div>
            </div>
           </div>
          </div>
          <div className="col-12 col-lg-5 mt-4">
            <div className='mt-5'>
            <h4 className='text-white '>Why Choose Us?</h4>
            <h1 className='text-white '>We simplified your business.</h1>
            <p className='text-white  py-3'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
            </div>
              <div className='row mt-3'>
              <div className="col-md-5 d-flex  align-items-center gap-3 ">
                        <div className="col-3 ">
                          <h6 className=' d-flex align-items-center justify-content-center  text-content-two text-white'>1</h6>
                        </div>
                        <div className="col-9 ">
                        <p className='text-white'>Freedom of choosing Designs</p>
                         </div>

                    </div>
              <div className="col-md-5 d-flex  align-items-center gap-3">
                        <div className="col-3 ">
                          <h6 className=' d-flex align-items-center justify-content-center  text-content-two text-white'>2</h6>
                        </div>
                        <div className="col-9 ">
                        <p className='text-white'>Great experience of Making brands</p>
                         </div>

                    </div>
              <div className="col-md-5 d-flex  align-items-center gap-3 mt-2">
                        <div className="col-3 ">
                          <h6 className=' d-flex align-items-center justify-content-center  text-content-two text-white'>3</h6>
                        </div>
                        <div className="col-9 ">
                        <p className='text-white'>Hard working & Creative team</p>
                         </div>

                    </div>
              </div> 
          </div>
        </div>
      </Container>
      <ServiceOffer/>
      <DevelopmentService/>
      <DesigningService/>
      <DegitalMarketing/>
      <DataEntry/>
    </>
  )
}

export default Services