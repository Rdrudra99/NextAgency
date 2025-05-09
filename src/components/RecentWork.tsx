import React from 'react'

const RecentWork = () => {
  return (
<div className="pt-5" id="portfolio">
        <div>
            <img src="https://designpro-html.vercel.app/assets/images/shapes/work-scribble.png" alt="custom" className="max-w-[300px]"/>
        </div>
        <div className="px-3">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
                <div>
                    <div className="single-header-work-img">
                        <img src="https://designpro-html.vercel.app/assets/images/projects/work7.jpg" alt="project" className="border-8 border-[#ccc] rounded-[10px]"/>
                    </div>
                </div>
                <div>
                    <div className="single-header-work-img">
                        <img src="https://designpro-html.vercel.app/assets/images/projects/work1.jpg" alt="project" className="border-8 border-[#ccc] rounded-[10px]"/>
                    </div>
                </div>
                <div>
                    <div className="single-header-work-img">
                        <img src="https://designpro-html.vercel.app/assets/images/projects/work6.jpg" alt="project" className="border-8 border-[#ccc] rounded-[10px]"/>
                    </div>
                </div>
                <div>
                    <div className="single-header-work-img">
                        <img src="https://designpro-html.vercel.app/assets/images/projects/work5.jpg" alt="project" className="border-8 border-[#ccc] rounded-[10px]"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecentWork
