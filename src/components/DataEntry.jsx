import React from 'react'
import { Container } from 'react-bootstrap'
import dataEntryPng from '../assets/images/Vector4.png'

const DataEntry = () => {
  return (
   <>
        <Container className='mt-4'>

<div className="row d-flex justify-content-center align-items-center ">
    
    <div className="col-12 col-lg-5">
    <div className='ms-5'>
    <h4 className='mb-4' >
    Data Entry Services
  </h4>
  <h1>Unlocking insights hidden within your data assets.</h1>

  <p className='mt-3'>
  Our team offers reliable data entry and analytics services, delivering accurate data insights that enable data-driven decision-making and strategic planning for businesses..
  </p>
  </div>
  <div className='mt-3 ms-5'>
    <button className="secondary-btn text-white">Explore Now</button>
  </div>
    </div>
    <div className=" col-12 col-lg-5">
        <div className='development-left mt-5'>
            <div className="dev-img ">
                    <img src={dataEntryPng} alt="img not found" className='img-fluid d-block'/>
            </div>
            <div className='dev-text'>
        <span>Data Entry &</span>
        <span>Analysis</span>
        </div>
        </div>
        
    </div>
</div>

</Container>
   </>
  )
}

export default DataEntry