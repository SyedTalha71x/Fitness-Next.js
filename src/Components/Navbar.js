import React from 'react'
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

const Navbar = ({ user }) => {
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
                        {user.value && <FaCircleUser className='text-3xl font-extrabold cursor-pointer absolute top-3 right-10' />}
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