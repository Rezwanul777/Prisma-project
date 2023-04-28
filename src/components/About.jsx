import React from 'react'
import { Container } from 'react-bootstrap'
import "./About.css"
import aboutPng from '../assets/images/about.png'
import vectorPng from '../assets/images/Vector.png'
import vector1Png from '../assets/images/Vector1.png'
import vector2Png from '../assets/images/Vector2.png'
import vector3Png from '../assets/images/Vector3.png'


const About = () => {
  return (
   <>
      <Container fluid className='mt-5 background-about'>
              <div className="row  d-flex justify-content-center align-items-center">
                <div className="col-12 col-lg-4">
                  <div className='about-image  mt-5 ms-5'>
                    <img src={aboutPng} alt="img not found" className='img-fluid d-block rounded-2'/>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className='mb-3 me-5 pe-2 '>
                    <h2 className='mb-5 '>
                    Let's craft an unforgettable online presence together!
                    </h2>
                    <p className='mb-3 pe-5 '>
                    Let's create your new website together! We'll design and develop a professional, user-friendly site that meets your needs.
                    </p>
                  </div>
                  <div className="row ">
                    <div className="col-md-5 d-flex  align-items-center">
                        <div className="col-3 ">
                          <div className='vector-image '>
                            <img src={vectorPng} alt="img not found" />
                          </div>
                        </div>
                        <div className="col-9 ">
                        <p>Emerging Ind-
                        Tech Services</p>
                        </div>

                    </div>
                    <div className="col-md-5 d-flex  align-items-center justify-content-center">
                        <div className="col-3">
                          <div className='vector-image'>
                            <img src={vector1Png} alt="img not found" />
                          </div>
                        </div>
                        <div className="col-9">
                        <p>Free Consultancy With  Experts </p>
                      </div>

                    </div>
                    <div className="col-md-5 d-flex  align-items-center justify-content-around">
                        <div className="col-3">
                          <div className='vector-image'>
                            <img src={vector2Png} alt="img not found" />
                          </div>
                        </div>
                        <div className="col-9">
                        <p>High Quality Projects</p>
                      </div>

                    </div>
                    <div className="col-md-5 d-flex  align-items-center justify-content-around">
                        <div className="col-3">
                          <div className='vector-image'>
                            <img src={vector3Png} alt="img not found" />
                          </div>
                        </div>
                        <div className="col-9">
                        <p>Secure & Reliable Services</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
      </Container>
   </> 
  )
}

export default About