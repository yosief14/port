"use client"
import SectionTitle from "../SectionTitle"
import Carousel from "./Carousel"
import { motion } from "framer-motion"
export default function ProjectSection() {
    //TODO add mobile view
    //TODO add more projects
    return (
        <motion.div

            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            id='projects' className="flex  flex-col gap-10  sm:mb-40 items-center min-h[500px] sm:h-fit">
            <SectionTitle title="Stuff I've Done" />
            <section
                className="flex flex-col  items-center gap-5 w-full"
            >

                <Carousel></Carousel>
            </section>
        </motion.div>
    )
}