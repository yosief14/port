"use client"
import SectionTitle from "../SectionTitle"
import Carousel from "./Carousel"
import { motion } from "framer-motion"
export default function ProjectSection() {
    //TODO add mobile view
    //TODO add more projects
    return (
        <motion.section className="flex flex-col  items-center gap-10  justify-items-center py-16 min-h-[85%] w-full" >
            <SectionTitle id="projects" title="Stuff I've Done" />
            <Carousel></Carousel>
        </motion.section>
    )
}