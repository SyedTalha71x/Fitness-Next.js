import React, { useState } from 'react'
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
const fs = require('node:fs');

const montserrat = Montserrat({
    weight: '700',
    subsets: ['latin'],
});

const blogs = (props) => {
    const [blog, setblog] = useState(props.allblogs)
    return (
        <div >
            <section className="blog cursor-pointer">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                        <div className={montserrat.className}>
                            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white uppercase">Our Blogs</h2>
                            <p className="font-medium text-white uppercase ">Checkout our blogs related to fitness and sports.</p>
                        </div>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">

                        {(blog).map((k) => {
                            return <div key={k.slug} className="p-6 bg-gray-600 rounded-lg shadow-md text-white">
                                <h2 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white"><Link href={`/Blogpost/${k.slug}`}>
                                    {k.title}
                                </Link></h2>
                                <p className="mb-5 font-light text-white ">{k.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-7 h-7 rounded-full bg-gray-700"> </div>
                                        <span className="font-medium dark:text-white">
                                            Jese Leos
                                        </span>
                                    </div>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </section></div>
    )
}

export async function getStaticProps() {
    let data = await fs.promises.readdir("jsondata");
    let myfile;
    let allBlogs = [];
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        myfile = await fs.promises.readFile(("jsondata/" + item), 'utf8');
        allBlogs.push(JSON.parse(myfile));
    }
    return {
        props: {
            allBlogs
        },
    }

}

export default blogs