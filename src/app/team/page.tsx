import Footer from '@/Components/Footer'
import FreeTrail from '@/Components/FreeTrail'
import MeetOurTeam from '@/Components/MeetOurTeam'
import Teamgallery from '@/Components/Teamgallery'

import React from 'react'

const page = () => {
  return (
    <div>
      <Teamgallery/>
    <MeetOurTeam/>
    <FreeTrail/>
      <Footer/>
    </div>
  )
}

export default page
