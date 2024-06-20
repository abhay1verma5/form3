import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'
export default function Loader({size=40}) {
  return (
    <ThreeCircles
    visible={true}
    height={size}
    width={size}
    color="#4fa94d"
    ariaLabel="three-circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
  )
}
