import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Why2meLogo from './reuseable/Why2meLogo'
const Header = () => {
  return (
<header id="header" className="fixed top-0 w-full z-50 bg-[#fff6ec] transition-all duration-500 py-5">
        <div className="container">
            <div className="flex justify-between items-center">
                <Why2meLogo />
                <div className="text-3xl mt-1 cursor-pointer block lg:hidden" id="menu-toggle">
                    <Menu className="text-[#ff4f01]"/>
                </div>
                <nav id="menu" className="lg:bg-black bg-black lg:rounded-[50px] lg:static absolute left-0 top-16 z-50 w-full max-h-0 overflow-hidden opacity-0 invisible lg:max-h-full lg:opacity-100 lg:visible lg:w-auto transition-all duration-500 ease-linear">
                    <ul className="flex lg:flex-row flex-col">
                        <li className="border-b border-b-black lg:border-b-0">
                            <Link href="#how" className="text-[#dedede] font-medium font-bricolage px-5 py-2.5 inline-block hover:text-[#ff4f01] transition-all duration-500">How
                                It Works</Link>
                        </li>
                        <li className="border-b border-b-black lg:border-b-0">
                            <Link href="#services" className="text-[#dedede] font-medium font-bricolage px-5 py-2.5 inline-block hover:text-[#ff4f01] transition-all duration-500">Services</Link>
                        </li>
                        <li className="border-b border-b-black lg:border-b-0">
                            <Link href="#projects" className="text-[#dedede] font-medium font-bricolage px-5 py-2.5 inline-block hover:text-[#ff4f01] transition-all duration-500">Projects</Link>
                        </li>
                        <li className="border-b border-b-black lg:border-b-0">
                            <Link href="#pricing" className="text-[#dedede] font-medium font-bricolage px-5 py-2.5 inline-block hover:text-[#ff4f01] transition-all duration-500">Pricing</Link>
                        </li>
                        <li className="border-b border-b-black lg:border-b-0">
                            <Link href="#faqs" className="text-[#dedede] font-medium font-bricolage px-5 py-2.5 inline-block hover:text-[#ff4f01] transition-all duration-500">Faqs</Link>
                        </li>
                        <li className="border-b border-b-black lg:border-b-0">
                            <Link href="#book" className="text-[#dedede] font-medium font-bricolage px-5 py-2.5 inline-block hover:text-[#ff4f01] transition-all duration-500">Book
                                Now</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header
