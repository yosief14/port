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
const colors = [
    "border-red-500",
    "border-blue-500",
    "border-yellow-500",
    "border-purple-500",
    "border-orange-500",
    "text-red-900",
    "text-blue-500",
    "text-yellow-500",
    "text-purple-500",
    "text-orange-500",
    "border-b-red-500",
    "border-b-blue-500",
    "border-b-yellow-500",
    "border-b-purple-500",
    "border-b-orange-500",
]


export default function TimeCard(props: TimeCardProps) {
    const color = `${props.color}-500`

    return (
        <motion.article className={`flex flex-col font-pixel bg-black items-center py-6 w-[400px] rounded-md relative ml-auto gap-5 p-4 border-${props.color}-500 border-2 `}
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, delay: (0.2 * props.delay) }}
        >

            <h2 className="text-xl font-bold">{props.title}</h2>
            <Separator className={`bg-${props.color}-500`} />
            <p className={`text-${props.color}-500 text-center`} > {props.company}</p>
            <p className="italic"> {props.location}</p>
            <p className="text-left">{props.description}</p>

        </motion.article>
    )

}