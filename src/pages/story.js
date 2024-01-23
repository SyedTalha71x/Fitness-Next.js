import React, { useEffect, useRef } from 'react'
import { Roboto } from 'next/font/google'
import { Montserrat } from 'next/font/google';
import { motion, useAnimation, useInView } from "framer-motion"

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

const montserrat = Montserrat({
    weight: '500',
    subsets: ['latin'],
});


const story = () => {
    const ref = useRef(null);

    const useinview = useInView(ref, { once: true });

    const maincontrols = useAnimation();

    useEffect(() => {
        if (useinview) {
            maincontrols.start("visible");
        }
    }, [useinview]);
    return (
        <div><div ref={ref} className={montserrat.className}>
            <motion.section
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={maincontrols}
                transition={{
                    duration: 0.7, delay: 0.25
                }}

                class="about text-white body-font">
                <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                    <h1 class="title-font sm:text-2xl text-2xl mb-6 font-medium uppercase ">O2 Gyms STORY</h1>
                    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://cdn.shopify.com/s/files/1/1775/6429/files/YLA_Group_Photo-6_600x600.jpg?v=1651596188" />
                    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <h1 class="title-font sm:text-2xl text-2xl mb-4 font-medium ">OUR STORY</h1>
                        <p class="mb-8 leading-relaxed text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum eum accusantium quidem harum quisquam, velit ducimus molestias nesciunt! Praesentium deserunt sed nam, harum excepturi quas, consectetur porro, maxime cupiditate tempora aperiam. Perferendis recusandae nostrum repellat delectus eveniet sapiente dolores laudantium, id fugiat, possimus itaque, ipsa explicabo iste natus? Possimus vel mollitia consequuntur tempora quo maxime labore expedita blanditiis iste autem?
                        </p>
                    </div>
                    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <h1 class="title-font sm:text-2xl text-2xl mb-4 font-medium ">OUR MISSION</h1>
                        <p class="mb-8 leading-relaxed text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore qui itaque porro sed nesciunt delectus at laudantium rem? Culpa impedit omnis deserunt distinctio neque dolores velit. Quam vitae libero ex? Esse aut provident, aliquam modi iste aperiam similique eligendi magnam sit distinctio quos dolor, id odit vel blanditiis impedit doloribus quam accusamus laborum maiores. Animi qui quo aperiam quod cumque voluptates incidunt ullam sequi eligendi esse deleniti itaque fugiat ipsam quia culpa molestiae cum, perferendis delectus voluptate sint. Fuga vitae, vero quos tempore perspiciatis, sed nisi earum quisquam iste ex inventore? Soluta, harum vel. Quos minus odit aliquam fugit possimus.
                            .</p>
                    </div>
                    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <h1 class="title-font sm:text-2xl text-2xl mb-4 font-medium ">OUR COMMITMENT</h1>
                        <p class="mb-8 leading-relaxed text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ipsum obcaecati iste ipsa dolorem nulla culpa, excepturi beatae suscipit itaque laudantium repellendus, asperiores distinctio animi accusamus. Amet beatae aliquam cumque consequatur fuga, sed eos mollitia commodi ut laudantium, minus repellendus. Omnis tenetur reprehenderit incidunt nemo possimus fugit perferendis laboriosam error, rerum facere! Delectus illo, laboriosam neque odio numquam, libero quam vero voluptate mollitia magnam iusto quis accusantium facere, necessitatibus exercitationem.</p>
                    </div>
                </div>
            </motion.section></div></div>
    )
}

export default story