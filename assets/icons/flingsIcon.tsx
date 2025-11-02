import Image from 'next/image'
import React from 'react'
// import flingsIconData from '../iconData/flingsIconData.png'
import twinedIconData from '../iconData/twined_logo.png';

function TwinedIcon() {
  return (
    <Image className='rounded-md' src={twinedIconData} alt='Twined'/>
  )
}

export default TwinedIcon
