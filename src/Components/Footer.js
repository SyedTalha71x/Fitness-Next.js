import React from 'react'

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const Footer = () => {
    return (
        <div className={montserrat.className}>
            <footer className="text-white body-font cursor-pointer border-y-[1px] border-red-800">
                <div className="container px-5 py-24 ml-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center ">
                            <img src='https://preview.colorlib.com/theme/activitar/img/icons/chose-icon-4.png.webp'></img>
                            <span className="ml-3 text-2xl font-extrabold">O2 Gyms.</span>
                        </a>
                        <p className="mt-2 text-sm font-medium ">The Best Gym in Town</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">

                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium uppercase text-sm mb-3">Privacy Policy</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className=" ">Terms and Conditions</a>
                                </li>
                                <li>
                                    <a className=" ">Customer Care</a>
                                </li>
                                <li>
                                    <a className=" ">Help</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium uppercase text-sm mb-3">About Us</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className=" ">Our Story</a>
                                </li>
                                <li>
                                    <a className=" ">Contact Us</a>
                                </li>
                                <li>
                                    <a className=" ">Email Us</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium uppercase text-sm mb-3">Follow Us</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className=" ">Instagram</a>
                                </li>
                                <li>
                                    <a className=" ">Facebook</a>
                                </li>
                                <li>
                                    <a className=" ">Twitter</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className='copyright text-white border-y-[1px] border-slate-50 p-8 w-full h-full font-medium text-sm text-center'>
                    Made in Pakistan 2023- All rights reserved
                </div>
            </footer></div>
    )
}

export default Footer