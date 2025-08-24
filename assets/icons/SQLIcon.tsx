import Image from 'next/image'
import React from 'react'
import sqlIConData from '../iconData/sqlIconData.svg'


function SQLIcon() {
  return (
 <Image className='h-5 w-5' src={sqlIConData} alt='sql'/>
  )
}

export default SQLIcon
