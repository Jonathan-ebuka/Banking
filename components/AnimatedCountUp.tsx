"use client"

import CountUp from "react-countup"
import React from "react"

const AnimatedCountUp = ({ amount }: { amount: number }) => {
  return (
    <div className='w-full'>
      <CountUp
        decimal=','
        prefix='$ '
        duration={2.5}
        //   decimals={}
        end={amount}
      />
    </div>
  )
}

export default AnimatedCountUp
