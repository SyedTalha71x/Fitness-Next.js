import React, { useEffect, useRef } from 'react'
import { Montserrat } from 'next/font/google';
import { Roboto } from 'next/font/google'
import Link from 'next/link';
import { motion, useAnimation, useInView } from "framer-motion"

const roboto = Roboto({
  weight: '900',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
});

const about = () => {
  const ref = useRef(null);

  const useinview = useInView(ref, { once: true });

  const maincontrols = useAnimation();

  useEffect(() => {
    if (useinview) {
      maincontrols.start("visible");
    }
  }, [useinview]);
  return (
    <div ref={ref} className={montserrat.className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={maincontrols}
        transition={{
          duration: 0.7, delay: 0.25
        }}
        className="mainpage text-white my-40" id='about'>
        <div className="row_2 grid grid-cols-2 ">
          <div className="left-about">
            <img className='h-[50vh] w-[40vw] mx-auto ' src="https://cdn.shopify.com/s/files/1/1775/6429/files/YLA_Group_Photo-6_600x600.jpg?v=1651596188" alt="" />
          </div>
          <div className="right-about mt-4 mx-auto">
            <div className="heading">
              <h3 className='text-4xl font-extrabold uppercase'>Our Story</h3>
              <p className='w-[90%] mt-4 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deleniti nobis ullam, eum iure esse beatae maiores! Tenetur, debitis consectetur repellendus id, doloribus saepe, suscipit ducimus quod aspernatur consequuntur odio! Eveniet, autem odit? Commodi placeat optio beatae quibusdam molestiae recusandae temporibus ipsam aliquam quam? Tempore ab accusantium excepturi, provident quibusdam veritatis saepe tenetur. Saepe sunt est doloribus, veritatis totam commodi.</p>
              <div className='mt-6'>

                <Link href={"/story"} className="aboutbtn uppercase mt-10 rounded-md bg-red-600 text-white py-3 px-10 cursor-pointer">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  )
}

export default about