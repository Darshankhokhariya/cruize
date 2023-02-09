import React from 'react'
import { Fragment, useState } from "react";
import { Link } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";


function Nav() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <>
            {/* Page Container */}
            <div id="page-container" className="flex flex-col mx-auto w-full  absolute z-20 top-0 bg-black">
                {/* Page Header */}
                <header id="page-header" className="flex flex-none items-center bg-black text-white shadow-sm z-1 fixed w-full">
                    <div className="container xl:max-w-7xl mx-auto px-4 lg:px-8">
                        <div className="flex justify-between py-4">
                            {/* Left Section */}
                            <div className="flex items-center">
                                {/* Logo */}
                                <a href="#" className="group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-700 active:text-gray-700 no-underline">
                                    <span>
                                        {/* <img src={require('../images/logo3.png')} alt="" width='100px' className='' /> */}
                                    </span>
                                </a>
                                {/* END Logo */}
                            </div>
                            {/* END Left Section */}

                            {/* Right Section */}
                            <div className="flex items-center space-x-1 lg:space-x-5">
                                {/* Desktop Navigation */}
                                <nav className="hidden lg:flex lg:items-center lg:space-x-2">
                                    <Link to='/home'>
                                        <a href="#" className="text-lg text-white font-medium flex items-center space-x-2 px-3 py-2 no-underline">
                                            <span>Home</span>
                                        </a>
                                    </Link>
                                    <Link to='/shop'>
                                        <a href="#" className="text-lg text-white font-medium flex items-center space-x-2 px-3 py-2 no-underline">
                                            <span>Shop</span>
                                        </a>
                                    </Link>
                                    <a href="#" className="text-lg text-white font-medium flex items-center space-x-2 px-3 py-2 no-underline">
                                        <span>Projects</span>
                                    </a>
                                    <Link to='/contactus'>
                                        <a href="" className="text-lg text-white font-medium flex items-center space-x-2 px-3 py-2 no-underline">
                                            <span className='no-underline'>Contact Us</span>
                                        </a>
                                    </Link>
                                    <div className='flex ml-20'>
                                    <svg
                                    class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path
                                        d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0
							2-1.61L23 6H6"></path>
                                </svg>
                                <Link to='/login'>
                                <div className='text-2xl mx-4'>
                                    <AiOutlineUser/>
                                </div>
                                </Link>

                                    </div>
                                </nav>
                                {/* END Desktop Navigation */}

                                {/* User Dropdown */}

                                {/* END User Dropdown */}

                                {/* Toggle Mobile Navigation */}
                                <div className="lg:hidden flex">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded  text-white border-none"
                                        onClick={() => setMobileNavOpen(!mobileNavOpen)}
                                    >
                                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="hi-solid hi-menu inline-block w-5 h-5"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                                    </button>
                                    <cart className="mt-2 mx-2">
                                    <svg
                                    class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path
                                        d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0
							2-1.61L23 6H6"></path>
                                </svg>  
                                    </cart>
                                </div>
                                {/* END Toggle Mobile Navigation */}
                            </div>
                            {/* END Right Section */}
                        </div>

                        {/* Mobile Navigation */}
                        <div
                            className={`lg:hidden ${mobileNavOpen ? "" : "hidden"
                                }`}
                        >
                            <nav className="flex flex-col space-y-2 py-4 border-t">
                                <a href="#" className="text-sm font-medium flex items-center space-x-2 px-3 no-underline py-2 rounded border border-blue-50 bg-blue-50 text-black">
                                    <span>Home</span>
                                </a>
                                <a href="#" className="text-sm font-medium flex items-center space-x-2 px-3 no-underline py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 active:border-blue-100">
                                    <span>Profile</span>
                                </a>
                                <a href="#" className="text-sm font-medium flex items-center space-x-2 px-3 no-underline py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 active:border-blue-100">
                                    <span>Projects</span>
                                </a>
                                <a href="#" className="text-sm font-medium flex items-center space-x-2 px-3 no-underline  py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 active:border-blue-100">
                                    <span>Settings</span>
                                </a>
                            </nav>
                        </div>
                        {/* END Mobile Navigation */}
                    </div>
                </header>
            </div>


        </>
    )
}

export default Nav