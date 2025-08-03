import React from 'react'
import ExternalLinkIconData from '../iconData/external-link.svg';
import Image from 'next/image';

function ExternalLinkIcon() {
  return (
  <Image  className='h-5 w-5' src={ExternalLinkIconData} alt='link'/>
  )
}

export default ExternalLinkIcon
