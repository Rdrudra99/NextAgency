import React from 'react'
import { InfiniteSlider } from './ui/infinite-slider'
import { ProgressiveBlur } from './ui/progressive-blur'

// Logo data structure
const logoData = [
  {
    src: "https://designpro-html.vercel.app/assets/images/company-logo/company1.png",
    alt: "Company Logo 1",
    height: "h-5"
  },
  {
    src: "https://designpro-html.vercel.app/assets/images/company-logo/company2.png",
    alt: "Company Logo 2",
    height: "h-5"
  },
  {
    src: "https://designpro-html.vercel.app/assets/images/company-logo/company3.png",
    alt: "Company Logo 3",
    height: "h-5"
  },
  {
    src: "https://designpro-html.vercel.app/assets/images/company-logo/company4.png",
    alt: "Company Logo 4",
    height: "h-5"
  },
  {
    src: "https://designpro-html.vercel.app/assets/images/company-logo/company5.png",
    alt: "Company Logo 5",
    height: "h-5"
  },
  {
    src: "https://designpro-html.vercel.app/assets/images/company-logo/company6.png",
    alt: "Company Logo 6",
    height: "h-5"
  }
];

const Logocloude = () => {
  return (
    <div className="lg:pt-25 pt-15">
      <div className="container mx-auto">
        <h2 className="uppercase text-base text-center tracking-[5px] mb-7.5 font-medium">
          Top companies trust us with their design
        </h2>
        <div className="relative py-6 md:w-[calc(100%-11rem)]">
          <InfiniteSlider
            speedOnHover={20}
            speed={40}
            gap={112}
          >
            {logoData.map((logo, index) => (
              <div className="flex" key={index}>
                <img
                  className={`mx-auto ${logo.height} w-fit dark:invert`}
                  src={logo.src}
                  alt={logo.alt}
                  width="auto"
                />
              </div>
            ))}
          </InfiniteSlider>

          <div className="bg-gradient-to-r from-[#fff6ec] via-[#fff6ec]/80 to-transparent absolute inset-y-0 left-0 w-20"></div>
          <div className="bg-gradient-to-l from-[#fff6ec] via-[#fff6ec]/80 to-transparent absolute inset-y-0 right-0 w-20"></div>
          <ProgressiveBlur
            className="pointer-events-none absolute left-0 top-0 h-full w-20"
            direction="left"
            blurIntensity={1}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute right-0 top-0 h-full w-20"
            direction="right"
            blurIntensity={1}
          />
        </div>
      </div>
    </div>
  )
}

export default Logocloude
