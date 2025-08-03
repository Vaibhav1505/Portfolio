import Image from 'next/image'
import React from 'react'
import flingsIconData from '../iconData/flingsIconData.png'

function FlingsIcon() {
  return (
    <Image src={flingsIconData} alt='Flings'/>
  )
}

export default FlingsIcon
