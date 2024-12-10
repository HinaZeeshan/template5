
import Bestproduct from '@/Components/Bestproduct'
import Footer from '@/Components/Footer'
import Oneproduct from '@/Components/Oneproduct'

import ProductDetails from '@/Components/Productdetail'
import Reacticon from '@/Components/Reacticon '
import React from 'react'

const page = () => {
  return (
    <div>
      <ProductDetails/>
      <Oneproduct/>
      <Bestproduct/>
      <Reacticon/>
      <Footer/>
    </div>
  )
}

export default page
