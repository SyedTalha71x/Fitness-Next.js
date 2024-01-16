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
import Trainers from './Trainers';


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
  return (
    <>
      <div>
        <div className="home-content cursor-pointer ">
          <div className='uppercase text-4xl font-extrabold shape-1'><span className='text-red-600'>build   </span> up your</div>
          <div className={montserrat.className}>
            <h4 className='text-[7rem] font-bold uppercase shape-2 tracking-wide'>body shape</h4>
          </div>

          <div className='uppercase text-3xl font-bold shape-3 '>Transform your body with professional touch</div>

          <div className="home_btn">
            <button onClick={NavigateClick} className="homebtn rounded-md mt-7 uppercase bg-red-600 font-semibold text-white px-8 py-2 ">Join Us</button>
          </div>
        </div>
      </div>
      <Compartments />
      <About />
      <Pricing />
      <Trainers/>
      <Service />
     
      <Contact />
      <Footer />

    </>
  )
}
