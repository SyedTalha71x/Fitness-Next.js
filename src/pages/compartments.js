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

const compartments = () => {
    return (
        <div className={montserrat.className}>
            <div className="compartments h-full w-full text-white my-10 cursor-pointer" id='compartments'>
                <div className="features-content">
                    <div className={roboto.className}>
                        <h1 className='text-center w-full text-5xl font-extrabold uppercase'>Our Features</h1>
                    </div>
                    <p className='text-center w-[50%] mt-4 m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque inventore cupiditate impedit quidem totam dicta voluptatibus hic soluta sed eveniet.</p>
                    <div className="row flex justify-center items-center my-14 p-6">
                        <div className="one_row m-2  text-center h-full w-full p-6">
                            <div >
                                <div className="logo">
                                    <img className="block m-auto" src="https://preview.colorlib.com/theme/gym2/img/svg_icon/1.svg" alt="" />
                                </div>
                                <div className="small_heading mt-3">
                                    <h2 className='font-extrabold text-xl uppercase'>Weightlifting</h2>
                                </div>
                                <div className="small_para mt-3">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, esse?
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
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, esse?
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
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, esse?
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
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, esse?
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default compartments