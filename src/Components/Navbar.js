import React from 'react'
import { Montserrat } from 'next/font/google';
import { Roboto } from 'next/font/google'
import Link from 'next/link';
import { CiUser } from "react-icons/ci";

const roboto = Roboto({
    weight: '900',
    subsets: ['latin'],
});

const montserrat = Montserrat({
    weight: '500',
    subsets: ['latin'],
});

const Navbar = () => {
    return (
        <>
            <div className={montserrat.className}>
                <nav className='h-full cursor-pointer text-white bg-transparent p-3 flex flex-col  md:flex-row md:justify-around justify-center items-center shadow-xl'>
                    <div className="leftnav">
                        <Link href={"/home"} className=' font-bold text-2xl'>o2 Gyms <span className='text-red-600 font-extrabold'>.</span></Link>
                    </div>
                    <div className="middlenav">
                        <ul className='flex justify-center uppercase'>
                            <li className='m-2  font-medium '>Home</li>
                            <li className='m-2  font-medium '>About</li>
                            <li className='m-2  font-medium '>Contact</li>
                            <li className='m-2  font-medium '>Pricing</li>
                            <li className='m-2  font-medium '>Blogs</li>
                        </ul>
                    </div>
                    <Link className="rightnav" href={"/login"}>
                        <CiUser className='userlogin font-bold  text-3xl cursor-pointer absolute top-3 right-10' />
                    </Link>

                </nav>
            </div>

        </>
    )
}

export default Navbar