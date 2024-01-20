import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google';
import { Roboto } from 'next/font/google'
import Link from 'next/link';
import Compartments from './compartments';
import About from './about';
import Pricing from './pricing';
import Service from './service';
import Footer from '@/Components/Footer';
import Contact from './contact';
import Tour from './tour';
import Trainers from './Trainers';
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useState, useRef } from 'react';


const roboto = Roboto({
  weight: '900',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: '900',
  subsets: ['latin'],
});

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const NavigateClick = () => {
    window.location.href = "/#contact"
  }

  const ref = useRef(null);

  const useinview = useInView(ref, { once: true });

  const maincontrols = useAnimation();

  useEffect(() => {
    if (useinview) {
      maincontrols.start("visible");
    }
  }, [useinview]);
  return (
    <>
      <div ref={ref}>
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
          className="home-content cursor-pointer ">
          <div className='uppercase text-4xl font-extrabold shape-1'><span className='text-red-600'>build   </span> up your</div>
          <div className={montserrat.className}>
            <h4 className='text-[7rem] font-bold uppercase shape-2 tracking-wide'>body shape</h4>
          </div>

          <div className='uppercase text-3xl font-bold shape-3 '>Transform your body with professional touch</div>

          <div className="home_btn">
            <button onClick={NavigateClick} className="homebtn rounded-md mt-7 uppercase bg-red-600 font-semibold text-white px-8 py-2 ">Join Us</button>
          </div>
        </motion.div>
      </div>
      <Compartments />
      <About />
      <Pricing />
      <Trainers />
      <Service />
      {/* <Tour />  */}

      <Contact />
      <Footer />

    </>
  )
}
