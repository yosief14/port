"use client"
import SectionTitle from "../SectionTitle"
import Carousel from "./Carousel"
import { motion } from "framer-motion"
export default function ProjectSection() {
    return (
        <motion.section className="flex  flex-col  items-center gap-10 relative justify-items-center py-16
     bg-[#0C0312]" >
            <SectionTitle id="projects" title="Stuff I've Done" />
            <Carousel></Carousel>
        </motion.section>
    )
}