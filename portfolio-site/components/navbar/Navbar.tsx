"use client"
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface NavbarProps {
    containerRef: React.MutableRefObject<null>
}
export default function Navbar(props: NavbarProps) {
    const { scrollYProgress } = useScroll(
        { container: props.containerRef }
    )
    const flexDirection = useTransform(scrollYProgress, (value) => value < 0.05 ? "row" : "column")
    const left = useTransform(scrollYProgress, value => value < 0.1 ? "auto" : "0")
    const [animate, setAnimate] = useState(true)
    const [collapsed, setCollapsed] = useState(false)

    useMotionValueEvent(scrollYProgress, "change", (value) => {
        if (value > 0.1) {
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
                style={{ alignItems: "center" }}
                className={`flex top-20 left-auto w-28 bg-slate-100 fixed font-pixel text-2xl`}
                animate={ }
            >

                <img src="/pixelArt/bottle.png" alt="bottle" className="h-20 w-10" />


                <img src="/pixelArt/navi.png" alt="navi" className={`absolute ${animate ? `left-1` : `left-40`} left-1 bottom-4 opacity-70 hover:opacity-100 h-7 w-7`} />
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