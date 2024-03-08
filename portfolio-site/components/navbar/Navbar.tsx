"use client"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { use, useEffect, useState } from "react"
export default function Navbar() {
    const { scrollYProgress } = useScroll()
    const flexDirection = useTransform(scrollYProgress, value => value < 0.1 ? "row" : "column")
    const left = useTransform(scrollYProgress, value => value < 0.1 ? "auto" : "0")
    const [animate, setAnimate] = useState(true)

    flexDirection.onChange(value => {
        console.log(value)
    })

    return (
        <AnimatePresence>
            <motion.div
                style={{ flexDirection, left }}
                className={`flex top-0  fixed font-pixel text-2xl gap-24 bg-red-400`}
            >

                <motion.a href="#about" className=" hover:bg-slate-800 px-4 py-2 rounded-md "
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scaleX: 4, originX: 0 }}
                    transition={{ duration: 0.5 }}
                >About</motion.a>
                <a href="#projects" className=" hover:bg-slate-800 px-4 py-2 rounded-md">Projects</a>
                <a href="#timeline" className=" hover:bg-slate-800 px-4 py-2 rounded-md">Timeline</a>
            </motion.div>

        </AnimatePresence>
    )
}