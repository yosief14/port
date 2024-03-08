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
        <div className={`${props.className} relative`} >

            <motion.div className='  bg-black  flex flex-row justify-end border-2 border-[#4A4D52] min-w-[1200px] h-[300px] gap-10 pl-8 sm:w-[auto] '
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                    duration: boxLoadDelay,
                    ease: "easeIn"
                }}
            >
                <div className='flex w-[300px] h-[80px] flex-row justify-center items-center relative bottom-[38px] '  >
                    {/* For SVG's to scale the viewbox attribute must be set for it to be scalable*/}
                    <Image src="/Vector 1.svg" alt={"NO name badge"} width={300} height={200} className=' absolute'></Image>
                    <p className='font-pixel text-2xl relative  ' >
                        Yosief
                    </p>
                </div>


                <article className='absolute font-pixel text-2xl  top-[14%] left-[2%] w-[60%]' >

                    <AnimatePresence>
                        <PixelDialogue key={text[scene]} text={text[scene]} delay={2} ></PixelDialogue>
                    </AnimatePresence>

                    <div className='absolute flex-row top-[220px]  w-60 space-x-80 flex'>
                        <div className=' relative w-[50px] h-[25px] group ' onClick={() => updateScene(scene + 1)}>
                            <Image src="/pixelArt/fingerCursor.webp" alt={"NO name badge"} fill className='hidden group-hover:block group-hover:animate-point'></Image>
                            <button className='text-[#4A4D52] text-2xl  relative left-[70px] bottom-[10px] group-hover:text-white'>Continue</button>
                        </div>

                        <div className=' relative w-[50px] h-[25px] group ' onClick={() => updateScene(scene - 1)}>
                            <Image src="/pixelArt/fingerCursor.webp" alt={"NO name badge"} fill className='hidden group-hover:block group-hover:animate-point'></Image>
                            <button className='text-[#4A4D52] text-2xl  relative left-[70px] bottom-[10px] group-hover:text-white'>Back</button>
                        </div>
                    </div>


                </article>
                <motion.section>
                    <div className='w-[400px]'>
                        <div className={`${scene ? `bottom-[104px]` : `left-[100px] bottom-[111px]`} h-[300px] relative `}>
                            <AnimatePresence initial={false}>
                                <motion.img
                                    src={scene > 0 ? profileImage[1] : profileImage[0]}
                                    key={scene > 0 ? profileImage[1] : profileImage[0]}
                                    width={scene ? 400 : 300}
                                    alt="Wheres the Profile Image?"
                                    initial={{ x: 1000, opacity: 0, }}
                                    animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 1 } }}
                                    exit={{ x: 1000, opacity: 0, transition: { duration: 1 } }}
                                ></motion.img>

                            </AnimatePresence>
                        </div>
                    </div>

                </motion.section>

            </motion.div>
        </div>
    );
}