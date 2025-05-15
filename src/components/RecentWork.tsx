'use client'
import React from 'react'
import Image from 'next/image'

const RecentWork = () => {
  const workImages = [
    // '/Hero1.png',
    '/Hero2.png',
    '/Hero3.png',
    '/Hero4.png',
    '/Hero5.png',
  ]

  return (
    <section id="portfolio" className="py-10 px-4 lg:px-8">
      <div >
        <Image
          src="/work-scribble.png"
          alt="Decorative scribble"
          width={300}
          height={80}
          className="max-w-[300px] h-auto"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {workImages.map((src, index) => (
          <div key={index} className="rounded-[10px] overflow-hidden border-8 border-[#ccc]">
            <Image
              src={src}
              alt={`Project ${index + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecentWork
