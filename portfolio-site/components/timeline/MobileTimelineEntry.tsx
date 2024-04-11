import { motion } from "framer-motion";
import EntryIcon from "./EntryIcon";
import TimeCard from "./TimeCard";
import { TimelineElement } from "../../public/timelineAssets/timelineElements";
import { Separator } from "../ui/separator";
interface TimelineEntryProps {
    element: TimelineElement;
    delay: number;
    last?: boolean;
}


export default function MobileTimelineEntry(props: TimelineEntryProps) {
    return (
        <div className="flex flex-col max-h-[300px] relative ">
            {!props.last && <div className="absolute overflow-hidden h-full flex flex-row justify-evenly left-0 right-[30%] bottom-0 top- w-full items-center">
                <div className={`w-[1px] top-10 h-[400px] bg-${props.element.color}-500`}></div>
                <div className={`w-[1px] top-10 h-full bg-${props.element.color}-500`}></div>
            </div>}
            <article className={` relative bg-black p-2 gap-2 font-pixel border-[#4A4D52] border-b-${props.element.color}-500 border-2 mb-10 rounded-lg text-sm w-[300px] flex flex-col text-center`}>
                <div className="flex flex-row ">
                    <EntryIcon icon={props.element.icon} color={props.element.color} mobile={true} />
                    <h1 className={`justify-self-end text-${props.element.color}-500 inline mx-auto`}>{props.element.title}</h1>
                </div>
                <p className={` font-bold`}>{props.element.company}</p>
                <Separator className={`bg-${props.element.color}-500`} />
                <div className="flex opacity-70 flex-row text-xs justify-center gap-2">
                    <p className="">{props.element.location} |</p>
                    <p>{props.element.date}</p>
                </div>
                <p className="text-left">{props.element.description}</p>
            </article>
        </div>
    );
}
