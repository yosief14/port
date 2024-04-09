"use client"
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, } from "framer-motion";
import PixelDialogue from './PixelDialogue';

interface ChatBoxProps {
    className?: string
}

export default function ChatBox(props: ChatBoxProps) {

    const [scene, setScene] = useState(0);
    const profileImage = ["/pixelArt/Profile.png", "/pixelArt/pixelArt.png"]
    const text = ["Hi there!\u2028\n I'm Yosief , \ra Full Stack Developer,\rcurry enjoyer, \rand if you couldn't tell I have a healthy appreciation for video games.\r\nBefore we continue let me slip into something less comfertable.\n", "GOD this thing ITCHES\u2028\n\nAs you can tell by the magical amount of fingers on my hand, I like using generative ai tools.\r\nJust......\rdont stare too long. "]
    let boxLoadDelay = 0.5;

    const updateScene = (newValue: number) => {
        console.log(newValue)
        if ((newValue >= 0 && newValue < text.length)) {
            setScene(newValue)
        }
    }

    return (
        <div className={`${props.className} relaitve flex h-full justify-center w-full items-center`} >

            <motion.div className='bg-black  flex flex-col relative min-h-[300px]  h-fit  border-2 border-[#4A4D52] w-[95%] sm:flex-row  sm:w-11/12 lg:w-[900px] sm:h-[300px]'
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                    duration: boxLoadDelay,
                    ease: "easeIn"
                }}
            >


                <article className='relative flex flex-col font-pixel text-base min-h-[300px] h-full w-full sm:text-lg md:text-xl sm:h-[300px] sm:w-[70%] p-2' >

                    <AnimatePresence>
                        <PixelDialogue key={text[scene]} text={text[scene]} delay={2} ></PixelDialogue>
                    </AnimatePresence>

                    <div className='mt-auto bottom-[10%] relative flex-col sm:flex-row  sm:space-x-[40%] flex'>
                        <div className='flex-row flex relative items-center  group ' onClick={() => updateScene(scene + 1)}>
                            <Image src="/pixelArt/fingerCursor.webp" alt={"NO name badge"} height={25} width={50} className='order-2 transform top-2 h-[25px] w-[50px] relative group-hover:opacity-100 group-hover:animate-point opacity-0 scale-x-[-1] sm:scale-x-100 sm:order-1 '></Image>
                            <button className='text-[#4A4D52] sm:order-1 group-hover:text-white'>Continue</button>
                        </div>

                        <div className=' flex-row flex relative items-center  group ' onClick={() => updateScene(scene - 1)}>
                            <Image src="/pixelArt/fingerCursor.webp" alt={"NO name badge"} height={25} width={50} className='order-2 transform top-2 h-[25px] w-[50px] relative group-hover:opacity-100 group-hover:animate-point opacity-0 scale-x-[-1] sm:scale-x-100 sm:order-1 '></Image>
                            <button className='text-[#4A4D52] sm:order-1  group-hover:text-white'>Back</button>
                        </div>
                    </div>


                </article>
                <div className='flex  px-3 sm:px-8 h-[80px] flex-row justify-center items-center absolute right-5 sm:right-[40%] bottom-[86.5%]'  >
                    {/* For SVG's to scale the viewbox attribute must be set for it to be scalable*/}
                    <Image src="/Vector 1.svg" alt={"NO name badge"} width={300} height={200} className='absolute'></Image>
                    <p className='font-pixel text-lg sm:text-2xl relative' >
                        Yosief
                    </p>
                </div>
                <div className='overflow-hidden flex absolute border-b-2 left-[50%] top-[55%] h-[250px] w-[250px] sm:h-[340px] sm:w-[340px] sm:sm:relative sm:top-[-41px] sm:left-[1px]'>

                    <AnimatePresence initial={false}>
                        <motion.img
                            src={scene > 0 ? profileImage[1] : profileImage[0]}
                            key={scene > 0 ? profileImage[1] : profileImage[0]}
                            alt="Wheres the Profile Image?"
                            initial={{ y: 500, opacity: 0, }}
                            animate={{ y: 0, opacity: 1, transition: { duration: 1, delay: 1 } }}
                            exit={{ y: 500, opacity: 0, transition: { duration: 1 } }}
                            className='object-scale-down h-full w-full '
                        ></motion.img>

                    </AnimatePresence>

                </div>


            </motion.div>
        </div>
    );
}