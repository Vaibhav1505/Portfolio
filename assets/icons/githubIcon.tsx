import React from 'react'
import githubIcoData from '../iconData/github.svg';
import Image from 'next/image';


function GithubIcon() {
  return (
   <Image alt='GithubIcon' src={githubIcoData}></Image>
  )
}

export default GithubIcon
