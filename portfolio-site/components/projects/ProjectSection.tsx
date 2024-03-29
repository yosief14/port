"use client"
import SectionTitle from "../SectionTitle"
import Carousel from "./Carousel"
import { motion } from "framer-motion"
export default function ProjectSection() {
    //bg-[linear-gradient(to_right_top,#0a1114,#0a0e12,#0a0b0e,#08070a,#050405,#050305,#050104,#060003,#090006,#0b010a,#0c020e,#0c0312)]
    return (
        <motion.section className="flex flex-col  items-center gap-10  justify-items-center py-16  w-full" >
            <SectionTitle id="projects" title="Stuff I've Done" />
            <Carousel></Carousel>
        </motion.section>
    )
}