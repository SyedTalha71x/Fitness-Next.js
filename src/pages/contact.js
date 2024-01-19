import React, { useState } from 'react'
import { Montserrat } from 'next/font/google';
import { Roboto } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const roboto = Roboto({
    weight: '900',
    subsets: ['latin'],
});

const montserrat = Montserrat({
    weight: '700',
    subsets: ['latin'],
});


const contact = () => {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [message, setmessage] = useState()

    const handleChange = (e) => {
        if (e.target.name == 'name') {
            setname(e.target.value);
        }
        else if (e.target.name == 'email') {
            setemail(e.target.value);
        }
        else if (e.target.name == 'message') {
            setmessage(e.target.value);
        }

    }

    const SubmitHandle = async (e) => {
        e.preventDefault();
        const data = { name, email, message };

        const response = await fetch('http://localhost:3000/api/addcontact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        let json = await response.json();
        console.log(json);
        if (json.success) {
            toast.success("Your Information has been sended", {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            toast.error(response.error, {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <div className={montserrat.className}>
            <ToastContainer
                position='top-center'
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
            />
            <section id='contact' className="text-white  relative body-font cursor-pointer border-y-[1px] border-red-800">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-4xl text-4xl font-medium title-font uppercase mb-4 text-white">Register Now</h1>
                        <p className="lg:w-2/3 mx-auto font-medium  ">Register now and lets transform together..</p>
                    </div>
                    <form action="#" onSubmit={SubmitHandle}>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="contact_row flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="name" className="leading-7 text-sm text-white">Name</label>
                                        <input onChange={handleChange} type="name" id="name" name="name" value={name} className="w-full bg-gray-100 bg-opacity-50 rounded-sm focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="email" className="leading-7 text-sm text-white">Email</label>
                                        <input onChange={handleChange} type="email" id="email" name="email" value={email} className="w-full bg-gray-100 bg-opacity-50 rounded-sm focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label for="message" className="leading-7 text-sm text-white">Message</label>
                                        <input onChange={handleChange} type='text' id="message" name="message" value={message} className="w-full bg-gray-100 bg-opacity-50 rounded-sm focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></input>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className="flex mx-auto text-black bg-white border-0 py-2 px-8 focus:outline-none hover:bg-black hover:text-white hover:font-bold rounded-md uppercase text-lg">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section></div>
    )
}

export default contact