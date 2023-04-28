import React from 'react'
import { Container } from 'react-bootstrap'
import './testimonial.css'
import tesimonialImg1 from '../assets/images/testimonial1.png'


const Testimonial = () => {
  return (
   <>
        <Container fluid className='background mt-5'>
            <div className="row ">
                <div className="col-12 col-lg-12">
                <div className="testimonial-text mt-5 ms-5 ps-5">
                    <h3 className='text-white mt-2'>Testimonial our</h3>
                    <p className='text-white mt-2'>clients</p>
                </div>
                <div className="row d-flex justify-content-around align-items-center">
                    <div className="col-12 col-lg-5 ms-5">
                        <div className="testimonial-image ps-5 ms-5">
                            <img src={tesimonialImg1} alt="img not found"  className='img-fluid rounded-1'/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 mb-5">
                        <div className="testimonial-right-text">
                            <h5 className='text-white'>John Doe</h5>
                            <h3 className='text-white'>CEO of ABC</h3>
                            <h6 className='text-white'>& co</h6>
                            <p className='text-white mt-5 quote'>
                            Lorem ipsum dolor sit amet consectetur. Quam netus purus volutpat molestie eleifend adipiscing etiam commodo. Cras sagittis adipiscing mi velit eu. Adipiscing magna feugiat eu faucibus ut tortor tincidunt. Massa orci aliquam odio quisque nunc cras ornare eget turpis.
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>


        </Container>
   
   </>
  )
}

export default Testimonial