import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Hero404 from '../../public/vectors/404-hero.svg'

const NotFoundPage = () => {
    return (
        <div className="bg-background">
          <div className="container bg-background w-screen h-screen overflow-hidden">
            <Image
              src={Hero404}
              alt="404 hero"
              className="absolute left-0 bottom-0 w-3/4 sm:w-3/4 md:w-1/2 pointer-events-none"
            />
            <div className="fixed right-8 sm:right-32 lg:right-96 top-40 md:top-56">
              <h3 className="text-lg font-light text-white leading-loose pr-1 mb-2">
                {`Hey! You seem to be lost :(`}
              </h3>
              <h1 className="font-bold text-xl md:text-1xl text-white leading-none">
                404. <br /> Not Found.
              </h1>
              <div className="mt-6">
                <Link href="/" />
              </div>
            </div>
          </div>
        </div>
      );
}

export default NotFoundPage