import React from 'react'
import { Container } from 'react-bootstrap'
import googleCode from '../assets/images/Google Code.png'
import './developmentservice.css'

const DevelopmentService = () => {
  return (
    <Container  className='mt-4'>

        <div className="row d-flex justify-content-center align-items-center ">
            <div className=" col-12 col-lg-5">
                <div className='development-left mt-5 ms-5'>
                    <div className="dev-img ">
                            <img src={googleCode} alt="img not found" className='img-fluid d-block'/>
                    </div>
                    <div className='dev-text'>
                <span>WEBSITE</span>
                <span>DEVELOPMENT</span>
                </div>
                </div>
                
            </div>
            <div className="col-12 col-lg-5">
            <div className='me-5'>
            <h4 className='mb-4' >
            Development Service
          </h4>
          <h1>Crafting stunning websites that drive results.!</h1>

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
  )
}

export default DevelopmentService