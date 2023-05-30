import React, { useEffect, useState } from 'react'
import '../products_details/product_details.scss'
import { useParams,} from 'react-router-dom'

const Product_details = () => {
  
    const {id}=useParams();
    const [product,setProducts]=useState([]);
useEffect(() => {
  fetch(`https://fakestoreapi.com/products/${id}`)
  .then(res=>res.json())
  .then(json=>setProducts(json))       
},[id])

    return (
    <>
{
  product.length !==0 ? (<div className="flex w-4/5 m-auto"> 
  <div className="img-box">
    <img src={product.image} alt="" key={product.id} />
  </div>
  </div>):(<div role="status" class="max-w-sm animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span class="sr-only">Loading...</span>
</div>)

}



    </>
  )
}

export default Product_details