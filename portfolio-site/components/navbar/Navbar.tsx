"use client"
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from "framer-motion"
import { Fullscreen } from "lucide-react"
import { useState, useEffect } from "react"

interface NavbarProps {
    containerRef: React.MutableRefObject<null>
}
export default function Navbar(props: NavbarProps) {
    const { scrollYProgress } = useScroll(
        { container: props.containerRef }
    )
    const flexDirection = useTransform(scrollYProgress, (value) => value < 0.05 ? "row" : "column")

    const [animate, setAnimate] = useState(true)
    const [collapsed, setCollapsed] = useState(false)

    useMotionValueEvent(scrollYProgress, "change", (value) => {
        if (value > 0.01 &&
            window.matchMedia("(min-width: 1024px)").matches
        ) {
            setAnimate(false)
            setCollapsed(true)
        } else {
            setAnimate(true)
            setCollapsed(false)
        }

    })

    return (
        <AnimatePresence>
            <motion.div
                className={`w-full lg:top-[5%] z-10 fixed lg:fixed lg:flex lg:justify-center bg-[#210b24] lg:bg-transparent `}


            >
                <motion.div className="  py-3 font-pixel text-base flex flex-row items-center justify-between md:py-0 md:gap-9 md:justify-center lg:justify-start relative   overflow-hidden sm:text-2xl lg:w-[900px] "
                    animate={{ x: !collapsed ? 0 : -80, transition: { duration: 0.2 } }}
                >
                    <motion.img src="/pixelArt/bottle.png" alt="bottle" className="h-10 w-auto relative z-30 lg: sm:h-16 left-5 md:left-9"
                        animate={!collapsed ? { rotate: 90, transition: { delay: 0.2 } } : { rotate: 0, transition: { delay: 0.2 } }}



                    />
                    <AnimatePresence>
                        {!collapsed &&
                            <motion.div className="flex flex-row md:gap-4 origin-left mx-auto"
                                key="navBar"
                                initial={{ x: -700, opacity: 0 }}
                                animate={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
                                exit={{ x: -700, opacity: 0, transition: { duration: 0.3, delay: 0.1 } }}
                            >
                                <a href="#about" className=" hover:bg-slate-800 px-4 py-1 rounded-md "
                                >About</a>
                                <a href="#projects" className=" hover:bg-slate-800 px-4 py-1 rounded-md">Projects</a>
                                <a href="#timeline" className=" hover:bg-slate-800 px-4 py-1 rounded-md">Timeline</a>
                            </motion.div>
                        }
                    </AnimatePresence>

                    <motion.img src="/pixelArt/navi.png" alt="navi" className={`z-30 relative lg:absolute lg:top-7 lg:right-0 opacity-50 h-5 w-5 sm:h-7 sm:w-7 `}
                        animate={{ x: !collapsed ? 0 : -835, transition: { duration: 0.4, }, scale: 0.8 }}
                        whileHover={{ opacity: collapsed ? 1 : 0.8 }}

                    />
                </motion.div>
            </motion.div>



        </AnimatePresence >
    )
}
{/*    {!collapsed ?
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ originX: 1, flexDirection, left, alignItems: "center" }}
                    >
                        <a href="#about" className=" hover:bg-slate-800 px-4 py-2 rounded-md "
                        >About</a>
                        <a href="#projects" className=" hover:bg-slate-800 px-4 py-2 rounded-md">Projects</a>
                        <a href="#timeline" className=" hover:bg-slate-800 px-4 py-2 rounded-md">Timeline</a>
                    </motion.div>
                    : null}*/}