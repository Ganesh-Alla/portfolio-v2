import React from 'react'
import Logo from '../../public/images/Logo.png'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue transition-all">
    <hr className="transition-all animate-changewidth duration-1000 absolute left-0 top-1/2" />
    <Image
      className="animate-bounce transition-all"
      src={Logo}
      alt="Ganesh Logo"
    />
    <hr className="transition-all animate-changewidth duration-1000 absolute right-0 top-1/2" />
  </div>
  )
}

export default Loading