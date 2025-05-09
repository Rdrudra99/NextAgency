import { ArrowUpRight, FileStack, GlobeLock, HeartHandshake } from 'lucide-react'
import React from 'react'

const Workprocess = () => {
  return (
<section id="how" className="lg:pt-25 pt-15">
        <div className="container mx-auto">
            <div className="text-center pb-15 fadeInUp" data-delay="0.2" style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }}>
                <h3 className="border border-[#bebebe] py-2.5 px-5 rounded-3xl md:text-base md:leading-5 text-sm inline-flex items-center gap-1.5 font-normal mb-[5px]">
                    <ArrowUpRight className="text-[#ff4f01] h-4 w-4" />
                    <span>Work Process</span>
                </h3>
                <h2 className="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black-100 font-medium">
                    We design. You grow</h2>
                <p className="md:text-xl md:leading-7 text-base mt-2">Our process is as simple as possible.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-x-6 gap-y-12.5 lg:pt-15 pt-0">
                <div className="flex flex-col items-center text-center relative sm:px-[25px] px-0 ">
                    <div className="lg:w-[65px] lg:h-[65px] w-12.5 h-12.5 rounded-full flex items-center justify-center border border-[rgba(0,0,0,.08)] relative">
                        {/* <i className="ri-shake-hands-line text-[25px]"></i> */}
                        <HeartHandshake className='text-[25px]' />
                        <div className="overlay-list absolute -right-2 -top-2 bg-primary flex justify-center items-center text-white lg:w-7.5 lg:h-7.5 w-6 h-6 rounded-full">
                            <span className="lg:font-medium text-sm">01</span>
                        </div>
                    </div>
                    <div className="lg:pt-6 pt-5">
                        <div className="title-box">
                            <h3 className="lg:text-[32px] text-[26px] lg:leading-[30px] font-bold"><a href="#">Subscribe</a>
                            </h3>
                        </div>
                        <div className="text-box lg:mt-[22px] mt-4">
                            <p className="text-lg font-medium leading-7">Select your plan that fits your needs, get
                                access to Trello board within 24 hours,
                                and start listing your requests.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center relative sm:px-[25px] px-0 ">
                    <div className="absolute top-0 left-[-110px] opacity-50 lg:block hidden">
                        <img src="https://designpro-html.vercel.app/assets/images/shapes/workprocess-shape2.png" alt="shapes"/>
                    </div>
                    <div className="lg:w-[65px] lg:h-[65px] w-12.5 h-12.5 rounded-full flex items-center justify-center border border-[rgba(0,0,0,.08)] relative">
                        {/* <i className="ri-global-fill text-[25px]"></i> */}
                        <GlobeLock className='text-[25px]' />
                        <div className="overlay-list absolute -right-2 -top-2 bg-primary flex justify-center items-center text-white lg:w-7.5 lg:h-7.5 w-6 h-6 rounded-full">
                            <span className="lg:font-medium text-sm">02</span>
                        </div>
                    </div>
                    <div className="lg:pt-6 pt-5">
                        <div className="title-box">
                            <h3 className="lg:text-[32px] text-[26px] lg:leading-[30px] font-bold"><a href="#">Receive</a>
                            </h3>
                        </div>
                        <div className="text-box lg:mt-[22px] mt-4">
                            <p className="text-lg font-medium leading-7">Start receiving your designs within 2-3
                                business days, or even sooner for smaller
                                tasks. Yes, it can be that fast.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center relative sm:px-[25px] px-0 ">
                    <div className="absolute top-0 left-[-110px] opacity-50 lg:block hidden">
                        <img src="https://designpro-html.vercel.app/assets/images/shapes/workprocess-shape1.png" alt="shapes"/>
                    </div>
                    <div className="lg:w-[65px] lg:h-[65px] w-12.5 h-12.5 rounded-full flex items-center justify-center border border-[rgba(0,0,0,.08)] relative">
                        {/* <i className="ri-stack-line text-[25px]"></i> */}
                        <FileStack className='text-[25px]' />
                        <div className="overlay-list absolute -right-2 -top-2 bg-primary flex justify-center items-center text-white lg:w-7.5 lg:h-7.5 w-6 h-6 rounded-full">
                            <span className="lg:font-medium text-sm">03</span>
                        </div>
                    </div>
                    <div className="lg:pt-6 pt-5">
                        <div className="title-box">
                            <h3 className="lg:text-[32px] text-[26px] lg:leading-[30px] font-bold"><a href="#">Continue</a>
                            </h3>
                        </div>
                        <div className="text-box lg:mt-[22px] mt-4">
                            <p className="text-lg font-medium leading-7">Approve designs or request revisions; we're not
                                done until you're thrilled. Your
                                satisfaction is our commitment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Workprocess
