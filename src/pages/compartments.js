import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useState, useRef } from 'react';

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

const compartments = () => {

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

                className="compartments h-full w-full text-white my-10 cursor-pointer" id='compartments'>
                <div className="features-content">
                    <div className={roboto.className}>
                        <h1 className='text-center w-full text-5xl font-extrabold uppercase'>Our Features</h1>
                    </div>
                    <p className='text-center w-[50%] mt-4 m-auto'>Here are some of our gold feature we provide.</p>
                    <div className="row flex justify-center items-center my-14 p-10">
                        <div className="one_row m-2  text-center h-full w-full p-6">
                            <div >
                                <div className="logo">
                                    <img className="block m-auto" src="https://preview.colorlib.com/theme/gym2/img/svg_icon/1.svg" alt="" />
                                </div>
                                <div className="small_heading mt-3">
                                    <h2 className='font-extrabold text-xl uppercase'>Weightlifting</h2>
                                </div>
                                <div className="small_para mt-3">
                                    We provide a proper Weightlifting and Strength Area.
                                </div>
                            </div>
                        </div>
                        <div className="two_row m-2 text-center h-full w-full p-6 " >
                            <div>

                                <img className="block m-auto" src="https://preview.colorlib.com/theme/gym2/img/svg_icon/2.svg" alt="" />

                                <div className="small_heading mt-3">
                                    <h2 className='font-extrabold text-xl uppercase'>Nutritions</h2>
                                </div>
                                <div className="small_para mt-3">
                                    We provide a proper diet chart and nutrition plan to our clients.
                                </div>

                            </div>
                        </div>
                        <div className="three_row m-2 text-center h-full w-full p-6 ">
                            <div>
                                <div className="logo">
                                    <img className="block m-auto" src="https://preview.colorlib.com/theme/gym2/img/svg_icon/4.svg" alt="" />
                                </div>
                                <div className="small_heading mt-3">
                                    <h2 className='font-extrabold text-xl uppercase'>Cardio</h2>
                                </div>
                                <div className="small_para mt-3">
                                    A proper Cardio Section for Males and Females.
                                </div>

                            </div>
                        </div>
                        <div className="four_row m-2 text-center h-full w-full p-6 ">
                            <div>
                                <div className="logo">
                                    <img className="block m-auto" src="https://preview.colorlib.com/theme/gym2/img/svg_icon/3.svg" alt="" />
                                </div>
                                <div className="small_heading mt-3">
                                    <h2 className='font-extrabold text-xl uppercase'>Personal Training</h2>
                                </div>
                                <div className="small_para mt-3">
                                    We also provide 1 on 1 Personal Trainings.
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>
    )
}

export default compartments