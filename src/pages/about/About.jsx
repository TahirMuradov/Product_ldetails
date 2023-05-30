import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))        
  }, [])
  return (
<>
<div className="flex w-full flex-wrap w h-auto">
  {
    products.length!==0 ? ( products.map((item)=>(
      <div className="box w-3/12 px-8 border-2 items-center justify-center hover:bg-stone-600 cursor-pointer">
     <Link to={`${item.id}`} >  
     <div className="img-box w-full h-auto">

        <img src={item.image} alt="" className='w-full'/>
        </div>
      </Link>   
        <div className="text bottom-0">
          <h4 className="titel">
            {item.title}
          </h4>
          <h5>
            {item.price}$
          </h5>
        </div>
      </div>
   
    ))):(
<div role="status" class="max-w-sm animate-pulse">
    <div class="h-screen bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span class="sr-only">Loading...</span>
</div>
)
   
  }
</div>
</>
  )
}

export default About