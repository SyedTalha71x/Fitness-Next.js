import React from 'react'
import { Montserrat } from 'next/font/google';
import { Roboto } from 'next/font/google'
import Link from 'next/link';

const roboto = Roboto({
    weight: '900',
    subsets: ['latin'],
});

const montserrat = Montserrat({
    weight: '500',
    subsets: ['latin'],
});

const about = () => {
  return (
    <div className={montserrat.className}>
      <div className="mainpage text-white my-40">
        <div className="row_2 grid grid-cols-2 ">
          <div className="left-about">
            <img className='h-[50vh] w-[40vw] mx-auto ' src="https://static.vecteezy.com/system/resources/previews/022/653/988/non_2x/treadmill-in-modern-gym-toned-image-3d-rendering-generative-ai-free-photo.jpg" alt="" />
          </div>
          <div className="right-about mt-4 mx-auto">
            <div className="heading">
              <h3 className='text-4xl font-extrabold uppercase'>Our Story</h3>
              <p className='w-[90%] mt-4 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deleniti nobis ullam, eum iure esse beatae maiores! Tenetur, debitis consectetur repellendus id, doloribus saepe, suscipit ducimus quod aspernatur consequuntur odio! Eveniet, autem odit? Commodi placeat optio beatae quibusdam molestiae recusandae temporibus ipsam aliquam quam? Tempore ab accusantium excepturi, provident quibusdam veritatis saepe tenetur. Saepe sunt est doloribus, veritatis totam commodi.</p>
              <button className="aboutbtn uppercase bg-red-600 text-white py-3 px-10 cursor-pointer mt-4">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default about