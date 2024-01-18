import React from 'react'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: ['300', '400', '500', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
});

const service = () => {
    return (
        <div className={montserrat.className}>
            <div className="service_container h-full w-full p-8 bg-black mt-6 cursor-pointer" id='services'>
                <div className="servicesection p-8">
                    <div className={montserrat.className}>
                        <h1 className='service_heading my-3 uppercase font-extrabold text-white'>Why people choose us</h1>
                    </div>
                    <p className=' font-medium text-white'>Our Sports Experts and latest sports equipment are winning combination.</p>
                </div>


                <div className="service_row grid grid-cols-3 w-full mt-4 ">
                    <div className="one_row p-8 text-white">
                        <div className="semiheading">
                            <div>
                                <img className='' src="https://preview.colorlib.com/theme/activitar/img/icons/chose-icon-1.png.webp" alt="" />
                            </div>
                            <h1 className="text-2xl uppercase font-extrabold w-ful mt-2">Support 24/24</h1>
                            <p className="text-white mt-2  ">We provide 24/24 services support to our clients</p>
                        </div>
                    </div>
                    <div className="one_row p-8 text-white">
                        <div className="semiheading">
                            <div>
                                <img src="https://preview.colorlib.com/theme/activitar/img/icons/chose-icon-5.png.webp" alt="" />
                            </div>
                            <h1 className="text-2xl uppercase font-extrabold mt-2">Daily Classes</h1>
                            <p className="text-white  mt-2 ">We provide Daily Classes group wise for Zumba,Aerobics and Cardio</p>
                        </div>
                    </div>
                    <div className="one_row p-8 text-white">
                        <div className="semiheading">
                            <div>
                                <img src="https://preview.colorlib.com/theme/activitar/img/icons/chose-icon-3.png.webp" alt="" />
                            </div>
                            <h1 className="text-2xl uppercase font-extrabold mt-2">Personalized Session</h1>
                            <p className="text-white mt-2  ">We alse provide personalized session to our clients understanding their body needs and criteria.</p>
                        </div>
                    </div>
                    <div className="one_row p-8 text-white">
                        <div className="semiheading">
                            <div>
                                <img src="https://preview.colorlib.com/theme/activitar/img/icons/chose-icon-4.png.webp" alt="" />
                            </div>
                            <h1 className="text-2xl uppercase font-extrabold mt-2">Our Equipments</h1>
                            <p className="text-white mt-2  ">We have world class Gym Equipments for our Members.</p>
                        </div>
                    </div>
                    <div className="one_row p-8 text-white">
                        <div className="semiheading">
                            <div>
                                <img src="https://preview.colorlib.com/theme/activitar/img/icons/chose-icon-2.png.webp" alt="" />
                            </div>
                            <h1 className="text-2xl uppercase font-extrabold mt-2">Our Trainers</h1>
                            <p className="text-white mt-2  ">We have certified International Trainers with many years of Experience. </p>
                        </div>
                    </div>
                    <div className="one_row p-8 text-white">
                        <div className="semiheading">
                            <div>
                                <img src="https://preview.colorlib.com/theme/activitar/img/icons/chose-icon-6.png.webp" alt="" />
                            </div>
                            <h1 className="text-2xl uppercase font-extrabold mt-2">Focus on Your Health</h1>
                            <p className="text-white mt-2  ">Full Focus on your Health, provide you a complete Diet Plans and Workouts according to your body requirements.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default service