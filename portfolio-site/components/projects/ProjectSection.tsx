"use client"
import SectionTitle from "../SectionTitle"
import Carousel from "./Carousel"
import { motion } from "framer-motion"
export default function ProjectSection() {
    //TODO add mobile view
    //TODO add more projects
    return (
        <div id='projects' className="flex  flex-col gap-10  items-center min-h[500px] sm:h-fit">
            <SectionTitle title="Stuff I've Done" />
            <motion.section
                className="flex flex-col  items-center gap-5 w-full"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >

                <Carousel></Carousel>
            </motion.section>
        </div>
    )
}