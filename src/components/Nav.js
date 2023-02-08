import React from 'react'
import { Fragment, useState } from "react";
import { Link } from 'react-router-dom';


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
                                    <a href="#" className="text-lg text-white font-medium flex items-center space-x-2 px-3 py-2 no-underline">
                                        <span>Home</span>
                                    </a>
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
                                </nav>
                                {/* END Desktop Navigation */}

                                {/* User Dropdown */}

                                {/* END User Dropdown */}

                                {/* Toggle Mobile Navigation */}
                                <div className="lg:hidden">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
                                        onClick={() => setMobileNavOpen(!mobileNavOpen)}
                                    >
                                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="hi-solid hi-menu inline-block w-5 h-5"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                                    </button>
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