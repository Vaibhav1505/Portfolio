import Image from 'next/image'
import React from 'react'
import FirebaseIconData from '../iconData/firebase.svg'

function FirebaseIcon() {
  return (<Image className='h-5 w-5' src={FirebaseIconData} alt='firebase'/>
  )
}

export default FirebaseIcon
