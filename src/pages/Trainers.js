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
    weight: '900',
    subsets: ['latin'],
});


const Trainers = () => {
    const ref = useRef(null);

    const useinview = useInView(ref, { once: true });

    const maincontrols = useAnimation();

    useEffect(() => {
        if (useinview) {
            maincontrols.start("visible");
        }
    }, [useinview]);
    return (
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

                className="trainers_section">
                <div className="train_section_heading text-white text-center mt-5">
                    <div className={montserrat.className}>
                        <h1 className='text-4xl font-extrabold tracking-wide uppercase'>Our Trainers</h1>
                    </div>
                    <p className='w-full mt-2 font-semibold text-xl'>Meet with our Professional certified Fitness Trainers.</p>


                    <div className="trainers flex justify-center items-center mt-4 p-6">
                        <div className="train_row relative h-[40vh] w-full bg-black overflow-hidden m-3">
                            <img className='h-[40vh] object-cover object-top w-full block' src="https://wallpapers.com/images/high/dramatic-side-profile-of-chris-bumstead-1f490ym8l788gktn.webp" alt="" />
                            <div className="train_content">
                                <h1 className='text-2xl uppercase font-extrabold text-white'>Chris Bumsted</h1>
                                <button className="tran_btn text-white bg-black py-3 px-14 uppercase rounded-md">Hire Now</button>
                            </div>
                        </div>
                        <div className="train_row relative h-[40vh] w-full bg-black overflow-hidden m-3">
                            <img className='h-[40vh] object-cover object-top w-full block' src="https://image-cdn.essentiallysports.com/wp-content/uploads/MV5BMzE5YTFlMjAtM2M2MC00NzcxLThjMmUtOTE3ZDljZmI1OThmXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw%40%40._V1_.jpg?width=600" alt="" />
                            <div className="train_content">
                                <h1 className='text-2xl uppercase font-extrabold text-white'>Ronnie Coleman</h1>
                                <button className="tran_btn text-white bg-black py-3 px-14 uppercase rounded-md">Hire Now</button>
                            </div>
                        </div>
                        <div className="train_row relative h-[40vh] w-full bg-black overflow-hidden m-3">
                            <img className='h-[40vh] object-cover object-top w-full block' src="https://uploads-ssl.webflow.com/5e50902959cc1c4c17f94cb1/5e546825b0467da565d80e11_Best%20Los%20Angeles%20Personal%20Trainer.jpg" alt="" />
                            <div className="train_content">
                                <h1 className='text-2xl uppercase font-extrabold text-white'>Micheal Lorum</h1>
                                <button className="tran_btn text-white bg-black py-3 px-14 uppercase rounded-md">Hire Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>


        </div>
    )
}

export default Trainers