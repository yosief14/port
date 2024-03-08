"use client"
import { TimelineElement } from '../../public/timelineAssets/timelineElements';
import EntryIcon from './EntryIcon';
import TimeCard from './TimeCard';
import { motion } from "framer-motion";

interface TimelineEntryProps {
    element: TimelineElement;
    delay: number;
}

export default function TimelineEntry(props: TimelineEntryProps) {
    const colors = [
        "bg-red-500",
        "bg-blue-500",
        "bg-yellow-500",
        "bg-purple-500",
        "bg-orange-500",
        "text-red-900",
        "text-blue-500",
        "text-yellow-500",
        "text-purple-500",
        "text-orange-500",
    ]
    return (
        //TODO add lines between icon and card as well as between icon and bottom of the element
        <article className={`flex flex-row relative font-pixel w-[700px] mb-10`}>
            <span>{props.element.date}</span>
            <motion.div className={`absolute left-[197px] top-[25px] h-full`}
                initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleX: 1, scaleY: 1, originX: 0, originY: 0 }}
                transition={{ duration: 1, }}

            >
                <div className={`h-[2px] w-44 bg-${props.element.color}-500`}></div>
                <div className={`h-[110%] bg-${props.element.color}-500 w-[2px] relative `}></div>
            </motion.div>

            <EntryIcon icon={props.element.icon} color={props.element.color} />
            <TimeCard {...props.element} delay={props.delay} />
        </article>
    );
}