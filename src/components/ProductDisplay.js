import React from 'react'

const ProductDisplay = ({product}) => {
    const {img,title,text}=product
  return (
   <>
         <div className="col-lg-3 col-md-6 col-sm-6 mb-4 ">
     
    <div class="card mt-4 border-0 shadow" >
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{text}</p>
  
  </div>
</div>
    </div>
   </>
  )
}

export default ProductDisplay