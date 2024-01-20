import React, { useState } from 'react'
import { Montserrat } from 'next/font/google';
import { Roboto } from 'next/font/google'
import Link from 'next/link';
import { CiUser } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";

const roboto = Roboto({
    weight: '900',
    subsets: ['latin'],
});

const montserrat = Montserrat({
    weight: '500',
    subsets: ['latin'],
});

const Navbar = ({ user, logout }) => {

    const [dropdown, setdropdown] = useState(false)
    return (
        <>
            <div className={montserrat.className}>
                <nav className='h-full cursor-pointer text-white bg-transparent p-3 flex flex-col  md:flex-row md:justify-around justify-center items-center shadow-xl'>
                    <div className="leftnav">
                        <Link href={"/home"} className=' font-bold text-2xl'>o2 Gyms <span className='text-red-600 font-extrabold'>.</span></Link>
                    </div>
                    <div className="middlenav">
                        <ul className='flex justify-center uppercase'>
                            <div className='nav_rows'>
                                <Link href={"/"} className='m-2  font-medium '>Home</Link>
                                <Link href={"/#about"} className='m-2  font-medium '>About</Link>
                                <Link href={"/#contact"} className='m-2  font-medium '>Contact</Link>
                                <Link href={"/#services"} className='m-2  font-medium '>Facilities</Link>
                                <Link href={"/#pricing"} className='m-2  font-medium '>Pricing</Link>
                                <Link href={"/#blogs"} className='m-2  font-medium '>Blogs</Link>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <a onMouseOver={() => { setdropdown(true) }}>
                            {dropdown && <div className="z-50 my-5 h-[190px] absolute right-14 top-4 text-base list-none bg-slate-200 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-black dark:text-white">Admin</span>
                                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">admin@gmail.com</span>
                                </div>
                                <ul className="py-2" aria-labelledby="user-menu-button">

                                    <hr className='bg-black w-3/4 m-auto' />

                                    <hr className='bg-black  w-3/4 m-auto' />
                                    <li>
                                        <p onClick={logout} className="block px-4 py-2 text-sm text-black uppercase w-full hover:bg-gray-300 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</p>
                                    </li>
                                    <hr className='bg-black w-3/4 m-auto' />
                                    <li>
                                        <p onClick={() => setdropdown(false)} className="block px-4 py-2 text-extrabold text-sm uppercase text-black w-full hover:bg-gray-300 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Exit</p>
                                    </li>
                                </ul>
                            </div>
                            }
                            {user.value && <FaCircleUser className='text-3xl font-extrabold cursor-pointer absolute top-3 right-10' />}
                        </a>
                    </div>
                    <Link className="rightnav" href={"/login"}>
                        {!user.value && <CiUser className='userlogin font-bold  text-3xl cursor-pointer absolute top-3 right-10' />}
                    </Link>

                </nav>
            </div>

        </>
    )
}

export default Navbar