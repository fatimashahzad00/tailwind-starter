import CarWheel from '@/components/CarWheel'
import CarHeadLight from '@/components/Headlight'
import Seat from '@/components/Seat'
import React from 'react'

export default function page() {
  return (
    <div>
      {/* <p className='text-xs'>This is the one with 12px font size</p>
      <p className='text-lg'>This is the one with 18px font size</p>
      <p className='text-2xl'>This is the one with 24px font size</p> */}

      {/* <div className='bg-blue-800 h-24 w-52 hover:h-32 hover:w-60'>Car Body</div> */}
      <div className='bg-blue-800 h-24 w-52 hover:scale-150'>Car Body</div>  
      {/* //modify */}
      <CarWheel />
      <CarWheel />
      <CarWheel />
      <CarWheel />
      <CarHeadLight />
      <CarHeadLight />
      <Seat />
      <Seat />
      <Seat />
      <Seat />
    </div>
  )
}
