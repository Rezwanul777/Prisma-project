import React from 'react'
import { Container } from 'react-bootstrap'
import img1 from '../assets/images/web1.png'
import img2 from '../assets/images/web2.png'
import img3 from '../assets/images/web3.png'
import img4 from '../assets/images/web4.png'
import ProductDisplay from './ProductDisplay'

const Work = () => {
const products=[
      {id:1,img:img1,title:"Sleek, innovative,powerful.",text:"Lorem Ipsum has been the industry's standard dummy"},
      {id:2,img:img2,title:"Chase your dreams.",text:"Lorem Ipsum has been the industry's standard dummy "},
      {id:3,img:img3,title:"Endless blue expanse.",text:"Lorem Ipsum has been the industry's standard dummy "},
      {id:4,img:img4,title:"Compulsive screen time.",text:"Lorem Ipsum has been the industry's standard dummy   "},
   
   
   ]
  return (
    <>
      <Container className='mt-5'>
        <div className="row">
          <div className="col-12 col-lg-6">
           <div className="work-text mt-3">
           <h4 className='mt-2'>Our Recent Works</h4>
            <h2 className='mt-2'>Our Best Work Showcase</h2>
            <p className='mt-3'>Our portfolio showcases our best work in web development, UI/UX design, digital marketing, and more. See how we deliver results.</p>
           </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-10 mt-5">
              <h4 className='text-center mx-auto'>Full Stack Web Development</h4>
            </div>
            {
              products.map((product) =><ProductDisplay key={product.id} product={product}/>)
            }
          </div>
        </div>

      </Container>
    </>
  )
}

export default Work