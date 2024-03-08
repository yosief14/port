"use client"
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator"
import { Magic } from "../Magic";

interface TimeCardProps {
    title: string;
    location: string;
    description: string;
    tech: string[];
    date: string;
    icon: string;
    color: string;
    company?: string;
    className?: string;
    delay: number;

}

export default function TimeCard(props: TimeCardProps) {


    return (
        <motion.article className={`flex flex-col font-pixel bg-black items-center py-6 w-[400px] rounded-md relative ml-auto gap-5 p-4`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: (0.2 * props.delay) }}
        >

            <h2 className="text-xl font-bold">{props.title}</h2>
            <Separator className={`bg-${props.color}-500`} />
            <p className={`text-${props.color}-500 `} > {props.company}</p>
            <p > {props.location}</p>
            <p className="text-center">{props.description}</p>

        </motion.article>
    )

}