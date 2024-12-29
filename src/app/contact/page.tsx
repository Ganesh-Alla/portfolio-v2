import Contact from '@/components/Contact'
import React from 'react'

const ContactPage = () => {
  return (
      <>
        <section className="mx-auto mb-40 mt-20 w-full gap-10 px-14 md:px-20">
          <div className="ml-2  mx-auto max-w-7xl">
            <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
              Contact
            </h1>
            <div className="my-2">
              <span className="text-sm text-muted-foreground">
              Let&apos;s turn ideas into reality together.
              </span>
            </div>
          <Contact/>
            <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
              <span className="text-xl font-light md:text-2xl">
              Every great project starts with a conversation. Let&apos;s talk!.</span>
            </div>
          </div>
        </section>
        </>
  )
}

export default ContactPage