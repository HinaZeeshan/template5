import About from '@/Components/About'
import About2 from '@/Components/About2'
import Footer from '@/Components/Footer'
import Likes from '@/Components/Likes'
import Reacticon from '@/Components/Reacticon '
import Team from '@/Components/Team'
import Views from '@/Components/Views'
import React from 'react'

const page = () => {
  return (
    <div>
      <About/>
      <Likes/>
      <Views/>
      <Team/>
      <Reacticon/>
      <About2/>
      <Footer/>
    </div>
  )
}

export default page
